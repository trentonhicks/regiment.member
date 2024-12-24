<script setup lang="ts">
import { ClipboardDocumentCheckIcon } from '@heroicons/vue/20/solid';

definePageMeta({ props: true });

const { courseId, lessonId } = defineProps<{ courseId: string; lessonId: string }>();
const { setTitle } = useTitle();
const courses = useCourses();
const course = computed(() => courses.value.find((c) => c.id === courseId));
const lesson = computed(() => course.value?.lessons.find((l) => l.id === lessonId));

onMounted(() => {
    setTitle('Courses');
});
</script>

<template>
    <div>
        <div v-if="course && lesson">
            <Breadcrumbs
                :pages="[
                    {
                        name: 'Courses',
                        path: '/courses',
                        current: false,
                    },
                    {
                        name: course.title,
                        path: `/courses/${course.id}`,
                        current: false,
                    },
                ]"
            />
            <PageHeader
                :title="lesson.title"
                :description="lesson.description"
            />

            <Video
                :src="lesson.videoUrl"
                class="max-w-lg"
            />
            
            <template v-if="lesson.quiz">
                <div class="sm:hidden">
                    <ButtonInput
                        :prepend-icon="ClipboardDocumentCheckIcon"
                        text="Begin Quiz"
                        block
                    />
                </div>

                <div class="hidden sm:block">
                    <ButtonInput
                        :prepend-icon="ClipboardDocumentCheckIcon"
                        text="Begin Quiz"
                    />
                </div>
            </template>
        </div>
    </div>
</template>