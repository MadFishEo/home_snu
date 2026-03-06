export const dynamic = "force-dynamic";

type SitemapEntry = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
};

const STATIC_PAGES: SitemapEntry[] = [
  { loc: "/", changefreq: "weekly", priority: 1.0 },
  { loc: "/about", changefreq: "monthly", priority: 0.8 },
  { loc: "/research", changefreq: "monthly", priority: 0.8 },
  { loc: "/education", changefreq: "monthly", priority: 0.8 },
  { loc: "/news", changefreq: "daily", priority: 0.9 },
  { loc: "/contact", changefreq: "yearly", priority: 0.5 },
];

function entryToXml(entry: SitemapEntry): string {
  let xml = `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>`;
  if (entry.lastmod) xml += `\n    <lastmod>${entry.lastmod}</lastmod>`;
  if (entry.changefreq) xml += `\n    <changefreq>${entry.changefreq}</changefreq>`;
  if (entry.priority !== undefined && entry.priority !== null)
    xml += `\n    <priority>${entry.priority}</priority>`;
  xml += "\n  </url>";
  return xml;
}

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const base = process.env.VITE_HOME_SERVER_BASE_URL;
  const siteKey = process.env.VITE_SITE_KEY ?? "snu";

  const siteUrl = "https://snu.cultzup.com";
  let serverEntries: SitemapEntry[] = [];

  if (base) {
    try {
      const res = await fetch(`${base}/api/public/sitemap?site=${siteKey}`, {
        next: { revalidate: 60 },
      });
      if (res.ok) {
        const json = (await res.json()) as {
          success: boolean;
          data?: { entries: SitemapEntry[] };
        };
        if (json.success && json.data?.entries) {
          serverEntries = json.data.entries;
        }
      }
    } catch (err) {
      console.error("Failed to fetch sitemap entries from home_server:", err);
    }
  }

  const staticEntries = STATIC_PAGES.map((p) => ({
    ...p,
    loc: `${siteUrl}${p.loc}`,
  }));

  const allEntries = [...staticEntries, ...serverEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries.map(entryToXml).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
