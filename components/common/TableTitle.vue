<template>

    <h1 class="text-center">{{ title }}</h1>

</template>


<script setup>

    const props = defineProps({
        title: { type: String, required: true },
    })
</script>


