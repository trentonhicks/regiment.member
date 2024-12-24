export function useCurrentPage() {
    const route = useRoute();
    const { pages } = usePages();

    const currentPage = computed(() => {
        return pages.value.find((page) => page.path === route.path);
    });

    return currentPage;
}