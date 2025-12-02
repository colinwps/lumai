import Link from "next/link";
import { Plus } from "lucide-react";
// import { Button } from "@/components/ui/button"; 

export default function AppsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Apps</h1>
                    <p className="text-muted-foreground">Manage your AI applications.</p>
                </div>
                <Link href="/apps/create">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        <Plus className="mr-2 h-4 w-4" />
                        Create App
                    </button>
                </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder for App Cards */}
                {[1, 2, 3].map((i) => (
                    <Link key={i} href={`/apps/${i}`} className="block">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow p-6">
                            <div className="flex flex-col space-y-1.5">
                                <h3 className="text-lg font-semibold leading-none tracking-tight">App Name {i}</h3>
                                <p className="text-sm text-muted-foreground">Description of the application goes here.</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
