<template>
    <div class="grid grid-cols-12">
   <div class="col-span-3 drop">
     <DropDown />

   </div>
   <!-- <div class="col-span-3"></div> -->
   <div class="col-span-9 text-center">
     <ContentDisplay>
       <NuxtPage />
     </ContentDisplay>

   </div>
  
    </div>
  </template>
  
  <script setup>
  // import DropdownMenu from '@/components/DropdownMenu.vue';
  // import ContentDisplay from '@/components/ContentDisplay.vue';
// import { DropDown } from '../.nuxt/components';
  </script>

  <style scoped>
  @media (max-width : 767px){
    .drop{
      display: none;
    }
  }
</style>
  

