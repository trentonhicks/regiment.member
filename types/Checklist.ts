import type { ChecklistItem } from "./ChecklistItem";

export type Checklist = {
    id: string;
    title: string;
    items: ChecklistItem[];
}