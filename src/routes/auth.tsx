import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In or Create an Account — LodgeMate" },
      {
        name: "description",
        content:
          "Sign in to LodgeMate to save lodges, message hosts and book inspections near MOUAU and ABSU.",
      },
      { property: "og:title", content: "Sign In or Create an Account — LodgeMate" },
      {
        property: "og:description",
        content: "Save lodges, message hosts and book inspections on LodgeMate.",
      },
    ],
  }),
  component: Auth,
});

function Auth() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-warm px-5 py-16">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-7 shadow-lift">
          <h1 className="text-2xl font-bold">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Sign in to message hosts and track inspections."
              : "Students, landlords and agents all start here."}
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              toast.info("Accounts aren't connected yet", {
                description: "Hook up Lovable Cloud to enable real sign-in.",
              });
            }}
          >
            {mode === "signup" && (
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" className="mt-2" placeholder="Your name" required />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" className="mt-2" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" className="mt-2" placeholder="••••••••" required />
            </div>
            <Button type="submit" className="w-full" size="lg">
              {mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            {mode === "signin" ? "New to LodgeMate?" : "Already have an account?"}{" "}
            <button
              className="font-medium text-primary hover:underline"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            >
              {mode === "signin" ? "Create an account" : "Sign in"}
            </button>
          </p>

          <p className="mt-6 border-t border-border pt-5 text-center text-xs text-muted-foreground">
            Just browsing?{" "}
            <Link to="/browse" className="text-primary hover:underline">
              See listings without an account
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
