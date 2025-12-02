export default async function AppDetailPage({ params }: { params: Promise<{ appId: string }> }) {
    const { appId } = await params;
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">App Details: {appId}</h1>
                <p className="text-muted-foreground">Manage configuration and workflows.</p>
            </div>
            {/* Add tabs for Overview, Workflow, Settings */}
        </div>
    );
}
