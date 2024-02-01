import Image from "next/image";
import { getServerSession } from "next-auth";
import {options } from './api/auth/[...nextauth]/options'
import Link from "next/link";


export default async function Home() {
  const session = await getServerSession(options)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
