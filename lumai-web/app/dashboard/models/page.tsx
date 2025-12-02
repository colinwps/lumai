import { Cpu } from "lucide-react";

export default function ModelsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Models</h1>
                    <p className="text-muted-foreground">Configure LLM providers and models.</p>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder for Model Providers */}
                {['OpenAI', 'Anthropic', 'Google Gemini'].map((provider) => (
                    <div key={provider} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Cpu className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{provider}</h3>
                                <p className="text-sm text-muted-foreground">Connected</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
