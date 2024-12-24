import type { Lesson } from "./Lesson";

export type Course = {
    id: string;
    title: string;
    description?: string;
    lessons: Lesson[];
};