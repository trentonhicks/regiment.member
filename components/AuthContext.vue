<script setup lang="ts">
const { signUp, signIn, signOut, getUser } = useAuth();

const user = ref();
const loading = ref(true);
const isAuthenticated = computed(() => !!user.value);
const error = ref<string>();

async function refreshAuthStatus() {
    loading.value = true;
    user.value = await getUser();
    loading.value = false;
}

async function handleSignUp(email: string, password: string) {
    loading.value = true;
    const { error: authError } = await signUp(email, password);
    error.value = authError?.message;
    await refreshAuthStatus();
    loading.value = false;
}

async function handleSignIn(email: string, password: string) {
    loading.value = true;
    const { error: authError } = await signIn(email, password);
    error.value = authError?.message;
    await refreshAuthStatus();
    loading.value = false;
}

async function handleSignOut() {
    loading.value = true;
    await signOut();
    await refreshAuthStatus();
    loading.value = false;
}

onMounted(async () => await refreshAuthStatus());
</script>

<template>
    <div class="min-h-screen bg-gray-900 text-white">
        <slot
            v-if="loading"
            name="loading"
        />
        <slot
            v-else-if="isAuthenticated"
            name="authenticated"
            :user="user!"
            :sign-out="handleSignOut"
        />
        <slot
            v-else
            name="anonymous"
            :sign-up="handleSignUp"
            :sign-in="handleSignIn"
            :error="error"
        />
    </div>
</template>