import StoryblokClient from 'storyblok-js-client'

export default defineNuxtPlugin(nuxtApp => {
  const storyblokApi = new StoryblokClient({
    accessToken: 'K4rs8bPdRidWPJ3cesn8Fgtt', // Replace with your Storyblok Preview API Token
  })

  // Make Storyblok available across the app
  nuxtApp.provide('storyblok', storyblokApi)
})
