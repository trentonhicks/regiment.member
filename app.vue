<script setup lang="ts">
const signingUp = ref(false);
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <AuthContext>
      <template #loading>
        <LoadingPage />
      </template>

      <template #authenticated="{ user, logout }">
        <div>
          <NuxtLayout
            :user="user"
            :logout="logout"
          >
            <template #default="{ pages }">
              <NuxtPage
                :pages="pages"
              />
            </template>
          </NuxtLayout>
        </div>
      </template>

      <template #unauthenticated="{ login, register, error }">
        <Login
          :login="login"
          :register="register"
          :error="error"
          v-model:signing-up="signingUp"
        />
      </template>
    </AuthContext>
  </div>
</template>