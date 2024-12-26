<script setup lang="ts">
const signingUp = ref(false);
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <AuthContext>
      <template #loading>
        <LoadingPage />
      </template>

      <template #authenticated="{ user, signOut }">
        <NuxtLayout
          :user="user"
          :sign-out="signOut"
        >
          <NuxtPage />
        </NuxtLayout>
      </template>

      <template #anonymous="{ signUp, signIn }">
        <Login
          :sign-up="signUp"
          :sign-in="signIn"
          v-model:signing-up="signingUp"
        />
      </template>
    </AuthContext>
  </div>
</template>