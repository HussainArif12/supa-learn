import supabaseClient from "../helpers/supabaseClient";
import Image from "next/image";

export default function Protected({ message }) {
  return (
    <>
      <h1>Hello, {message.user_metadata.full_name}!</h1>
      <p> Your email : {message.email}</p>
      <Image src={message.user_metadata.avatar_url} width="200" height="200" />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { user } = await supabaseClient.auth.api.getUserByCookie(req);
  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  // If there is a user, return it.
  return { props: { message: user } };
}
