"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";
import {
  LayoutDashboard,
  Bot,
  Database,
  Cpu,
  Settings,
  BarChart3,
  Plus,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Apps",
    href: "/apps",
    icon: Bot,
  },
  {
    title: "Chat",
    href: "/chat",
    icon: Plus, // Or a specific chat icon
  },
  {
    title: "Datasets",
    href: "/datasets",
    icon: Database,
  },
  {
    title: "Models",
    href: "/models",
    icon: Cpu,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card text-card-foreground">
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl font-bold text-primary">LumAI</span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item, index) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t p-4">
        <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3 text-sm">
           {/* Placeholder for user info or team switcher */}
           <div className="h-8 w-8 rounded-full bg-primary/20" />
           <div className="flex flex-col">
             <span className="font-medium">My Team</span>
             <span className="text-xs text-muted-foreground">Free Plan</span>
           </div>
        </div>
      </div>
    </div>
  );
}
