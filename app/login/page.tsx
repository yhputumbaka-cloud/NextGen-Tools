import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log In — NextGen Tools",
  description: "Log in or create an account to save your progress.",
};

export default async function LoginPage({
  searchParams,
}: PageProps<"/login">) {
  const params = await searchParams;
  const next = typeof params.next === "string" ? params.next : "/";
  const reason = typeof params.reason === "string" ? params.reason : undefined;

  const message =
    reason === "save"
      ? "Sign up free to save this guide to your library."
      : null;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-deep sm:text-5xl">
            Log In
          </h1>
          {message ? (
            <p className="mt-4 text-lg font-medium text-navy">{message}</p>
          ) : (
            <p className="mt-4 text-lg text-body-soft leading-relaxed">
              Enter your email and we&apos;ll send you a link to sign in.
              First time here? The same link creates your account
              automatically.
            </p>
          )}

          <div className="mt-10">
            <LoginForm next={next} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
