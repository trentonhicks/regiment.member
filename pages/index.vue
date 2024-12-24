<script setup lang="ts">
const { setTitle } = useTitle();
const { pages } = usePages();
const currentPage = useCurrentPage();

onMounted(() => {
    setTitle('Dashboard');
});
</script>

<template>
    <div>
        <PageHeader
            :title="currentPage!.name"
            :description="currentPage!.description"
        />
        <PageList
            :pages="pages.filter(x => x.path !== '/')"
        />
    </div>
</template>