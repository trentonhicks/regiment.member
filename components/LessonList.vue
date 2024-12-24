<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/20/solid';
import type { Course } from '~/types/Course';
import type { Lesson } from '~/types/Lesson';

type LessonListProps = {
    course: Course;
    lessons: Lesson[];
};

defineProps<LessonListProps>();
</script>

<template>
    <ul role="list" class="divide-y divide-gray-200 border-y border-gray-200">
        <li v-for="lesson in lessons" :key="lesson.id">
            <NuxtLink
                class="relative flex justify-between gap-x-6 py-5 group"
                :to="`/courses/${course.id}/lessons/${lesson.id}`"
            >
                <div class="flex min-w-0 gap-x-4">
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm/6 font-semibold text-gray-900">
                            <div class="relative truncate group-hover:underline">
                                {{ lesson.title }}
                            </div>
                        </p>
                        <p class="mt-1 flex text-xs/5 text-gray-500" v-if="lesson.description">
                            {{ lesson.description }}
                        </p>
                    </div>
                </div>
                <div class="flex shrink-0 items-center gap-x-4">
                    <ChevronRightIcon
                        class="size-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                </div>
            </NuxtLink>
        </li>
    </ul>
</template>