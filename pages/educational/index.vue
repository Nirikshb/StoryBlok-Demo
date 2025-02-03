<template>
    <div>
        {{educationalItems}}<br><br>
        <div v-for="item in educationalItems.stories" :key="item.slug">
            {{ item.name }}
            {{ item.content.Trial }}
            {{ item.slug }}
            <nuxt-link :to="`/educational/${item.slug}`">{{ item.name }}</nuxt-link>

            {{ item.title }}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const educationalItems = ref([])

const fetchEducationalContent = async () => {
    const { $storyblok } = useNuxtApp()

    // Fetch stories starting with 'educational-content'
    const response = await $storyblok.get('cdn/stories', {
        version: 'draft',  // Change to 'published' in production
        starts_with: 'educational-content',  // Match the slug in Storyblok
    })
    console.log(response,'al;mc');
    educationalItems.value = response.data;
    // educationalItems.value = response.data.stories.map((story) => ({
    //     slug: story.slug,
    //     title: story.name,
    // }))
}


onMounted(fetchEducationalContent)
</script>