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
        <MemberContext>
          <template #loading>
            <LoadingPage />
          </template>

          <template #is-member="{ member }">
              <NuxtLayout
                :user="user"
                :sign-out="signOut"
                :member="member"
              >
                <NuxtPage />
              </NuxtLayout>
          </template>

          <template #not-member>
            <NotMember />
          </template>
        </MemberContext>
      </template>

      <template #anonymous="{ signUp, signIn, error }">
        <Login
          :error="error"
          :sign-up="signUp"
          :sign-in="signIn"
          v-model:signing-up="signingUp"
        />
      </template>
    </AuthContext>
  </div>
</template>