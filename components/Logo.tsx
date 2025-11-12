import Image from 'next/image'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function Logo({ size = 'medium', className = '' }: LogoProps) {
  const sizes = {
    small: { width: 80, height: 70 },
    medium: { width: 150, height: 130 },
    large: { width: 250, height: 217 },
  }

  const { width, height } = sizes[size]

  return (
    <Image
      src="/logo-200.png"
      alt="株式会社黎明ロゴ"
      width={width}
      height={height}
      className={className}
      priority
      style={{ width: 'auto', height: 'auto', maxHeight: `${height}px` }}
    />
  )
}