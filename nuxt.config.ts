import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ['@/assets/main.css'], // Optional, if you have global styles
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',], // Tailwind for better styling
  server: {
    https: process.env.NODE_ENV === 'development'
      ? {
          key: fs.readFileSync(path.resolve('./certs/localhost-key.pem')),
          cert: fs.readFileSync(path.resolve('./certs/localhost.pem')),
        }
      : false, // Disable in production
    port: 3000, // Port to run Nuxt on
    host: '192.168.31.216', // Allow connections from the local network (optional)
  },

  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN || 'K4rs8bPdRidWPJ3cesn8Fgtt',
    cacheProvider: 'memory',
  },

  compatibilityDate: '2025-02-04',
})
