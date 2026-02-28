'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

export default function Services() {
  const [plcHover, setPlcHover] = useState(false)
  const [robotHover, setRobotHover] = useState(false)

  return (
    <section id="services" className="py-20 bg-dark-bg-secondary relative">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400 mb-4">
              事業内容
            </h2>
            <p className="text-xl text-gray-400">製造業向け自動化設備の電気設計施工</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PLC設計 */}
          <FadeIn delay={0.1} direction="left">
            <div
              className="relative"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setPlcHover(true)}
              onMouseLeave={() => setPlcHover(false)}
            >
              <div
                className="glass-card p-8 transition-all duration-500 transform-gpu"
                style={{
                  transform: plcHover
                    ? 'rotateY(-5deg) rotateX(5deg) translateY(-10px) scale(1.02)'
                    : 'rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)',
                  boxShadow: plcHover
                    ? '0 25px 50px -12px rgba(0, 167, 225, 0.3), 0 0 30px rgba(0, 167, 225, 0.1)'
                    : '0 0 0 rgba(0, 0, 0, 0)',
                  borderColor: plcHover ? 'rgba(0, 167, 225, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="bg-neon-blue/20 text-neon-blue p-4 rounded-lg transition-all duration-300"
                    style={{
                      transform: plcHover ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                      boxShadow: plcHover ? '0 0 20px rgba(0, 167, 225, 0.3)' : 'none',
                    }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">PLC設計</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  製造現場の自動化に欠かせないPLC（プログラマブルロジックコントローラー）の設計・開発を行います。
                  豊富な経験と技術力で、お客様のニーズに最適な制御システムを提供します。
                </p>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-bold text-gray-200 mb-3">対応メーカー</h4>
                  <div className="flex flex-wrap gap-2">
                    {['三菱電機', 'KEYENCE', 'TOYOPUC', 'WAGO'].map((name) => (
                      <span key={name} className="bg-neon-blue/10 text-neon-blue border border-neon-blue/20 px-3 py-1 rounded-full text-sm hover:bg-neon-blue/20 hover:shadow-neon transition-all duration-200">
                        {name}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-200 mt-4 mb-3">特徴</h4>
                  <ul className="space-y-2 text-gray-400">
                    {['ロボット統合制御に精通', 'Modbus通信システム構築', '高速・高精度な制御プログラム'].map((text) => (
                      <li key={text} className="flex items-start transition-all duration-200 hover:translate-x-2 hover:text-gray-300">
                        <span className="text-neon-blue mr-2">&#10003;</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 協働ロボット統合 */}
          <FadeIn delay={0.2} direction="right">
            <div
              className="relative"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setRobotHover(true)}
              onMouseLeave={() => setRobotHover(false)}
            >
              <div
                className="glass-card p-8 transition-all duration-500 transform-gpu"
                style={{
                  transform: robotHover
                    ? 'rotateY(5deg) rotateX(5deg) translateY(-10px) scale(1.02)'
                    : 'rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)',
                  boxShadow: robotHover
                    ? '0 25px 50px -12px rgba(0, 167, 225, 0.3), 0 0 30px rgba(0, 167, 225, 0.1)'
                    : '0 0 0 rgba(0, 0, 0, 0)',
                  borderColor: robotHover ? 'rgba(0, 167, 225, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="bg-neon-blue/20 text-neon-blue p-4 rounded-lg transition-all duration-300"
                    style={{
                      transform: robotHover ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
                      boxShadow: robotHover ? '0 0 20px rgba(0, 167, 225, 0.3)' : 'none',
                    }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">協働ロボット統合</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  協働ロボットと産業用ロボットを活用した自動化設備を設計・製作します。
                  小物部品の搬送検査、洗浄部品のプレ乾燥など、様々な用途に対応可能です。
                </p>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-bold text-gray-200 mb-3">対応ロボット</h4>
                  <div className="space-y-2 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-300">協働ロボット</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {['FAIRINO', 'JAKA', 'ELITE', 'DENSO'].map((name) => (
                          <span key={name} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-sm hover:bg-emerald-500/20 transition-all duration-200">
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mt-3">産業用ロボット</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {['FANUC', 'NACHI', 'Kawasaki', 'YASUKAWA'].map((name) => (
                          <span key={name} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-sm hover:bg-emerald-500/20 transition-all duration-200">
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-200 mb-3">強み</h4>
                  <ul className="space-y-2 text-gray-400">
                    {['コストパフォーマンスの高い設備製作', '幅広いメーカー対応', '柔軟な仕様変更・カスタマイズ'].map((text) => (
                      <li key={text} className="flex items-start transition-all duration-200 hover:translate-x-2 hover:text-gray-300">
                        <span className="text-neon-blue mr-2">&#10003;</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
