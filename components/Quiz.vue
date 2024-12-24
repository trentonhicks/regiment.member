<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import type { Lesson } from '~/types/Lesson';
import type { Quiz } from '~/types/Quiz';

  type QuizProps = {
    lesson: Lesson;
    quiz: Quiz;
    modelValue: boolean;
  }

  const emit = defineEmits<{
    (event: 'update:modelValue', value: boolean): void;
    (event: 'quiz-completed', value: boolean): void;
  }>();

  const props = defineProps<QuizProps>();
  const answers = reactive<number[]>([]);
  const correctAnswers = computed(() => props.quiz.questions.map((question, index) => question.correctOptionIndex === answers[index]));
  const quizCompleted = computed(() => correctAnswers.value.every((correct) => correct));

  function submitQuiz() {
    emit('quiz-completed', quizCompleted.value);
    emit('update:modelValue', false);

    answers.splice(0, answers.length);
  }
</script>

<template>
  <TransitionRoot
    as="template"
    :show="modelValue"
  >
    <Dialog
      class="relative z-10"
      @close="() => emit('update:modelValue', false)"
    >
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-16">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <form
                  class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                  @submit.prevent="submitQuiz"
                >
                  <div class="h-0 flex-1 overflow-y-auto">
                    <div class="bg-indigo-700 px-4 py-6 sm:px-6">
                      <div class="flex items-center justify-between">
                        <DialogTitle class="text-base font-semibold text-white">
                          {{ lesson.title }}
                        </DialogTitle>
                        <div class="ml-5 flex h-7 items-center">
                          <button
                            type="button"
                            class="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            @click="() => emit('update:modelValue', false)"
                          >
                            <span class="absolute -inset-2.5" />
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="size-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-1 flex-col justify-between">
                      <div class="divide-y divide-gray-200 px-4 sm:px-6">
                        <div class="space-y-6 pb-5 pt-6" v-for="question, questionIndex in quiz.questions" :key="question.id">
                          <fieldset>
                            <legend class="text-sm/6 font-medium text-gray-900">
                              {{ question.title }}
                            </legend>

                            <div class="mt-2 space-y-4">

                              <div class="relative flex items-start" v-for="option, optionIndex in question.options" :key="`${optionIndex}-${option}`">
                                <div class="absolute flex h-6 items-center">
                                  <input
                                    :id="`question-${questionIndex}-option-${optionIndex}`"
                                    :name="`question-${questionIndex}`"
                                    :value="optionIndex"
                                    type="radio"
                                    class="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                    v-model="answers[questionIndex]"
                                  />
                                </div>
                                <div class="pl-7 text-sm/6">
                                  <label
                                    :for="`question-${questionIndex}-option-${optionIndex}`"
                                    class="font-medium text-gray-900"
                                  >
                                    {{ option }}
                                  </label>
                                </div>
                              </div>

                            </div>
                          </fieldset>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="flex shrink-0 justify-end px-4 py-4">
                    <button
                      type="button"
                      class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      @click="() => emit('update:modelValue', false)"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="transition-opacity ml-4 inline-flex justify-center rounded-md disabled:opacity-70 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      :disabled="answers.length !== quiz.questions.length"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>