'use client'

import { useState } from 'react'

interface NewsItem {
  id: number
  title: string
  category: string
  date: string
  author: string
  desc: string
}

type CategoryColorMap = Record<string, string>

const allNews: NewsItem[] = [
  {
    id: 1,
    title: '양자 오류 수정 알고리즘 세계 최초 실증 성공',
    category: '양자기술',
    date: '2026.02.28',
    author: '김양자',
    desc: '서울대 차세대연구원 양자연구팀이 100큐비트 이상 규모의 양자 오류 수정 알고리즘을 세계 최초로 실증하는 데 성공했습니다.',
  },
  {
    id: 2,
    title: '차세대 2nm 반도체 소자 동작 특성 규명',
    category: '반도체',
    date: '2026.02.22',
    author: '이반도체',
    desc: '2나노미터급 GAA 트랜지스터의 전기적 특성을 정밀 분석하여 설계 가이드라인을 제시했습니다.',
  },
  {
    id: 3,
    title: '합성생물학 기반 바이오플라스틱 생산 효율 10배 향상',
    category: '생명과학',
    date: '2026.02.18',
    author: '박생명',
    desc: '유전자 편집 기술로 미생물을 최적화하여 생분해성 바이오플라스틱 생산 효율을 기존 대비 10배 높이는 데 성공했습니다.',
  },
  {
    id: 4,
    title: 'SNU 소형 위성 큐브샛 3기 궤도 진입 성공',
    category: '우주과학',
    date: '2026.02.12',
    author: '최우주',
    desc: '서울대학교차세대연구원이 독자 개발한 6U 큐브샛 3기가 500km 저궤도에 안착하여 지구 관측 데이터 전송을 시작했습니다.',
  },
  {
    id: 5,
    title: '핵융합 플라즈마 제어 AI 모델 개발',
    category: '에너지',
    date: '2026.02.07',
    author: '정에너지',
    desc: '토카막 핵융합 장치에서 플라즈마 불안정성을 실시간으로 예측하고 제어하는 딥러닝 모델을 개발하였습니다.',
  },
  {
    id: 6,
    title: '국제 양자기술 협력 컨소시엄 SNU 주도로 출범',
    category: '국제협력',
    date: '2026.02.01',
    author: '한국제',
    desc: '미국 MIT, 영국 UCL, 독일 TU Munich 등 12개 기관이 참여하는 글로벌 양자기술 연구 컨소시엄이 SNU 주도로 공식 출범했습니다.',
  },
  {
    id: 7,
    title: 'AI 기반 단백질 구조 예측 플랫폼 공개',
    category: '생명과학',
    date: '2026.01.28',
    author: '오바이오',
    desc: 'SNU 생명과학연구팀이 개발한 차세대 단백질 구조 예측 AI가 오픈소스로 공개되었습니다.',
  },
  {
    id: 8,
    title: '2026 SNU 차세대 연구 심포지엄 개최',
    category: '국제협력',
    date: '2026.01.20',
    author: '홍보팀',
    desc: '서울대학교차세대연구원이 주관하는 연례 국제 심포지엄에 15개국 300여 명의 연구자가 참여했습니다.',
  },
  {
    id: 9,
    title: '나노 에너지 소자 효율 세계 최고 수준 달성',
    category: '반도체',
    date: '2026.01.15',
    author: '나노팀',
    desc: '양자점 기반 나노 에너지 소자의 광전변환 효율이 42%를 달성하여 세계 최고 기록을 경신했습니다.',
  },
]

const categories: string[] = ['전체', '양자기술', '반도체', '생명과학', '우주과학', '에너지', '국제협력']

const categoryColors: CategoryColorMap = {
  양자기술: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  반도체: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  생명과학: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  우주과학: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  에너지: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  국제협력: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
}

export default function NewsPage() {
  const [active, setActive] = useState<string>('전체')

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
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[item.category] ?? 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {item.category}
                </span>
                <span className="text-gray-400 text-xs">{item.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">{item.desc}</p>
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

