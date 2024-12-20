import type { Lesson } from "./Lesson";

export type Course = {
    id: string;
    title: string;
    lessons: Lesson[];
};