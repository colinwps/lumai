"use client";

import { Bell, Search } from "lucide-react";

export function TopNav() {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
            <div className="flex flex-1 items-center gap-4">
                {/* Search Bar Placeholder */}
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="rounded-full p-2 hover:bg-accent text-muted-foreground hover:text-foreground">
                    <Bell className="h-5 w-5" />
                </button>
                {/* User Profile Placeholder */}
                <div className="h-8 w-8 rounded-full bg-primary/20" />
            </div>
        </header>
    );
}
