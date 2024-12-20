import type { Quiz } from "./Quiz";


export type Lesson = {
    id: string;
    title: string;
    videoUrl: string;
    quiz: Quiz | null;
};
