import supabaseClient from "./supabaseClient";

export async function saveNotes(user) {
  const { data, error } = await supabaseClient
    .from("note")
    .insert([{ user_id: user.id, body: "Roha Hussain part 2" }]);
  if (error) console.log(error);
  console.log(data);
}
export async function getNotes() {
  const { data, error } = await supabaseClient.from("note").select();
  if (error) return error;
  return data;
}

export async function handleProviderSignIn() {
  const { error } = await supabaseClient.auth.signIn({ provider: "google" });
  if (error) console.log(error);
}
