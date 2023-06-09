import UserService from "@/services/method.user";
import PerfilComponent from "@/components/user/perfil/perfilComponent";
import React from "react";
// const fetchMessages = () => {
// getStaticProps
// return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
//   res.json()
// )

// getserversideprops
// return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }) // no guarda los datos en cache

// incremental static regeneration props
// recarga los datos cada 10 segundos
// return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } }).then((res) => res.json())
// }
const servuser = new UserService();
let user = null;
export default async function PerfilPage() {
  const userSession = servuser.getUserFromCookies();
  user = await servuser.getUserByEmail(userSession.email);
  if (user) {
    user.image = userSession.image ||
      "https://flowbite.com/docs/images/people/profile-picture-1.jpg";
    user.provider = userSession.provider;
  }
  return <PerfilComponent user={user} />;
}
