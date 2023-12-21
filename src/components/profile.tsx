"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) return JSON.stringify(session);

  return <div>From Client: user is not signed in</div>;
}
