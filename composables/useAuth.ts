export function useAuth() {
    const supabase = useSupabase();

    async function getUser() {
        const session = await supabase.auth.getSession();
        return session.data.session?.user;
    }

    async function signUp(email: string, password: string) {
        return await supabase.auth.signUp({
            email,
            password,
        });
    }

    async function signIn(email: string, password: string) {
        return await supabase.auth.signInWithPassword({
            email,
            password,
        });
    }

    async function signOut() {
        await supabase.auth.signOut();
    }

    return {
        getUser,
        signUp,
        signIn,
        signOut,
    };
}