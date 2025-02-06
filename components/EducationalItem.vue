<template>
    <div>
        <div class="text-only-content">
            <!-- <h2>{{ content.Title1 }}</h2>
            <p>{{ content.Subtitle }}</p>
            <p>{{ content.Description1 }}</p> -->
        </div>
    </div>
</template>

<script setup>
const { content } = defineProps(['content'])
// console.log(props,'prosps');
const articleContent = computed(() => renderRichText(props.content.RichBlockText))

const isImageOnRight = computed(() => {
    // Control the alternating layout (image right or left)
    return props?.content?.right; // You can modify this to be based on some condition from content
})
console.log(isImageOnRight.value);

// Utility function for resolving URLs
const resolveUrl = (url) => {
    return url.startsWith('/') ? url : `/${url}`
}
</script>

<style scoped></style>