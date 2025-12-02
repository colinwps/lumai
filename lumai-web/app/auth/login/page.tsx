import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { LoginForm } from "./login-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Login - LumAI",
    description: "Login to your account",
};

export default function LoginPage() {
    // Note: In a real next-intl setup with App Router, you might use getTranslations on the server side
    // or ensure this page is within a [locale] route. 
    // For now, we assume the provider is available.
    const t = useTranslations("Auth");

    return (
        <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <Card className="border-0 shadow-none sm:border sm:shadow-sm">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-semibold tracking-tight">
                            {t("login_title")}
                        </CardTitle>
                        <CardDescription>
                            {t("login_description")}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
