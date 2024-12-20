<script setup lang="ts">
defineProps<{
    pages: {
        name: string;
        description: string;
        path: string;
        icon: any;
        iconColor: string;
    }[];
}>();

const { setTitle } = useTitle();

onMounted(() => {
    setTitle('Dashboard');
});
</script>

<template>
    <div>
        <PageList
            :pages="pages.filter(x => x.path !== '/')"
        />
    </div>
</template>