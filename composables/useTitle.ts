export function useTitle() {
    const title = useState('title', () => '');

    return {
        title,
        setTitle: (newTitle: string) => title.value = newTitle,
    };
}