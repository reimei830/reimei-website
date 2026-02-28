'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdODVIxWGG7EZCNGArt1RyWdyYLkFwjpSJ2uqvax_BRrDE-BA/formResponse'

    const formBody = new URLSearchParams({
      'entry.671155879': formData.company,
      'entry.2070172825': formData.name,
      'entry.363465358': formData.email,
      'entry.1589760849': formData.phone,
      'entry.1808589645': formData.message,
    })

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      })

      setStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      console.error('Request error:', error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-bg">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-white mb-4">お問い合わせ</h1>
              <p className="text-xl text-gray-400">
                自動化設備に関するご相談は、お気軽にお問い合わせください
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 md:p-12">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="text-green-400 text-6xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold text-white mb-4">送信完了</h2>
                    <p className="text-gray-300 mb-8">
                      お問い合わせありがとうございます。<br />
                      担当者より折り返しご連絡いたします。
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-neon-blue hover:text-blue-400 transition-colors"
                    >
                      別のお問い合わせを送る
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-gray-300 mb-2">
                          会社名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/20 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/20 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                          メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/20 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-2">
                          電話番号
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/20 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/20 focus:outline-none"
                        placeholder="ご相談内容をご記入ください"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded">
                        送信に失敗しました。もう一度お試しください。
                      </div>
                    )}

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="bg-gradient-to-r from-neon-blue to-blue-500 text-white px-12 py-4 rounded-md font-bold text-lg shadow-neon hover:shadow-neon-strong transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? '送信中...' : '送信する'}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6 text-center">
                <div className="glass-card p-6">
                  <svg className="w-12 h-12 text-neon-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h3 className="font-bold text-white mb-2">電話</h3>
                  <a href="tel:0528936763" className="text-neon-blue hover:text-blue-400 transition-colors">
                    052-893-6763
                  </a>
                </div>
                <div className="glass-card p-6">
                  <svg className="w-12 h-12 text-neon-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-white mb-2">営業時間</h3>
                  <p className="text-gray-400">9:00〜18:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}