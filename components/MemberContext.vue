<script setup lang="ts">
import type { Member } from '~/types/Member';

const supabase = useSupabase();
const loading = ref(true);
const member = ref<Member>();

onMounted(async () => {
    loading.value = true;
    const { data } = await supabase.from('members').select('*').single();
    member.value = data;
    loading.value = false;
});
    
</script>

<template>
    <div class="min-h-screen bg-gray-900 text-white">
        <slot
            name="loading"
            v-if="loading"
        />
        <slot name="is-member"
            :member="member"
            v-else-if="member"
        />
        <slot
            name="not-member"
            v-else
        />
    </div>
</template>