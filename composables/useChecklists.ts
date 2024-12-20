import { checklists as data } from "~/data/checklists";

export function useChecklists() {
    const checklists = useState('checklists', () => data);
    return { checklists };
}