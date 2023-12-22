import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import {getServerSession} from "next-auth";
import Link from "next/link";
import LoginWithGoogle from '../buttons/LoginWithGoogle';
import LogoutButton from '../buttons/LogoutButton';


const AuthLinks = async  () => {
    const session = await getServerSession(authOptions);

  return (
    <div
    className="flex items-center gap-4 text-sm text-slate-500"
    >
       {!!session && (
            <>
              <Link href={'/account'}>
                Hello, {session?.user?.name}
              </Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
            <LoginWithGoogle />
            </>
          )}
    </div>
  )
}

export default AuthLinks