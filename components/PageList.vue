<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/20/solid';

type PageListProps = {
    pages: {
        name: string;
        description: string;
        path: string;
        icon: any,
        iconColor: string,
    }[];
}

defineProps<PageListProps>();
</script>

<template>
    <div>
      <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
        <li v-for="(page, pageIndex) in pages" :key="pageIndex">
          <div class="group relative flex items-start space-x-3 py-4">
            <div class="shrink-0">
              <span :class="[page.iconColor, 'inline-flex size-10 items-center justify-center rounded-lg']">
                <component :is="page.icon" class="size-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1">
              <div class="text-sm font-medium text-gray-900">
                <NuxtLink :to="page.path">
                  <span class="absolute inset-0" aria-hidden="true" />
                  {{ page.name }}
                </NuxtLink>
              </div>
              <p class="text-sm text-gray-500">{{ page.description }}</p>
            </div>
            <div class="shrink-0 self-center">
              <ChevronRightIcon class="size-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>