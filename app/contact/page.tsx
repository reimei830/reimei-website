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
  
  try {
    const response = await fetch('https://formspree.io/f/manayzwq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        _replyto: formData.email, // ← これを追加
        phone: formData.phone,
        message: formData.message,
      }),
    })
    
    const data = await response.json() // ← これを追加（エラー詳細取得）
    
    if (response.ok) {
      setStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      })
    } else {
      console.error('FormSpree error:', data) // ← エラー詳細を表示
      setStatus('error')
    }
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
      <main className="min-h-screen bg-gray-50">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-reimei-blue mb-4">お問い合わせ</h1>
              <p className="text-xl text-gray-600">
                自動化設備に関するご相談は、お気軽にお問い合わせください
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="text-green-600 text-6xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">送信完了</h2>
                    <p className="text-gray-600 mb-8">
                      お問い合わせありがとうございます。<br />
                      担当者より折り返しご連絡いたします。
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-reimei-blue hover:underline"
                    >
                      別のお問い合わせを送る
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                          会社名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-reimei-blue focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-reimei-blue focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                          メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-reimei-blue focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                          電話番号
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-reimei-blue focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-reimei-blue focus:border-transparent"
                        placeholder="ご相談内容をご記入ください"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                        送信に失敗しました。もう一度お試しください。
                      </div>
                    )}

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="bg-reimei-blue text-white px-12 py-4 rounded-md font-bold text-lg hover:bg-reimei-light-blue transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? '送信中...' : '送信する'}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow">
                  <svg className="w-12 h-12 text-reimei-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h3 className="font-bold text-gray-800 mb-2">電話</h3>
                  <a href="tel:0528936763" className="text-reimei-blue hover:underline">
                    052-893-6763
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <svg className="w-12 h-12 text-reimei-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-gray-800 mb-2">営業時間</h3>
                  <p className="text-gray-600">9:00〜18:00</p>
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