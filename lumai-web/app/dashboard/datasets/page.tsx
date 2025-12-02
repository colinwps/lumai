import { Database } from "lucide-react";

export default function DatasetsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Datasets</h1>
                    <p className="text-muted-foreground">Manage your knowledge bases.</p>
                </div>
            </div>
            <div className="rounded-lg border border-dashed p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <Database className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No datasets created</h3>
                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                    Upload documents to create your first dataset.
                </p>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Create Dataset
                </button>
            </div>
        </div>
    );
}
