import { useMemo, useState } from 'react'

const categoryColors = {
  양자기술: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  반도체: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  생명과학: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  우주과학: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  에너지: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  국제협력: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  기타: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
}

function normalizeItems(apiItems) {
  if (!Array.isArray(apiItems)) return []

  return apiItems.map((item) => {
    const date = new Date(item.publishedAt ?? item.createdAt ?? '')
    const dateStr = Number.isNaN(date.getTime())
      ? ''
      : date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })

    const plain = String(item.content || '')
      .replace(/[#*_>`]/g, '')
      .replace(/\n+/g, ' ')
      .trim()
    const desc = plain.length <= 160 ? plain : `${plain.slice(0, 160)}…`

    const category = item.hashtags?.[0] ?? '기타'

    return {
      id: item._id,
      title: item.title,
      category,
      date: dateStr,
      author: item.author,
      desc,
    }
  })
}

export default function News({ items }) {
  const [active, setActive] = useState('전체')
  const allNews = useMemo(() => normalizeItems(items), [items])

  const categories = useMemo(() => {
    const set = new Set()
    allNews.forEach((n) => {
      if (n.category) set.add(n.category)
    })
    return ['전체', ...Array.from(set)]
  }, [allNews])

  const filtered = active === '전체' ? allNews : allNews.filter((n) => n.category === active)

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-snu-dark to-snu-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">뉴스 & 공지</h1>
          <p className="text-white/85 text-lg">서울대학교차세대연구원의 최신 소식을 전해드립니다</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-snu-green text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-snu-green'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[item.category] || categoryColors['기타']
                  }`}
                >
                  {item.category}
                </span>
                <span className="text-gray-400 text-xs">{item.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                {item.desc}
              </p>
              <p className="text-xs text-gray-400">by {item.author}</p>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">해당 카테고리의 소식이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const base = process.env.VITE_HOME_SERVER_BASE_URL
  const siteKey = process.env.VITE_SITE_KEY || 'snu'

  if (!base) {
    console.error('VITE_HOME_SERVER_BASE_URL is not set')
    return { props: { items: [] } }
  }

  try {
    const res = await fetch(`${base}/api/public/news?site=${siteKey}`)
    if (!res.ok) {
      console.error('Failed to fetch news from home_server', await res.text())
      return { props: { items: [] } }
    }

    const json = await res.json()
    return {
      props: {
        items: json?.data?.items ?? [],
      },
    }
  } catch (err) {
    console.error('Error fetching news from home_server', err)
    return { props: { items: [] } }
  }
}
