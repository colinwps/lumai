import { Metadata } from "next";
import { LoginCard } from "./login-card";

export const metadata: Metadata = {
    title: "Login - LumAI",
    description: "Login to your account",
};

export default function LoginPage() {
    return (
        <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <LoginCard />
            </div>
        </div>
    );
}
