import { Auth, Typography, Button, IconFolderPlus } from "@supabase/ui";
import supabaseClient from "../helpers/supabaseClient";
import Container from "../components/Container";
import { useEffect } from "react";
import { checkUser } from "../helpers/auth";
import { handleProviderSignIn } from "../helpers/auth";
// Create a single supabase client for interacting with your database

export default function Home() {
  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        fetch("/api/user", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <div>
      <Auth.UserContextProvider supabaseClient={supabaseClient}>
        <Container supabaseClient={supabaseClient}>
          {/* <Auth providers={["google"]} supabaseClient={supabaseClient} /> */}
          <Button onClick={() => handleProviderSignIn()}>Log in</Button>
        </Container>
      </Auth.UserContextProvider>
    </div>
  );
}
