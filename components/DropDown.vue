<template>
    <div class="">
      <!-- Left Panel (Static) -->
      <div class="">
        <div class="sidebar">
          <div v-for="item in dropItems" :key="item._uid" class="nav-item">
            <div class="nav-label">
              {{ item.label }}
            </div>
            <div class="subtitle" v-if="item.subtitle" @click="toggleNav(item._uid)">
              {{ item.subtitle }}
              <SvgHeaderSvg :type="'down'" />
            </div>
            <div v-if="openNavs.includes(item._uid)" class="nav-content">
              <div v-if="item.undernav?.length" class="sub-nav">
                <div v-for="subItem in item.undernav" :key="subItem._uid" class="sub-nav-item">
                  <NuxtLink :to="resolveUrl(subItem.link.cached_url)" class="nav-link"  active-class="router-link-active">
                    {{ subItem.label }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Right Panel (Updates Dynamically) -->
      <!-- <div class="right">
        <div v-if="educationalItems.length">
          <div v-for="item in educationalItems" :key="item.slug">
            <StoryblokEducationalItem :content="item.content" />
          </div>
        </div>
        <p v-else>No educational items found.</p>
      </div> -->
    </div>
  </template>
  
  <script setup>
  import { useMainStore } from '~/stores/mainStore'
  import { onMounted, computed, ref } from 'vue'
// import { useRoute } from 'nuxt/app';
  const route = useRoute
  // Get the store instance
  const store = useMainStore()
  
  // Reactive state for open navigation items
  const openNavs = ref([])
  
  // Optionally, define a slug if you want to fetch content by a specific identifier.
  const slug = computed(() => route?.params?.slug)

// Watch for changes in the slug. When it changes, fetch the new content.
watch(
  () => slug.value,
  async (newSlug) => {
    if (newSlug) {
      await store.fetchContentBySlug(newSlug)
    }
  },
  { immediate: true }
)
  
  // Fetch data on component mount
  onMounted(async () => {
    await store.fetchDropItems()
    await store.fetchEducationalItems()
    await store.fetchContentBySlug(slug)
  })
  
  // Use computed properties to access reactive store state
  const dropItems = computed(() => store.getDropItems)
const educationalItems = computed(() => store.getEducationalItems)
const entries = computed(() => store.getEntries)
  
  // Helper function to resolve URLs
  const resolveUrl = (url) => (url.startsWith('/') ? url : `/${url}`)
  
  // Toggle navigation items
  const toggleNav = (uid) => {
    if (openNavs.value.includes(uid)) {
      openNavs.value = openNavs.value.filter(id => id !== uid)
    } else {
      openNavs.value.push(uid)
    }
  }
  </script>
  
  <style scoped>
  .subtitle {
    background: #668b8426 15%;
    border-radius: 4px;
    padding: 8px 10px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    letter-spacing: 1.5px;
    color: #405955;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
  }
  
  .image-container {
    display: flex;
    gap: 10px;
  }
  
  .image-item {
    display: inline-block;
  }
  
  .sidebar {
    color: #353535;
    padding: 16px;
  }
  
  .nav-label {
    padding: 8px 0;
    color: #353535;
    font-size: 18px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  
  .sub-nav {
    padding: 0 16px 0 58px;
  }
  
  .nav-link {
    display: flex;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    margin-bottom: 4px;
    justify-content: space-between;
    letter-spacing: 1.5px;
    font-size: 14px;
    color: #353535;
  }
  
  .sub-nav-item {
    margin-top: 4px;
  }
  
  .sub-nav-item.active-dropdown {
    color: #405955;
  }
  
  .container {
    display: flex;
    gap: 20px;
  }
  
  .left {
    width: 30%;
  }
  
  .right {
    width: 70%;
  }
  .nav-link.router-link-active {
  color: #405955 !important;
  font-weight: bold;
}
  </style>