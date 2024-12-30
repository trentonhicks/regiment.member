<script setup lang="ts">
import { ClipboardDocumentCheckIcon, ArrowUturnLeftIcon } from '@heroicons/vue/20/solid';
import type { QuizResult } from '~/types/QuizResult';

definePageMeta({ props: true });

const { courseId, lessonId } = defineProps<{ courseId: string; lessonId: string }>();
const { setTitle } = useTitle();
const { getQuizResult, addQuizResult } = useQuizResults();
const { getUser } = useAuth();
const courses = useCourses();
const course = computed(() => courses.value.find((c) => c.id === courseId));
const lesson = computed(() => course.value?.lessons.find((l) => l.id === lessonId));
const quizResult = ref<QuizResult | null>();
const showQuiz = ref(false);
const loadingQuiz = ref(true);

async function submitQuiz(completed: boolean) {
    const user = await getUser();

    if (!lesson.value || !lesson.value.quiz || !user) {
        return;
    }

    const newResult : QuizResult = {
        quiz_id: lesson.value.quiz.id,
        attempts: quizResult.value ? quizResult.value.attempts + 1 : 1,
        completed: completed,
    };

    await addQuizResult(newResult);

    quizResult.value = newResult;
}

onMounted(async () => {
    setTitle('Courses');

    try {
        loadingQuiz.value = true;

        const user = await getUser();

        if (!lesson.value) {
            return;
        }

        if (!lesson.value.quiz) {
            return;
        }

        if (!user) {
            return;
        }

        quizResult.value = await getQuizResult(lesson.value.quiz.id, user.id);
    }
    finally {
        loadingQuiz.value = false;
    }
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

            <template v-if="!loadingQuiz && lesson.quiz">

                <template v-if="!quizResult?.completed">
                    <div class="sm:hidden">
                        <ButtonInput
                            @click="showQuiz = true"
                            :prepend-icon="quizResult ? ArrowUturnLeftIcon : ClipboardDocumentCheckIcon"
                            :text="quizResult ? 'Retry Quiz' : 'Begin Quiz'"
                            block
                        />
                    </div>

                    <div class="hidden sm:block">
                        <ButtonInput
                            @click="showQuiz = true"
                            :prepend-icon="quizResult ? ArrowUturnLeftIcon : ClipboardDocumentCheckIcon"
                            :text="quizResult ? 'Retry Quiz' : 'Begin Quiz'"
                        />
                    </div>
                </template>

                <template v-else>
                    <div class="sm:hidden">
                        <ButtonInput
                            :prepend-icon="ClipboardDocumentCheckIcon"
                            text="Quiz Completed"
                            block
                            disabled
                            class="opacity-50"
                        />
                    </div>

                    <div class="hidden sm:block">
                        <ButtonInput
                            :prepend-icon="ClipboardDocumentCheckIcon"
                            text="Quiz Completed"
                            disabled
                            class="opacity-50"
                        />
                    </div>
                </template>
                
                <template v-if="lesson.quiz">
                    <Quiz
                        :lesson="lesson"
                        :quiz="lesson.quiz"
                        v-model="showQuiz"
                        @quiz-completed="(quizCompleted: boolean) => submitQuiz(quizCompleted)"
                    />
                </template>

            </template>
        </div>
    </div>
</template>