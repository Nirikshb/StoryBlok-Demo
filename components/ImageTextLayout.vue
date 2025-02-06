<template>
    <div class="layout-container">
      
      <div v-if="isImageOnRight" class="image-text-layout">
        <div class="image-container">
          <img v-for="(image, index) in images" :key="index" :src="image.filename" alt="Image" class="image" width="200" height="200"/>
        </div>
        <div class="text-container">
          <h2>{{ title }}</h2>
          <p>{{ subtitle }}</p>
          <p>{{ description }}</p>
        </div>
      </div>
  
      <div v-else class="image-text-layout">
        <div class="text-container">
          <h2>{{ title }}</h2>
          <p>{{ subtitle }}</p>
          <p>{{ description }}</p>
        </div>
        <div class="image-container">
          <img v-for="(image, index) in images" :key="index" :src="image.filename" alt="Image" class="image" width="200" height="200"/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    images: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isImageOnRight: {
      type: Boolean,
      required: true
    }
  })

  
  </script>
  
  <style scoped>
  .layout-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .image-text-layout {
    display: flex;
  }
  
  .image-container {
    position: relative;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    display: flex;
  }
  
  .text-container {
    max-width: 50%;
  }
  
  .image {
    max-width: 100%;
    height: auto;
  }
  
  @media (max-width: 767px) {
    .image-text-layout {
      flex-direction: column;
      align-items: center;
    }
  }
  
  </style>
  

