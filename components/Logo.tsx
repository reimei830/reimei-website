import Image from 'next/image'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function Logo({ size = 'medium', className = '' }: LogoProps) {
  const sizes = {
    small: { width: 120, height: 104 },
    medium: { width: 200, height: 174 },
    large: { width: 300, height: 261 },
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
    />
  )
}
