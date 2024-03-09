"use client";
import styles from "../../../CSS Modules/signin.module.css";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className={styles.signinPage}>
      <img
        src="/icons/signin.png"
        style={{ width: "800px" }}
      />
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className={styles.signinContainer}
      >
        <img src="https://authjs.dev/img/providers/google.svg" />
        <span>Sign in with Google</span>
      </button>
      <br/>
      <br/>
    </div>
  );
}
