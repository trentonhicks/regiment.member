import {
    PlayCircleIcon,
    HomeIcon,
    CheckCircleIcon,
} from '@heroicons/vue/24/outline';

export function usePages() {
    const pages = useState('pages', () => [
        {
            name: 'Dashboard',
            description: 'Welcome to Regiment.',
            path: '/',
            icon: HomeIcon,
            iconColor: 'bg-purple-500',
        },
        // {
        //     name: 'Checklists',
        //     description: 'View and complete checklists.',
        //     path: '/checklists',
        //     icon: CheckCircleIcon,
        //     iconColor: 'bg-green-500',
        // },
        {
            name: 'Courses',
            description: 'View courses and take quizzes.',
            path: '/courses',
            icon: PlayCircleIcon,
            iconColor: 'bg-purple-500',
        },
    ]);

    return { pages };
}