const programs = [
  {
    level: '학사',
    icon: '🎓',
    duration: '4년',
    departments: ['물리학과 (양자물리 트랙)', '전기정보공학부', '재료공학부', '화학생물공학부', '기계공학부', '수리과학부'],
    desc: '차세대 기술 분야의 이론과 실습을 균형 있게 교육하는 세계 수준의 학부 프로그램',
  },
  {
    level: '석사',
    icon: '📜',
    duration: '2년',
    departments: ['양자기술대학원', '반도체공학과', '우주항공공학과', '바이오시스템소재학부'],
    desc: '차세대 기술 전문 연구 역량을 키우는 석사 과정',
  },
  {
    level: '박사',
    icon: '🔭',
    duration: '4-5년',
    departments: ['전 학과 박사 과정', '학연 연계 과정', '글로벌 공동지도 과정'],
    desc: '세계 최고의 차세대 기술 연구자를 양성하는 박사 과정',
  },
]

const onlinePrograms = [
  { title: '양자컴퓨팅 입문', duration: '8주', enrolled: '9,200+', level: '입문' },
  { title: '차세대 반도체 소자 이론', duration: '6주', enrolled: '5,800+', level: '중급' },
  { title: '합성생물학과 유전체 편집', duration: '10주', enrolled: '6,400+', level: '중급' },
  { title: '핵융합 에너지 기술', duration: '8주', enrolled: '3,700+', level: '고급' },
]

export default function Education() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-snu-dark to-snu-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">교육 프로그램</h1>
          <p className="text-white/85 text-lg">차세대 기술을 이끌 미래 인재를 양성합니다</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Degree Programs */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">학위 과정</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.level} className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xl">{p.level} 과정</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">수업 기간: {p.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{p.desc}</p>
                <div className="space-y-2">
                  {p.departments.map((dep) => (
                    <div key={dep} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-snu-green dark:bg-green-400 rounded-full flex-shrink-0" />
                      {dep}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Programs */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">온라인 강좌</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {onlinePrograms.map((course) => (
              <div
                key={course.title}
                className="flex items-center gap-4 p-6 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
              >
                <div className="w-14 h-14 bg-snu-green/10 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-snu-green dark:text-green-400 font-bold text-lg">S</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{course.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.enrolled} 수강</span>
                    <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-full text-xs">
                      {course.level}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-snu-green text-white text-sm rounded-2xl hover:bg-snu-dark transition-colors flex-shrink-0">
                  수강하기
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
