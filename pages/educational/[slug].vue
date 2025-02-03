<template>
    <div>ABC</div>

    
</template>

<script setup>

const route = useRoute();
const { data } = await useAsyncData(() =>
  $storyapi.get(`cdn/stories/educational/${route.params.slug}`)
);
console.log(data.value,'data');

const story = data?.value?.story;

</script>

<style scoped>
</style>