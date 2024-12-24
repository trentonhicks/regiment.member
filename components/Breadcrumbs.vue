<script setup lang="ts">
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid';

type Page = {
    name: string;
    path: string;
    current: boolean;
};

type BreadcrumbsProps = {
    pages: Page[];
};

const { pages } = defineProps<BreadcrumbsProps>();
</script>

<template>
    <nav class="flex mb-6 overflow-hidden overflow-ellipsis" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li>
          <div>
            <NuxtLink to="/" class="text-gray-400 hover:text-gray-500">
              <HomeIcon class="size-5 shrink-0" aria-hidden="true" />
              <span class="sr-only">Home</span>
            </NuxtLink>
          </div>
        </li>
        <li v-for="page in pages" :key="page.name">
          <div class="flex items-center">
            <ChevronRightIcon class="size-5 shrink-0 text-gray-400" aria-hidden="true" />
            <NuxtLink
                :to="page.path"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 text-nowrap whitespace-nowrap text-ellipsis"
                :aria-current="page.current ? 'page'
                : undefined"
            >
                {{ page.name }}
          </NuxtLink>
          </div>
        </li>
      </ol>
    </nav>
</template>