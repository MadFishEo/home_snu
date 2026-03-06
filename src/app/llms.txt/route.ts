export const dynamic = "force-dynamic";

const FALLBACK = `# SNU Institute - 서울대학교차세대연구원

> llms.txt 컨텐츠가 아직 등록되지 않았습니다.
`;

export async function GET() {
  const base = process.env.VITE_HOME_SERVER_BASE_URL;
  const siteKey = process.env.VITE_SITE_KEY ?? "snu";

  let content = FALLBACK;

  if (base) {
    try {
      const res = await fetch(`${base}/api/public/llms-txt?site=${siteKey}`, {
        next: { revalidate: 60 },
      });
      if (res.ok) {
        const json = (await res.json()) as {
          success: boolean;
          data?: { content?: string };
        };
        if (json.success && json.data?.content) {
          content = json.data.content;
        }
      }
    } catch (err) {
      console.error("Failed to fetch llms.txt from home_server:", err);
    }
  }

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
