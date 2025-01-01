<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';

import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import type { User } from '@supabase/supabase-js';
import type { Member } from '~/types/Member';

const props = defineProps<{
  user: User | null;
  member?: Member;
  signOut: () => Promise<void>;
}>();

const { pages } = usePages();
const route = useRoute();
</script>

<template>
    <div class="min-h-full">
      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <NuxtLink class="shrink-0" to="/">
                <img
                  class="h-8 w-7 object-contain"
                  src="~/assets/images/logo.png"
                  alt="Regiment"
                />
              </NuxtLink>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <NuxtLink
                    v-for="page in pages"
                    :key="page.name"
                    :to="page.path"
                    :class="[page.path === route.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                    :aria-current="page.path === route.path ? 'page' : undefined">
                    {{ page.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
                <XMarkIcon v-else class="block size-6" aria-hidden="true" />
              </DisclosureButton>
            </div>

            <div class="hidden md:block">
              <button
                @click="signOut"
                class="bg-indigo-700 hover:bg-indigo-500 text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
  
        <DisclosurePanel class="md:hidden">
          <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <DisclosureButton
              v-for="item in pages"
              :key="item.name"
              as="button"
              @click="$router.push(item.path)"
              :class="[item.path === route.path
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'w-full block text-left rounded-md px-3 py-2 text-base font-medium', 'transition-colors'
              ]"
              :aria-current="item.path === route.path ? 'page' : undefined"
            >
                {{ item.name }}
            </DisclosureButton>
            <DisclosureButton
              as="button"
              @click="signOut"
              :class="[
                'text-gray-300 hover:bg-gray-700 hover:text-white', 'w-full block bg-gray-700/50 text-left rounded-md px-3 py-2 text-base font-medium transition-colors'
              ]"
            >
                Sign Out
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>

      <main class="bg-gray-100 min-h-screen">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
      <div>
    </div>
    </div>
</template>