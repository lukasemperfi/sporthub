export const useAuthApi = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  return {
    async signUp({
      email,
      password,
      first_name,
      last_name,
      role = "viewer",
      avatar_url,
    }: {
      email: string;
      password: string;
      first_name: string;
      last_name: string;
      role?: string;
      avatar_url?: string;
    }) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name,
            last_name,
            role,
            avatar_url: avatar_url || null,
          },
        },
      });

      if (error) throw error;
      return data;
    },

    async signIn(email: string, password: string) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return data;
    },

    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },

    async getUserProfile() {
      if (!user.value) return null;

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.value.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error.message);
        throw error;
      }

      return data;
    },

    async updateProfile(updates: {
      first_name?: string;
      last_name?: string;
      avatar_url?: string;
      cover_url?: string;
      gender?: string;
      date_of_birth?: string;
      address?: string;
      description?: string;
      vimeo_url?: string;
      facebook_url?: string;
      instagram_url?: string;
      twitter_url?: string;
      business_name?: string;
      llc?: string;
    }) {
      if (!user.value) throw new Error("No user logged in");

      const { data, error } = await supabase
        .from("profiles")
        .update(updates)
        .eq("id", user.value.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
  };
};
