const researchAreas = [
  {
    icon: '⚛️',
    title: '양자컴퓨팅',
    projects: 12,
    desc: '양자 오류 수정, 양자 알고리즘, 큐비트 소자 개발 등 양자컴퓨팅 원천기술 연구',
    tags: ['큐비트', '오류수정', '양자알고리즘'],
  },
  {
    icon: '💾',
    title: '차세대반도체',
    projects: 10,
    desc: '2nm 이하 GAA 트랜지스터, 3D 적층 반도체, 뉴로모픽 칩 등 미래 반도체 소자 연구',
    tags: ['GAA', '3D반도체', '뉴로모픽'],
  },
  {
    icon: '🛰️',
    title: '우주과학',
    projects: 8,
    desc: '소형 위성 시스템, 우주 추진, 심우주 탐사 기술 및 위성 데이터 활용 연구',
    tags: ['큐브샛', '우주추진', '원격탐사'],
  },
  {
    icon: '⚡',
    title: '핵융합에너지',
    projects: 7,
    desc: '토카막 플라즈마 제어, 핵융합 재료, AI 기반 플라즈마 안정화 기술 연구',
    tags: ['플라즈마', '토카막', 'AI제어'],
  },
  {
    icon: '🧬',
    title: '합성생물학',
    projects: 9,
    desc: '유전체 편집, 대사공학, 바이오의약품 개발 플랫폼 및 AI 신약 발굴 연구',
    tags: ['유전체편집', '대사공학', 'AI신약'],
  },
  {
    icon: '🔬',
    title: '나노기술',
    projects: 6,
    desc: '나노소자 제작, 나노바이오 융합, 양자점 기반 소재 및 나노 에너지 소자 연구',
    tags: ['나노소재', '양자점', '나노바이오'],
  },
]

export default function Research() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-snu-dark to-snu-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">연구 프로그램</h1>
          <p className="text-white/85 text-lg">차세대 기술 최고 수준의 연구 성과를 만들어갑니다</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: '진행중 연구 프로젝트', value: '42+' },
            { label: '국제 특허', value: '1,200+' },
            { label: '기술이전 건수', value: '56' },
            { label: '국제 협력', value: '15개국' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-snu-green dark:text-green-400">{s.value}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Research Areas */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">연구 분야</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
            >
              <div className="text-3xl mb-4">{area.icon}</div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{area.title}</h3>
                <span className="text-xs bg-snu-green/10 text-snu-green dark:text-green-400 px-2 py-1 rounded-full ml-2 flex-shrink-0">
                  {area.projects}개 프로젝트
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{area.desc}</p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-green-50 dark:bg-green-900/20 text-snu-green dark:text-green-400 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
