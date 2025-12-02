"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import enMessages from "@/messages/en.json";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <NextIntlClientProvider locale="en" messages={enMessages} timeZone="Asia/Shanghai">
            {children}
        </NextIntlClientProvider>
    );
}
