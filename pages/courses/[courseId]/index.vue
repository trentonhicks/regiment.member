<script setup lang="ts">
definePageMeta({ props: true });

const { courseId } = defineProps<{ courseId: string }>();
const { setTitle } = useTitle();
const courses = useCourses();
const course = computed(() => courses.value.find((c) => c.id === courseId));

onMounted(() => {
    setTitle('Courses');
});
</script>

<template>
    <div>
        <div v-if="course">
            <Breadcrumbs
                :pages="[
                    {
                        name: 'Courses',
                        path: '/courses',
                        current: false,
                    }
                ]"
            />
            <PageHeader
                :title="course.title"
                :description="course.description"
            />
            <LessonList
                :course="course"
                :lessons="course.lessons"
            />
        </div>
    </div>
</template>