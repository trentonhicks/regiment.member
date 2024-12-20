<script setup lang="ts">
import type { User } from '~/types/User';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue';

import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

type DefaultLayoutProps = {
    user: User;
    logout: () => Promise<void>;
};

defineProps<DefaultLayoutProps>();

const { pages } = usePages();
const route = useRoute();
const currentPage = computed(() => pages.value.find(x => x.path === route.path));
</script>

<template>
    <div class="min-h-full">
      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <NuxtLink class="shrink-0" to="/">
                <img class="h-8 w-auto" src="~/assets/images/logo.png" alt="Regiment" />
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
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <!-- Profile dropdown -->
                <Menu as="div" class="relative ml-3">
                  <div>
                    <MenuButton class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span class="absolute -inset-1.5" />
                      <span class="sr-only">Open user menu</span>
                      <div class="size-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex items-center justify-center">
                      {{ user.username[0].toUpperCase() }}
                      </div>
                    </MenuButton>
                  </div>
                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <MenuItem>
                        <button
                          :class="['w-full text-left transition-colors block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100']"
                          @click="logout"
                        >
                          <span>Log out</span>
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
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
          </div>
        </div>
  
        <DisclosurePanel class="md:hidden">
          <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <DisclosureButton
              v-for="item in pages"
              :key="item.name"
              as="div"
              @click="$router.push(item.path)"
              :class="[item.path === route.path
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium', 'transition-colors'
              ]"
              :aria-current="item.path === route.path ? 'page' : undefined"
            >
                {{ item.name }}
            </DisclosureButton>
          </div>
          <div class="border-t border-gray-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="shrink-0">
                <div class="size-10 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex items-center justify-center">
                  {{ user.username[0].toUpperCase() }}
                </div>
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-white">{{ user.username }}</div>
              </div>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <DisclosureButton
                as="button"
                class="w-full text-left block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                @click="logout"
              >
                <span>Log out</span>
              </DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>

      <main class="bg-gray-100 min-h-screen">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" v-if="currentPage">
          <PageHeader
            :title="currentPage.name"
            :description="currentPage.description"
          />
          <div class="mt-6">
            <slot />
          </div>
        </div>
      </main>
      <div>
    </div>
    </div>
</template>