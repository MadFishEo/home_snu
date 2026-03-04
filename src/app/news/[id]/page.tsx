import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ApiNewsItem = {
  _id: string
  title: string
  content: string
  author: string
  site: string
  status: 'draft' | 'published'
  publishedAt?: string
  createdAt?: string
  hashtags?: string[]
}

type PageProps = {
  params: { id: string }
}

function formatDate(value?: string) {
  if (!value) return ''
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

async function fetchNewsDetail(id: string) {
  const base = process.env.VITE_HOME_SERVER_BASE_URL
  if (!base) return null

  const res = await fetch(`${base}/api/news/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) return null

  const json = (await res.json()) as { success: boolean; data?: ApiNewsItem }
  if (!json.success || !json.data) return null

  const item = json.data

  const siteKey = process.env.VITE_SITE_KEY ?? 'snu'
  const allowedSite = item.site === siteKey || item.site === 'common'

  if (item.status !== 'published' || !allowedSite) {
    return null
  }

  return item
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = await fetchNewsDetail(params.id)
  if (!item) {
    return {
      title: '소식을 찾을 수 없습니다',
    }
  }

  const plain = item.content.replace(/[#*_>`]/g, '').replace(/\n+/g, ' ').trim()

  return {
    title: item.title,
    description: plain.slice(0, 160),
    openGraph: {
      title: item.title,
      description: plain.slice(0, 160),
      type: 'article',
    },
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const item = await fetchNewsDetail(params.id)
  if (!item) notFound()

  const dateLabel = formatDate(item.publishedAt ?? item.createdAt)
  const plainContent = item.content.replace(/\r\n/g, '\n')

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-snu-dark to-snu-green py-10">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-white/80 mb-2">
            {dateLabel} · {item.author}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{item.title}</h1>
          {Array.isArray(item.hashtags) && item.hashtags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          {plainContent.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </article>
    </main>
  )
}

