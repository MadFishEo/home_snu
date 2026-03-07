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
        <div className="grid md:grid-cols-2 gap-10 mb-10">
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
