<script setup lang="ts">
const { setTitle } = useTitle();
const { checklists } = useChecklists();

onMounted(() => {
    setTitle('Checklists');
});
</script>

<template>
    <div class="text-gray-900">
        {{ checklists }}
    </div>
</template>