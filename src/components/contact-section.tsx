"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Eye } from "lucide-react"
import emailjs from '@emailjs/browser'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPreviewOpen(true)
  }

  const handleConfirmSend = async () => {
    setIsSubmitting(true)
    setIsPreviewOpen(false)

    try {
      // EmailJS 설정 (환경변수에서 가져오기)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // 환경변수가 설정되지 않은 경우 에러 처리
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS 환경변수가 설정되지 않았습니다.')
        setSubmitStatus("error")
        return
      }

      // 이메일 템플릿 파라미터
      const templateParams = {
        to_email: 'sggnology@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        message: `연락처: ${formData.phone}\n\n문의내용:\n${formData.message}`
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus("success")
      setFormData({ fullName: "", email: "", phone: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error('이메일 전송 실패:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">무료 견적을 받아보세요</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            공간을 변화시킬 준비가 되셨나요? 연락주시면 함께 꿈을 현실로 만들어 드리겠습니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">문의하기</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                저희 타일 전문가팀이 프로젝트에 최적화된 솔루션을 찾아드리겠습니다. 
                맞춤형 추천과 견적을 위해 지금 연락주세요.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">전화</div>
                  <div className="text-muted-foreground">010-2699-3559</div>
                  <div className="text-sm text-muted-foreground">월-금 오전 9시-오후 6시</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">이메일</div>
                  <div className="text-muted-foreground">info@ppttile.com</div>
                  <div className="text-sm text-muted-foreground">24시간 이내 답변드립니다</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-card-foreground">
                  성명 *
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="홍길동"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                  이메일 주소 *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hong@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-card-foreground">
                  전화번호 *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010-1234-5678"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                  문의 내용 / 프로젝트 상세 *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="프로젝트에 대해 알려주세요. 원하시는 타일 스타일, 면적, 일정 등을 포함해 주시면 더 정확한 견적을 드릴 수 있습니다."
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-primary/10 text-primary px-4 py-3 rounded-lg text-sm">
                  문의해 주셔서 감사합니다! 24시간 이내에 연락드리겠습니다.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg text-sm">
                  문제가 발생했습니다. 다시 시도하시거나 직접 전화주세요.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg"
              >
                <Eye className="w-5 h-5 mr-2" />
                {isSubmitting ? "전송 중..." : "미리보기"}
              </Button>

              <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>문의 내용 미리보기</DialogTitle>
                    <DialogDescription>
                      아래 내용으로 이메일이 전송됩니다. 확인 후 전송 버튼을 눌러주세요.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">성명</label>
                        <p className="text-base font-medium">{formData.fullName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">전화번호</label>
                        <p className="text-base">{formData.phone}</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">이메일 주소</label>
                      <p className="text-base">{formData.email}</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground">문의 내용</label>
                      <div className="mt-2 p-3 bg-muted/50 rounded-lg">
                        <p className="text-base whitespace-pre-line">{formData.message}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>수신자:</strong> sggnology@gmail.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>발신자:</strong> {formData.email}
                      </p>
                    </div>
                  </div>

                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsPreviewOpen(false)}
                      disabled={isSubmitting}
                    >
                      수정하기
                    </Button>
                    <Button
                      onClick={handleConfirmSend}
                      disabled={isSubmitting}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? "전송 중..." : "이메일 전송"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <p className="text-xs text-muted-foreground text-center">
                문의하신 내용은 견적 및 상담 목적으로만 사용됩니다.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
