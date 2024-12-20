<script setup lang="ts">
type PageHeaderProps = {
    title: string;
    description?: string;
};

defineProps<PageHeaderProps>();
</script>

<template>
    <header>
        <h2 class="text-base font-semibold text-gray-900">
            {{ title }}
        </h2>
        <p class="mt-1 text-sm text-gray-500" v-if="description">
            {{ description }}
        </p>
    </header>
</template>