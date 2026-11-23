import type { Metadata } from "next";
import { AuthPage } from "@/components/layout/auth-page";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
