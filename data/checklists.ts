import type { Checklist } from "~/types/Checklist";

export const checklists: Checklist[] = [
    {
        id: "550e8400-e29b-41d4-a716-446655440000",
        title: "Daily Tasks",
        items: [
            {
                id: "550e8400-e29b-41d4-a716-446655440001",
                title: "Exercise",
                description: "30 minutes of exercise",
            },
            {
                id: "550e8400-e29b-41d4-a716-446655440002",
                title: "Read",
                description: "Read for 1 hour",
            }
        ]
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440003",
        title: "Grocery Shopping",
        items: [
            {
                id: "550e8400-e29b-41d4-a716-446655440004",
                title: "Buy Milk",
                description: "2 liters of milk",
            },
            {
                id: "550e8400-e29b-41d4-a716-446655440005",
                title: "Buy Bread",
                description: "Whole grain bread",
            }
        ]
    }
];