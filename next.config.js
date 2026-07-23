/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    // public/taxsim/ に置いた法人税シミュレーターPWAを /taxsim で開けるようにする
    return [{ source: '/taxsim', destination: '/taxsim/index.html' }]
  },
}

module.exports = nextConfig
