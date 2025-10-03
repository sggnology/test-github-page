# GitHub Repository Secrets 설정 가이드

GitHub Pages에서 EmailJS가 작동하도록 하려면 Repository Secrets에 환경변수를 설정해야 합니다.

## 1. EmailJS 설정 완료
먼저 `EMAILJS_SETUP.md` 파일을 참고하여 EmailJS 계정 설정을 완료하세요.

## 2. GitHub Repository Secrets 설정

### 단계별 설정:

1. **GitHub 저장소 이동**
   - https://github.com/sggnology/test-github-page 로 이동

2. **Settings 탭 클릭**
   - 저장소 메뉴에서 "Settings" 클릭

3. **Secrets and variables 메뉴**
   - 왼쪽 사이드바에서 "Secrets and variables" → "Actions" 클릭

4. **New repository secret 버튼 클릭**

5. **다음 3개의 Secret을 추가:**

   **Secret 1:**
   - Name: `VITE_EMAILJS_SERVICE_ID`
   - Secret: EmailJS에서 발급받은 Service ID (예: service_xxxxxxx)

   **Secret 2:**
   - Name: `VITE_EMAILJS_TEMPLATE_ID`
   - Secret: EmailJS에서 생성한 Template ID (예: template_xxxxxxx)

   **Secret 3:**
   - Name: `VITE_EMAILJS_PUBLIC_KEY`
   - Secret: EmailJS에서 발급받은 Public Key (예: user_xxxxxxxxxxxxxxx)

## 3. 배포 확인

Secrets 설정 후:
1. 코드를 `github-page` 브랜치에 push
2. GitHub Actions에서 자동 빌드 및 배포
3. 배포된 사이트에서 이메일 전송 테스트

## 4. 문제 해결

### GitHub Actions 빌드 로그 확인:
1. GitHub 저장소에서 "Actions" 탭 클릭
2. 최근 워크플로우 실행 클릭
3. "Build with Vite" 단계에서 환경변수 설정 확인

### 브라우저 개발자 도구 확인:
1. F12 키로 개발자 도구 열기
2. Console 탭에서 EmailJS 관련 오류 메시지 확인

### 일반적인 문제:
- Secret 이름이 정확히 일치하는지 확인
- EmailJS 계정 설정이 완료되었는지 확인
- GitHub Actions 워크플로우가 성공적으로 실행되었는지 확인

## 참고사항

- GitHub Secrets는 저장소 소유자와 관리자만 설정 가능
- Secrets는 빌드 시점에 환경변수로 주입되어 번들에 포함됨
- 프론트엔드 환경변수는 클라이언트에서 접근 가능하므로 보안에 주의