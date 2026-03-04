import Link from 'next/link'

const newsData = [
  {
    id: 1,
    title: '양자 오류 수정 알고리즘 세계 최초 실증 성공',
    author: '김양자',
    date: '2026.02.28',
    month: '02.28',
    description: '서울대 차세대연구원 양자연구팀이 100큐비트 이상 규모의 양자 오류 수정 알고리즘을 세계 최초로 실증하는 데 성공했습니다.',
    tags: ['#양자컴퓨팅', '#오류수정', '#Nature'],
    category: '양자기술',
    highlight: true,
  },
  {
    id: 2,
    title: '차세대 2nm 반도체 소자 동작 특성 규명',
    author: '이반도체',
    date: '2026.02.22',
    month: '02.22',
    description: '2나노미터급 게이트올어라운드(GAA) 트랜지스터의 전기적 특성을 정밀 분석하여 설계 가이드라인을 제시했습니다.',
    tags: ['#반도체', '#GAA', '#나노소자'],
    category: '반도체',
    highlight: false,
  },
  {
    id: 3,
    title: '합성생물학 기반 바이오플라스틱 생산 효율 10배 향상',
    author: '박생명',
    date: '2026.02.18',
    month: '02.18',
    description: '유전자 편집 기술로 미생물을 최적화하여 생분해성 바이오플라스틱 생산 효율을 기존 대비 10배 높이는 데 성공했습니다.',
    tags: ['#합성생물학', '#바이오플라스틱', '#탄소중립'],
    category: '생명과학',
    highlight: false,
  },
  {
    id: 4,
    title: 'SNU 소형 위성 큐브샛 3기 궤도 진입 성공',
    author: '최우주',
    date: '2026.02.12',
    month: '02.12',
    description: '서울대학교차세대연구원이 독자 개발한 6U 큐브샛 3기가 500km 저궤도에 안착하여 지구 관측 데이터 전송을 시작했습니다.',
    tags: ['#큐브샛', '#우주탐사', '#지구관측'],
    category: '우주과학',
    highlight: false,
  },
  {
    id: 5,
    title: '핵융합 플라즈마 제어 AI 모델 개발',
    author: '정에너지',
    date: '2026.02.07',
    month: '02.07',
    description: '토카막 핵융합 장치에서 플라즈마 불안정성을 실시간으로 예측하고 제어하는 딥러닝 모델을 개발하였습니다.',
    tags: ['#핵융합', '#플라즈마', '#AI제어'],
    category: '에너지',
    highlight: false,
  },
  {
    id: 6,
    title: '국제 양자기술 협력 컨소시엄 SNU 주도로 출범',
    author: '한국제',
    date: '2026.02.01',
    month: '02.01',
    description: '미국 MIT, 영국 UCL, 독일 TU Munich 등 12개 기관이 참여하는 글로벌 양자기술 연구 컨소시엄이 SNU 주도로 공식 출범했습니다.',
    tags: ['#국제협력', '#양자컨소시엄', '#글로벌'],
    category: '국제협력',
    highlight: false,
  },
]

export default function LatestNews() {
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

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-900 hidden sm:block" />

          <div className="space-y-6">
            {newsData.map((item) => (
              <article key={item.id} className="flex gap-6 group">
                {/* Date badge */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-32">
                  <div className={`w-4 h-4 rounded-full border-2 z-10 mt-5 ${item.highlight ? 'bg-snu-green border-snu-green' : 'bg-white dark:bg-gray-800 border-green-300 dark:border-green-700'}`} />
                  <span className="text-xs text-gray-400 dark:text-gray-500 mt-2">{item.month}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 bg-white dark:bg-gray-900 rounded-2xl p-5 border transition-shadow duration-300 group-hover:shadow-lg ${item.highlight ? 'border-snu-green dark:border-green-700' : 'border-gray-100 dark:border-gray-700'}`}>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${item.highlight ? 'bg-snu-green text-white' : 'bg-green-50 dark:bg-green-900/20 text-snu-green dark:text-green-400'}`}>
                      {item.category}
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 text-xs">{item.date}</span>
                    {item.highlight && (
                      <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">★ 주요 성과</span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 dark:text-gray-500 text-xs">by {item.author}</span>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs text-snu-green dark:text-green-400 hover:underline cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
