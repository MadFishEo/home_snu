import Link from 'next/link'

const stats = [
  { value: "42", label: "연구 프로젝트" },
  { value: "380+", label: "연구원" },
  { value: "15개국", label: "국제 협력" },
  { value: "1,200+", label: "발표 논문" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-green-500">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full mb-6 backdrop-blur-sm">
              2026년도 차세대 연구 프로그램 공개모집
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              차세대 기술로
              <br />
              <span className="text-white">미래를 개척</span>
            </h1>
            <p className="text-lg text-white/85 mb-10 leading-relaxed">
              서울대학교차세대연구원은 양자기술, 차세대 반도체, 우주과학,
              생명과학 분야에서 인류의 미래를 열어가는 연구를 수행합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-snu-green font-semibold rounded-2xl hover:bg-green-50 transition-colors duration-200 shadow-lg"
              >
                기관 소개
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm border border-white/30"
              >
                연구 분야 보기
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <p className="text-white/90 text-xs uppercase tracking-widest font-semibold mb-5">
                연구 현황
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-2xl p-4 text-center"
                  >
                    <p className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-white/80 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80L1440 80L1440 20C1200 60 960 80 720 60C480 40 240 0 0 20L0 80Z"
            className="fill-white dark:fill-gray-900"
          />
        </svg>
      </div>
    </section>
  );
}
