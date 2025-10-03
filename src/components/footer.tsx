export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P</span>
              </div>
              <span className="text-lg font-bold text-card-foreground">P&P 타일</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium tiles for exceptional spaces since 2023.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">제품</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  대리석 컬렉션
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  포세린 타일
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  기하학 패턴
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  천연석
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">회사 소개</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  전시장
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  채용 정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  지속가능경영
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">고객 지원</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  시공 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  관리 및 유지보수
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  품질보증
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  연락처
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 P&P 타일. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
