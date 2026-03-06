import Link from 'next/link'

const navItems = [
  { label: '홈', path: '/' },
  { label: '소개', path: '/about' },
  { label: '연구', path: '/research' },
  { label: '교육', path: '/education' },
  { label: '소식', path: '/news' },
  { label: '문의', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-snu-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-snu-green rounded-full flex items-center justify-center shadow-md">
                <span className="text-black font-bold text-xs">SNU</span>
              </div>
              <div>
                <p className="text-black font-bold text-lg leading-tight">SNU Institute</p>
                <p className="text-black text-xs">서울대학교차세대연구원</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              차세대 기술 연구를 선도하는 서울대학교차세대연구원은 양자기술, 반도체, 우주과학, 생명과학, 미래에너지 분야에서 인류의
              미래를 열어갑니다.
            </p>
            <p className="text-xs text-green-500 mt-3">snu.re.kr</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">사이트 메뉴</h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.path} className="flex-shrink-0">
                  <Link
                    href={item.path}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  서울특별시 관악구 관악로 1
                  <br />
                  공과대학 301동
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 flex-shrink-0 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                nxtgen@snu.re.kr
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 flex-shrink-0 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                02-880-7114
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 SNU Institute. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              이용약관
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              접근성 정책
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
