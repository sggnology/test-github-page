# EmailJS 설정 가이드

## 1. EmailJS 계정 생성
1. [EmailJS 웹사이트](https://www.emailjs.com/)에 방문
2. 계정 생성 또는 로그인

## 2. 이메일 서비스 설정
1. Dashboard에서 "Email Services" 클릭
2. "Add New Service" 클릭
3. Gmail을 선택하고 sggnology@gmail.com 계정으로 연결
4. Service ID 복사 (예: service_xxxxxxx)

## 3. 이메일 템플릿 생성
1. Dashboard에서 "Email Templates" 클릭
2. "Create New Template" 클릭
3. 다음 템플릿을 사용:

```
제목: P&P 타일 문의 - {{from_name}}님

보낸사람: {{from_name}} ({{from_email}})

{{message}}

---
이 메일은 P&P 타일 웹사이트 문의 폼에서 전송되었습니다.
```

4. Template ID 복사 (예: template_xxxxxxx)

## 4. Public Key 확인
1. Dashboard에서 "Integration" 클릭
2. Public Key 복사 (예: user_xxxxxxxxxxxxxxx)

## 5. 환경변수 설정
`.env.local` 파일에 다음 값들을 설정:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. 이메일 템플릿 변수 설정
EmailJS 템플릿에서 다음 변수들을 사용할 수 있습니다:
- `{{to_email}}`: sggnology@gmail.com (수신자)
- `{{from_name}}`: 문의자 이름
- `{{from_email}}`: 문의자 이메일
- `{{phone}}`: 문의자 전화번호
- `{{message}}`: 문의 내용 (전화번호 포함)
- `{{reply_to}}`: 답변할 이메일 주소

## 주의사항
- EmailJS는 월 200개의 무료 이메일을 제공합니다
- 더 많은 이메일이 필요한 경우 유료 플랜을 구독해야 합니다
- 환경변수 파일(.env.local)은 git에 커밋하지 마세요