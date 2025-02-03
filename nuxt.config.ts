export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  server: {
    https: process.env.NODE_ENV === 'development'
      ? async () => {
          const fs = await import('fs')  // Dynamically import fs
          return {
            key: fs.readFileSync(path.resolve(__dirname, './certs/localhost-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, './certs/localhost.pem')),
          }
        }
      : null, // Disable https in non-development environments
    port: 3000,
  },
  storyblok: {
    accessToken: 'K4rs8bPdRidWPJ3cesn8Fgtt', // Use the access token from your Storyblok space
    cacheProvider: 'memory'
  },
})
