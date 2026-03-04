const areas = [
  {
    num: '01',
    icon: '⚛️',
    title: '양자 & 첨단기술',
    description: '양자컴퓨팅, 양자통신, 양자센서 분야의 원천기술을 연구합니다. 차세대 반도체 소자와 나노기술을 결합한 혁신적 연구로 미래 기술 패권을 선도합니다.',
    tags: ['양자컴퓨팅', '차세대반도체', '나노기술'],
  },
  {
    num: '02',
    icon: '🚀',
    title: '우주 & 에너지',
    description: '위성 시스템, 우주 탐사 기술, 차세대 에너지 저장 시스템을 연구합니다. 탄소중립 실현을 위한 수소에너지, 핵융합 에너지 원천 연구를 수행합니다.',
    tags: ['우주탐사', '수소에너지', '핵융합'],
  },
  {
    num: '03',
    icon: '🧬',
    title: '생명 & 바이오',
    description: '유전체 편집, 합성생물학, 차세대 신약 개발 플랫폼을 연구합니다. 인공지능을 활용한 단백질 구조 예측과 신약 후보 물질 발굴 연구를 선도합니다.',
    tags: ['유전체편집', '합성생물학', 'AI신약'],
  },
]

export default function CoreAreas() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-snu-green dark:text-green-400 font-semibold text-sm uppercase tracking-widest">
            Core Areas
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            핵심 연구 분야
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            서울대학교차세대연구원은 세 가지 핵심 분야에서 인류의 미래를 열어갑니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="relative rounded-3xl border border-gray-100 dark:border-gray-700 p-8 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Large decorative number */}
              <div className="absolute -top-2 -right-2 text-8xl font-black text-snu-green/8 dark:text-green-400/8 select-none pointer-events-none leading-none group-hover:text-snu-green/15 transition-colors duration-300">
                {area.num}
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-2xl mb-6 shadow-sm">
                  {area.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-snu-green dark:text-green-400">{area.num}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{area.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-snu-green dark:text-green-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
