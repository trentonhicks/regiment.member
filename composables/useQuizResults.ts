import PouchDb from "pouchdb-browser";
import type { QuizResult } from "~/types/QuizResult";

export function useQuizResults() {
    const supabase = useSupabase();

    async function addQuizResult(quizResult: QuizResult) {
        try {
            await supabase.from("QuizResult").upsert(quizResult);
        }
        catch (error) {
            console.error(error);
        }
    }

    async function getQuizResult(quizId: string, userId: string) {
        try {
            const result = await supabase.from("QuizResult")
                .select()
                .eq("quiz_id", quizId)
                .eq("user_id", userId)
                .single<QuizResult>();

            return result.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    return {
        addQuizResult,
        getQuizResult
    };
}
