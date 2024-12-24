import PouchDb from "pouchdb-browser";
import type { QuizResult } from "~/types/QuizResult";

export function useQuizResults() {
    const database = new PouchDb<QuizResult>("QuizResults");

    async function addQuizResult(quizResult: QuizResult) {
        database.get(quizResult._id).then(async (doc) => {
            doc.attempts = quizResult.attempts;
            doc.completed = quizResult.completed;

            await database.put(doc);
        })
        .catch(async (error) => {
            await database.put(quizResult);
        });
    }

    async function getQuizResult(quizId: string) {
        try {
            return await database.get(quizId);
        }
        catch {
            return null
        }
    }

    return { addQuizResult, getQuizResult };
}