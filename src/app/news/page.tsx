import type { Metadata } from "next";
import NewsClient, { type NewsItem } from "./NewsClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "뉴스 & 공지 | SNU Institute",
  description: "서울대학교차세대연구원의 최신 소식을 전해드립니다.",
};

type ApiNewsItem = {
  _id: string;
  title: string;
  slug?: string;
  content: string;
  author: string;
  site: string;
  visible?: boolean;
  publishedAt?: string;
  createdAt?: string;
  hashtags?: string[];
};

function toDisplayItem(item: ApiNewsItem): NewsItem {
  const date = new Date(item.publishedAt ?? item.createdAt ?? "");
  const dateStr = Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

  const plain = item.content
    .replace(/[#*_>`]/g, "")
    .replace(/\n+/g, " ")
    .trim();
  const desc = plain.length <= 160 ? plain : `${plain.slice(0, 160)}…`;

  const category = item.hashtags?.[0] ?? "기타";

  return {
    id: item.slug || item._id,
    title: item.title,
    category,
    date: dateStr,
    author: item.author,
    desc,
  };
}

async function fetchNews() {
  const base = process.env.VITE_HOME_SERVER_BASE_URL;
  const siteKey = process.env.VITE_SITE_KEY ?? "snu";

  if (!base) {
    console.error("VITE_HOME_SERVER_BASE_URL is not set");
    return [];
  }

  const res = await fetch(`${base}/api/public/news?site=${siteKey}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("Failed to fetch news from home_server", await res.text());
    return [];
  }

  const json = (await res.json()) as {
    success: boolean;
    data?: { items?: ApiNewsItem[] };
  };

  if (!json.success || !json.data?.items) return [];

  return json.data.items.map(toDisplayItem);
}

export default async function NewsPage() {
  const items = await fetchNews();
  return <NewsClient initialItems={items} />;
}
