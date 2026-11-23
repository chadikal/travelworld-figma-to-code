"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Artwork } from "@/components/ui/artwork";

const providers = [
  { name: "Google", file: "5fcbe.svg", width: 15, height: 15 },
  { name: "Facebook", file: "c0772.svg", width: 15, height: 15 },
  { name: "Apple", file: "8e1df.svg", width: 60, height: 34 },
] as const;

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const register = mode === "register";
  const [hasPassword, setHasPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setHasPassword(false);
    setShowPassword(false);
    setStatus(register ? "Demo complete. No account was created." : "Demo complete. You haven’t been signed in.");
  }

  const divider = register
    ? { left: "884e8.svg", right: "8bad0.svg", leftWidth: 150, rightWidth: 151 }
    : { left: "bca2a.svg", right: "53eb2.svg", leftWidth: 94, rightWidth: 94 };

  return (
    <div className="auth-content">
      <header className="auth-heading">
        <h1>{register ? "CREATE AN ACCOUNT" : "Welcome"}</h1>
        {register ? (
          <p>By creating an account, you agree to our{" "}
            <button type="button" className="auth-text-action" onClick={() => setStatus("This demo has no published privacy policy.")}>Privacy policy</button>
            {" "}and{" "}
            <button type="button" className="auth-text-action" onClick={() => setStatus("This demo has no published terms of use.")}>Terms of use.</button>
          </p>
        ) : <p>Login with Email</p>}
      </header>
      <form className="auth-form" aria-label={register ? "Create an account" : "Login"} onSubmit={submit} onInput={() => setStatus("")}>
        <div className="auth-fields">
          {register && (
            <div className="auth-name-fields">
              <input id="first-name" aria-label="First name" placeholder="First Name" autoComplete="given-name" required />
              <input id="last-name" aria-label="Last name" placeholder="Last Name" autoComplete="family-name" required />
            </div>
          )}
          <input
            id="auth-identity"
            type={register ? "email" : "text"}
            aria-label={register ? "Email" : "Email or username"}
            placeholder={register ? "Enter Email" : "Enter Email or Username"}
            autoComplete={register ? "email" : "username"}
            autoCapitalize="none"
            spellCheck={false}
            required
          />
          <div className="auth-password">
            <input
              id="auth-password"
              type={showPassword ? "text" : "password"}
              aria-label="Password"
              placeholder="Enter Password"
              autoComplete={register ? "new-password" : "current-password"}
              minLength={register ? 8 : undefined}
              required
              onChange={(event) => {
                const hasValue = event.target.value.length > 0;
                setHasPassword(hasValue);
                if (!hasValue) setShowPassword(false);
              }}
            />
            {hasPassword && (
              <button
                type="button"
                className="auth-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-controls="auth-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            )}
          </div>
          {register && (
            <input
              id="mobile-number"
              type="tel"
              aria-label="Mobile number"
              placeholder="Mobile Number"
              autoComplete="tel"
              pattern={String.raw`[+]?[\s\(\)]*(?:[0-9][\s\(\)\-]*){7,}`}
              title="Enter a phone number with at least seven digits."
              required
            />
          )}
        </div>
        {!register && <button type="button" className="auth-text-action auth-recovery" onClick={() => setStatus("Password recovery is unavailable in this demo.")}>Forgot your password?</button>}
        <button type="submit" className="auth-submit">{register ? "CREATE ACCOUNT" : "LOGIN"}</button>
      </form>
      <div className="auth-divider" aria-hidden="true">
        <Artwork file={divider.left} alt="" width={divider.leftWidth} height={1} />
        <span>OR</span>
        <Artwork file={divider.right} alt="" width={divider.rightWidth} height={1} />
      </div>
      <div className="auth-social" role="group" aria-label="Social sign-in">
        {providers.map(({ name, file, width, height }) => (
          <button
            key={name}
            type="button"
            aria-label={`Continue with ${name}`}
            className={name === "Apple" ? "auth-apple" : undefined}
            onClick={() => setStatus(`${name} sign-in is unavailable in this demo.`)}
          >
            <Artwork file={file} alt="" width={width} height={height} />
          </button>
        ))}
      </div>
      <p className="auth-switch">
        {register ? "Already have an account?" : "Don’t have account?"}{" "}
        <Link className="auth-text-action" href={register ? "/login/" : "/register/"}>{register ? "Login" : "Register Now"}</Link>
      </p>
      <p className="auth-status" role="status">{status}</p>
    </div>
  );
}
