<script lang="ts" setup>
import type { User } from '~/types/User';

const { register, login, logout, getUser } = useAuth();
const user = ref<User>();
const loading = ref(true);
const error = ref<string>();
const isAuthenticated = computed(() => user.value !== undefined && !loading.value);

async function checkUser() {
  loading.value = true;
  error.value = undefined;
  user.value = await getUser();
  loading.value = false;
}

async function handleRegistration(username: string, password: string) {
  try {
    error.value = undefined;
    loading.value = true;
    await register(username, password);
    user.value = await getUser();
  } catch (e: any) {
    error.value = e;
  }
  finally {
    loading.value = false;
  }
}

async function handleLogin(username: string, password: string) {
  try {
    loading.value = true;
    error.value = undefined;
    await login(username, password);
    user.value = await getUser();
  } catch (e: any) {
    error.value = e;
  }
  finally {
    loading.value = false;
  }
}

async function handleLogout() {
  try {
    loading.value = true;
    error.value = undefined;
    user.value = undefined;
    await logout();
  }
  finally {
    loading.value = false;
  }
}

onMounted(async () => await checkUser());
</script>

<template>
  <div>
    <transition
      name="fade"
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <slot
        v-if="loading"
        name="loading"
      />
      <slot
        v-else-if="isAuthenticated"
        name="authenticated"
        :user="user!"
        :logout="handleLogout"
      />
      <slot
        v-else
        name="unauthenticated"
        :login="handleLogin"
        :register="handleRegistration"
        :error="error"
      />
    </transition>
  </div>
</template>