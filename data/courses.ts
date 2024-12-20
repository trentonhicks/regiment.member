import type { Course } from "~/types/Course";

export const courses : Course[] = [
    {
        id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
        title: "Introduction to TypeScript",
        lessons: [
            {
                id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
                title: "Getting Started with TypeScript",
                videoUrl: "https://vimeo.com/145606754",
                quiz: {
                    id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
                    title: "TypeScript Basics Quiz",
                    questions: [
                        {
                            id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
                            title: "What is TypeScript?",
                            options: ["A programming language", "A type of coffee", "A scripting language", "None of the above"],
                            correctOptionIndex: 0
                        },
                        {
                            id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
                            title: "Which company developed TypeScript?",
                            options: ["Google", "Microsoft", "Facebook", "Amazon"],
                            correctOptionIndex: 1
                        }
                    ]
                }
            },
            {
                id: "6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u",
                title: "Advanced TypeScript Features",
                videoUrl: "https://vimeo.com/101510662",
                quiz: null
            }
        ]
    },
    {
        id: "7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v",
        title: "Mastering TypeScript",
        lessons: [
            {
                id: "8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w",
                title: "TypeScript and React",
                videoUrl: "https://vimeo.com/10450125",
                quiz: {
                    id: "9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x",
                    title: "React with TypeScript Quiz",
                    questions: [
                        {
                            id: "0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y",
                            title: "How do you type a React component?",
                            options: ["Using PropTypes", "Using TypeScript interfaces", "Using Flow", "None of the above"],
                            correctOptionIndex: 1
                        }
                    ]
                }
            }
        ]
    }
];