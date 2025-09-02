import { Bot } from "lucide-react";

export default function TypingIndicator() {
    return (
        <div className="flex items-start gap-2 animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 dark:bg-dark dark:text-white">
                <Bot size={16} />
            </div>
            <div className="rounded-lg bg-slate-100 px-3 py-2 dark:bg-dark border dark:border-slate-800">
                <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-accent_primary [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-accent_primary [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-accent_primary"></div>
                </div>
            </div>
        </div>
    );
}
