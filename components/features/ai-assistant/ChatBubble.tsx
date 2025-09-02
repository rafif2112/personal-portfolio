import { cn } from "@/utils/utils";
import { Bot, User } from "lucide-react";

interface ChatBubbleProps {
    message: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export default function ChatBubble({ message, sender, timestamp }: ChatBubbleProps) {
    return (
        <div
            className={cn(
                "flex items-start gap-2 animate-in slide-in-from-bottom-2 duration-300",
                sender === "user" ? "flex-row-reverse" : "flex-row"
            )}
        >
            <div
                className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    sender === "user"
                        ? "bg-accent_primary text-white"
                        : "bg-slate-200 text-slate-600 dark:bg-dark dark:text-white"
                )}
            >
                {sender === "user" ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div
                className={cn(
                    "max-w-[250px] rounded-lg px-3 py-2 text-sm shadow-sm",
                    sender === "user"
                        ? "bg-accent_primary text-white"
                        : "bg-slate-100 text-slate-800 dark:bg-dark dark:text-white border dark:border-slate-800"
                )}
            >
                <p className="leading-relaxed">{message}</p>
                <div
                    className={cn(
                        "mt-1 text-xs opacity-70",
                        sender === "user" ? "text-white" : "text-slate-500 dark:text-slate-400"
                    )}
                >
                    {timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </div>
            </div>
        </div>
    );
}
