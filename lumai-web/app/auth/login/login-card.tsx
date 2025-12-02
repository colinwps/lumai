"use client";

import { useTranslations } from "next-intl";
import { LoginForm } from "./login-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function LoginCard() {
    const t = useTranslations("Auth");

    return (
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
    );
}
