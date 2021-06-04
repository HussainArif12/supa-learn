import { Auth } from "@supabase/ui";
import supabaseClient from "../helpers/supabaseClient";

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={"dark"}>
      <Component {...pageProps} />
    </main>
  );
}
