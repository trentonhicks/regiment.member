import type { Member } from "~/types/Member";
import type { Regiment } from "~/types/Regiment";

export function useRegiment() {
    const member = ref<Member>();
    const regiment = ref<Regiment>();

    return {
        member,
        regiment,
    }
}