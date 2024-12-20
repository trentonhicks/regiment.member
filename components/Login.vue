<script setup lang="ts">
type LoginProps = {
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  error?: string;
  signingUp: boolean;
};

type LoginEmits = {
    (event: 'update:signingUp', value: boolean): void;
};

const props = defineProps<LoginProps>();
const emit = defineEmits<LoginEmits>();
const username = ref('');
const password = ref('');
</script>

<template>
    <div
        class="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="~/assets/images/logo.png" alt="Regiment" />
        <h2 class="mt-6 text-center text-2xl font-bold text-white">
            <span v-if="!signingUp">Sign in to Regiment</span>
            <span v-else>Sign up for Regiment</span>
        </h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
            class="space-y-6"
            @submit.prevent="() => signingUp ? register(username, password) : login(username, password)"
        >
          <div>
            <label for="username" class="block text-sm/6 font-medium text-white">Username</label>
            <div class="mt-2">
              <input type="text" name="username" id="username" autocomplete="username" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" v-model="username" />
            </div>
          </div>
      
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-white">Password</label>
            </div>
            <div class="mt-2">
              <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" v-model="password" />
            </div>
          </div>

          <div v-if="props.error" class="text-red-500 text-sm/6">
            {{ props.error }}
          </div>
      
          <div>
            <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <span v-if="signingUp">Sign up</span>
                <span v-else>Sign in</span>
            </button>
          </div>
        </form>
  
        <template v-if="!signingUp">
            <p class="mt-10 text-center text-sm/6 text-gray-500">
                Don't have an account?<br />
                <button
                    class="font-semibold text-indigo-400 hover:text-indigo-300"
                    @click="() => emit('update:signingUp', true)"
                >  
                    <span>Sign up</span>
                </button>
            </p>
        </template>
        <template v-else>
            <p class="mt-10 text-center text-sm/6 text-gray-500">
                Already have an account?<br />
                <button
                    class="font-semibold text-indigo-400 hover:text-indigo-300"
                    @click="() => emit('update:signingUp', false)"
                >  
                    <span>Sign in</span>
                </button>
            </p>
        </template>
      </div>
    </div>
</template>