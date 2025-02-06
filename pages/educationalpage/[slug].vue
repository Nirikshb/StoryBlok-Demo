
<template>
    <div v-if="story">
      <div>
        <pre>{{ story.name }}</pre>
        <ul>
      <!-- Loop through entries and display links -->
      <!-- <li v-for="(entry, index) in entries" :key="index">
        <NuxtLink v-if="entry.link?.cached_url" :to="resolveUrl(entry.link.cached_url)">
          {{ entry.link.cached_url }}
        </NuxtLink>
        <span v-else>No URL available</span>
      </li> -->
    </ul>
       
      <!-- <EducationalItem :content="story.content" /> -->
    </div>
      <!-- <pre>{{story.content.Images[0].filename}}</pre>
  
  
  
      <img :src="story.content.Images[0].filename" width="500" height="">
      <img :src="story.content.Images[1].filename" width="500" height=""> -->
  
  
      <!-- Main Story Title -->
      <!-- <h1>{{ story.content.Title1 }}</h1> -->
  
      <!-- Subtitle -->
      <!-- <h2>{{ story.content.Subtitle }}</h2> -->
  
      <!-- Description -->
      <!-- <p>{{ story.content.Description1 }}</p> -->
  
      <!-- CTA URL (with fallback) -->
      <!-- <h3>CTA URL:</h3> -->
      <!-- <p>{{ story.content.CTA?.url || "BLANK CTA" }}</p> -->
      <!-- <p>{{ story.content.GoNext.cached_url || "BLANK CTA" }}</p> -->
  
      <!-- CTA Link -->
      <!-- <nuxt-link class="anker radious_four" :to="resolveUrl(story.content.CTA?.cached_url || '')">
        {{ story.content.Subtitle || "BLANK IN CTA LINK"}}
      </nuxt-link> -->
  
      <!-- Go Back Link -->
      <!-- <nuxt-link class="anker radious_four" to="/educational-content">
        Go Back
      </nuxt-link> -->
  
      <!-- Display Blocks -->
      <div v-for="(block, index) in story.content.Blocks" :key="index">
        <!-- <h3>Article Title: {{ block.Title }}</h3>
        <p>Article Subtitle: {{ block.Subtitle }}</p>
        <p>Description: {{ block.Description }}</p>
        
  
        <div v-for="(img,block) in block.ContentBlock">
          <img :src=img.images[0].filename width="50" height="55">
  
        </div> -->
  
        <!-- Nested Links -->
        <!-- <div v-if="block.Link1">
          <h4>Link 1:</h4>
          <a :href="block.Link1.cached_url" target="_blank">{{ block.Link1.cached_url }}</a>
        </div>
  
        <div v-if="block.Link2">
          <h4>Link 2:</h4>
          <a :href="block.Link2.cached_url" target="_blank">{{ block.Link2.cached_url }}</a>
        </div>
  
        <div v-if="block.Link3">
          <h4>Link 3:</h4>
          <a :href="block.Link3.cached_url" target="_blank">{{ block.Link3.cached_url }}</a>
        </div> -->
  
        
  
        <!-- Display Table Data -->
        <!-- <div v-if="block.TABLEMAKER">
          <h4>Table:</h4>
          <table>
            <thead>
              <tr>
                <th v-for="(head, i) in block.TABLEMAKER.thead" :key="'head-' + i">
                  {{ head.value }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rIndex) in block.TABLEMAKER.tbody" :key="'row-' + rIndex">
                <td v-for="(col, cIndex) in row.body" :key="'col-' + cIndex">
                  {{ col.value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div> -->
  
        <!-- Debugging Block for Each -->
        <!-- <pre>{{ JSON.stringify(block, null, 2) }}</pre> -->
      </div>
  
      <!-- Print Full JSON for Debugging -->
      <!-- <pre>{{ JSON.stringify(story, null, 2) }}</pre> -->
    </div>
  
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script setup>
  
  import { useRoute, useAsyncData, useNuxtApp } from 'nuxt/app'
  
  const route = useRoute()
  const story = ref(null)
  const slug = useRoute().params.slug;

definePageMeta({
  layout: 'educational',
});
  const { data } = await useAsyncData('story', async () => {
    const { $storyblok } = useNuxtApp()
    const response = await $storyblok.get(`cdn/stories/educationalpage/${route.params.slug}`, {
      version: 'draft'
    })
    return response.data.story
  })
  
  const resolveUrl = (url) => {
    if (!url) return '/'
    return url.startsWith('/') ? url : `/${url}`
  }
  story.value = data.value

  const entries = computed(() => {
  return data.value?.content?.entries || [];
});
  </script>
  
  <style scoped>
  .anker {
    display: inline-block;
    font-size: 14px;
    color: #212529;
    border: 1px solid #212529;
    text-transform: uppercase;
    font-weight: 600;
    min-width: 300px;
    text-align: center;
    padding: 10px 20px;
    text-decoration: none;
    letter-spacing: 1.5px;
  }
  </style>




<!-- <template>
  <div>
    <h1>{{ story.content.Title }}</h1>
    <div v-html="richtext(story.content.Description)"></div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useAsyncData } from 'nuxt/app';
import { useNuxtApp } from '#app';

const route = useRoute();
const { $storyblok } = useNuxtApp();

// Fetch all stories under the 'educationalpage' folder
const { data: stories } = await useAsyncData('stories', async () => {
  const response = await $storyblok.get('cdn/stories', {
    version: 'draft', // Use 'published' in production
    starts_with: 'educationalpage/',
  });
  return response.data.stories;
});

// Find the story that matches the requested URL path
const story = computed(() => {
  const fullSlug = `educationalpage/${route.params.slug}`;
  return stories.value.find((s) => s.full_slug === fullSlug);
});

// Throw a 404 error if the story is not found
if (!story.value) {
  throw createError({ statusCode: 404, message: 'Page not found' });
}

// Helper function to render Storyblok richtext
const richtext = (content) => {
  return $storyblok.richTextResolver.render(content);
};
</script> -->