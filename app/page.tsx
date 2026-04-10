import { auth } from "@/lib/auth/server";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data: session } = await auth.getSession();

  if (session?.user) {
    return (
      <div>
        <h1>Logged in as {session.user.name}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Not logged in</h1>
      <div>
        <Link
          href="/auth/sign-up"
        >
          Sign up
        </Link>
      </div>
      <div>
        <Link
          href="/auth/sign-in"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
