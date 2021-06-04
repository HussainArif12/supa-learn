import supabaseClient from "../../helpers/supabaseClient";

export default function handler(req, res) {
  console.log(req.method);
  supabaseClient.auth.api.setAuthCookie(req, res);
}
