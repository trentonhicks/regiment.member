import { courses } from "~/data/courses";

export function useCourses() {
    return useState('courses', () => courses);
}