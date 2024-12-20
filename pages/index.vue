<script setup lang="ts">

const { setTitle } = useTitle();
const { pages } = usePages();

onMounted(() => {
    setTitle('Dashboard');
});
</script>

<template>
    <div>
        <PageList
            :pages="pages.filter(x => x.path !== '/' && x.path !== '/checklists')"
        />
    </div>
</template>