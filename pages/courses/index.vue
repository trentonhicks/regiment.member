<script setup lang="ts">
const { setTitle } = useTitle();
const currentPage = useCurrentPage();
const courses = useCourses();

onMounted(() => {
    setTitle('Courses');
});
</script>

<template>
    <div>
        <PageHeader
            v-if="currentPage"
            :title="currentPage.name"
            :description="currentPage.description"
        />
        <CourseList
            :courses="courses"
        />
    </div>
</template>