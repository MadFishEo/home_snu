const milestones = [
  { year: '2005', text: '서울대학교차세대연구원 설립 — 차세대 기술 연구 전문기관 개원' },
  { year: '2010', text: '양자기술연구센터 개소 — 국내 최초 양자컴퓨팅 연구 시작' },
  { year: '2015', text: '글로벌 연구 허브 구축 — 해외 12개국 기관과 공동 연구 협약' },
  { year: '2020', text: '우주과학연구단 창설 — 독자 큐브샛 개발 착수' },
  { year: '2026', text: '차세대반도체·생명과학 융합 연구 센터 개소' },
]

const leadership = [
  { name: '김차세대', role: '원장', desc: '양자컴퓨팅 및 첨단반도체 전문가, MIT Ph.D.' },
  { name: '이우주', role: '부원장 (연구)', desc: '우주과학 및 핵융합 에너지 전문가' },
  { name: '박생명', role: '부원장 (교육)', desc: '합성생물학 및 유전체공학 전문가' },
]

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-snu-dark to-snu-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">기관 소개</h1>
          <p className="text-white/85 text-lg">서울대학교차세대연구원의 역사, 비전, 그리고 미래</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-snu-green dark:text-green-400 font-semibold text-sm uppercase tracking-widest">Mission & Vision</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white mb-6">사명과 비전</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              서울대학교차세대연구원은 양자기술, 차세대 반도체, 우주과학, 생명과학, 미래에너지 분야에서 인류의 지속가능한 미래를 위한 원천기술을 연구합니다.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              우리는 도전적이고 창의적인 연구 환경을 조성하여 미래 사회가 필요로 하는 차세대 핵심 기술을 선도적으로 개발하고 글로벌 기술 경쟁력을 강화합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '설립 연도', value: '2005' },
              { label: '연구원', value: '380+' },
              { label: '국제 특허', value: '1,200+' },
              { label: '국제 협력', value: '15개국' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-snu-green dark:text-green-400">{stat.value}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">주요 연혁</h2>
          <div className="relative border-l-2 border-snu-green dark:border-green-600 pl-8 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-snu-green dark:bg-green-500 rounded-full border-4 border-white dark:border-gray-900" />
                <span className="text-snu-green dark:text-green-400 font-bold text-sm">{m.year}</span>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">주요 인사</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-snu-green to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {person.name[0]}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{person.name}</h3>
                <p className="text-snu-green dark:text-green-400 text-sm font-medium">{person.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{person.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
