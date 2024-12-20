<script setup lang="ts">
const { setTitle } = useTitle();
const { courses } = useCourses();

onMounted(() => {
    setTitle('Courses');
});
</script>

<template>
    <div class="text-gray-900">
        {{ courses }}
    </div>
</template>