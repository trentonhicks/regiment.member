<script setup lang="ts">
const { setTitle } = useTitle();
const currentPage = useCurrentPage();
const checklists = useChecklists();

onMounted(() => {
    setTitle('Checklists');
});
</script>

<template>
    <div>
        <PageHeader
            v-if="currentPage"
            :title="currentPage.name"
            :description="currentPage.description"
        />
        <div class="text-gray-900">
            {{ checklists }}
        </div>
    </div>
</template>