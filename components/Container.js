import { Auth } from "@supabase/ui";
import Link from "next/link";
import { Button } from "@supabase/ui";
import supabaseClient from "../helpers/supabaseClient";
import { saveNotes, getNotes } from "../helpers/auth";
import { useEffect, useState } from "react";
export default function Container(props) {
  const { user } = Auth.useUser();
  const [notes, setNotes] = useState([]);
  useEffect(async () => {
    setNotes(await getNotes());
  }, []);

  /* const fetchNotes = async () => {
    const notes = await getNotes();
    console.log(notes);
    setNotes(notes);
  }; */
  console.log(notes);
  if (user)
    return (
      <>
        <h1>Hello {user.user_metadata.full_name}!</h1>
        <Link href="/custom">Go to protected page</Link>
        <button onClick={() => saveNotes(user)}>Add Note</button>
        <Button onClick={() => supabaseClient.auth.signOut()}>Sign out</Button>
      </>
    );
  return props.children;
}
