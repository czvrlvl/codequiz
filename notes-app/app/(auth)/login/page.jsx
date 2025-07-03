"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "@/components/ui/input";
import { FaGithub } from "react-icons/fa";
import Link from "next/link"; // jeśli Next.js
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#1c190e]">
      <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
        <CardHeader>
          <CardTitle className="text-center">Login </CardTitle>
          <CardDescription className="text-center text-sm text-accent-foreground">
            Use email or service to login to existing account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2 sm:px-6">
          <form action="" className="space-y-3">
            <Input
              type="email"
              disabled={false}
              placeholder="email"
              value={""}
              onChange={() => {}}
              required
            />
            <Input
              type="password"
              disabled={false}
              placeholder="password"
              value={""}
              onChange={() => {}}
              required
            />

            <Button className="w-full" size="lg" disabled={false}>
              Continue
            </Button>
          </form>

          <Separator />
          <div className="flex my-2 justify-evenly mx-auto items-center">
            <Button
              disabled={false}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
            >
              <FcGoogle className="size-8 left-2.5 top-2.5" />
            </Button>
            <Button
              disabled={false}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
            >
              <FaGithub className="size-8 left-2.5 top-2.5" />
            </Button>
          </div>
          <p className="text-center text-sm mt-2 text-muted-foreground">
            Create a new account{" "}
            <Link
              className="text-sky-700 ml-4 hover:underline cursor-pointer"
              href="signup"
            >
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
