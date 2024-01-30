import Image from "next/image";
import { getServerSession } from "next-auth";
import {options } from './api/auth/[...nextauth]/options'
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <div><button><Link href="/api/auth/signout?callbackUrl=/">Sign Out</Link></button><h1>{session.user.name} is logged in</h1></div>:
      <button><Link href="/api/auth/signin">Sign In</Link></button>}
    </main>
  );
}
