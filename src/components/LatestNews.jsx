import Link from 'next/link'

function formatDate(value) {
  if (!value) return ''
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

function formatMonth(value) {
  if (!value) return ''
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return ''
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${mm}.${dd}`
}

function toDesc(content) {
  const plain = content.replace(/[#*_>`]/g, '').replace(/\n+/g, ' ').trim()
  return plain.length <= 120 ? plain : `${plain.slice(0, 120)}…`
}

async function fetchLatestNews() {
  const base = process.env.VITE_HOME_SERVER_BASE_URL
  const siteKey = process.env.VITE_SITE_KEY ?? 'snu'
  if (!base) return []
  try {
    const res = await fetch(`${base}/api/public/news?site=${siteKey}&limit=6`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    const json = await res.json()
    return json.success && json.data?.items ? json.data.items : []
  } catch {
    return []
  }
}

export default async function LatestNews() {
  const items = await fetchLatestNews()
  if (items.length === 0) return null

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-snu-green dark:text-green-400 font-semibold text-sm uppercase tracking-widest">
              Latest News
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              최신 소식
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center text-snu-green dark:text-green-400 font-medium hover:underline"
          >
            전체 보기
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-900 hidden sm:block" />

          <div className="space-y-6">
            {items.map((item, idx) => {
              const highlight = idx === 0
              const dateVal = item.publishedAt ?? item.createdAt
              return (
                <Link key={item._id} href={`/news/${item._id}`} className="flex gap-6 group">
                  <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-32">
                    <div className={`w-4 h-4 rounded-full border-2 z-10 mt-5 ${highlight ? 'bg-snu-green border-snu-green' : 'bg-white dark:bg-gray-800 border-green-300 dark:border-green-700'}`} />
                    <span className="text-xs text-gray-400 dark:text-gray-500 mt-2">{formatMonth(dateVal)}</span>
                  </div>

                  <article className={`flex-1 bg-white dark:bg-gray-900 rounded-2xl p-5 border transition-shadow duration-300 group-hover:shadow-lg ${highlight ? 'border-snu-green dark:border-green-700' : 'border-gray-100 dark:border-gray-700'}`}>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${highlight ? 'bg-snu-green text-white' : 'bg-green-50 dark:bg-green-900/20 text-snu-green dark:text-green-400'}`}>
                        {item.hashtags?.[0] ?? '소식'}
                      </span>
                      <span className="text-gray-400 dark:text-gray-500 text-xs">{formatDate(dateVal)}</span>
                      {highlight && (
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">★ 주요 성과</span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">{toDesc(item.content)}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 dark:text-gray-500 text-xs">by {item.author}</span>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {item.hashtags?.map((tag) => (
                          <span key={tag} className="text-xs text-snu-green dark:text-green-400">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
