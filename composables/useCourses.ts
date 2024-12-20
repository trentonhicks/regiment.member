import { courses as data } from "~/data/courses";

export function useCourses() {
    const courses = useState('courses', () => data);
    return { courses };
}