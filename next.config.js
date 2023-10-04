/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['drive.google.com', 'tailwindui.com'], // ใส่โดเมนที่คุณต้องการใช้ในรูปภาพทั้งหมดในนี้
    },
  }
  
  module.exports = nextConfig
  