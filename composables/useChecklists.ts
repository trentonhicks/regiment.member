import { checklists } from "~/data/checklists";

export function useChecklists() {
    return useState('checklists', () => checklists);
}