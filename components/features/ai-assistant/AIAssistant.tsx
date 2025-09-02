"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/utils/utils";
import { sendMessage } from "./actions";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. I can help you learn more about Rafif's portfolio, skills, and projects. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
      // Create context about Rafif's portfolio
      const portfolioContext = `
        Kamu adalah AI Assistant untuk website portofolio Muhamad Rafif. Berikut informasi tentang Rafif:
        
        Tentang: Rafif adalah seorang Junior Fullstack Web Developer dengan keterampilan di React.js, Next.js, Vue.js, Tailwind CSS, dan Laravel. Ia aktif berpartisipasi dalam berbagai proyek dan kegiatan ekstrakurikuler yang mengasah kemampuan kepemimpinan serta kerja timnya.
        
        Status Saat Ini: Rafif sedang menempuh pendidikan di SMK Wikrama Bogor (2023–2026), jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). Selain itu, ia juga aktif mengerjakan berbagai proyek pribadi maupun sekolah untuk memperkuat kemampuan frontend dan backend development.
        
        Keahlian: 
        - Bahasa Pemrograman: JavaScript, TypeScript, PHP, HTML, CSS
        - Framework: React.js, Next.js, Vue.js, Laravel
        - Styling: Tailwind CSS, SASS, Bootstrap
        - Tools: VS Code, Git, GitHub, Figma, npm
        
        Proyek:
        - Portfolio Laravel
        - Rekap Absensi (Laravel + React)
        - Pengaduan Masyarakat
        - Perpustakaan App
        - Cashier App
        - Rayon Cicurug 2
        - Kalkulator IMT
        - Kalkulator Bunga
        
        Kontak: Berdomisili di Caringin - Bogor, Jawa Barat, Indonesia. 
        Telepon: (+62)81283330396 
        Email: mrafiff3@gmail.com
        
        Media Sosial: 
        - GitHub: rafif2112
        - LinkedIn: muhamad-rafif22
        - Instagram: rafiff.21
        
        Tolong jawab pertanyaan seputar latar belakang, keahlian, proyek, atau cara menghubungi Rafif. Jawaban harus profesional dan membantu.
        
        Pertanyaan pengguna: ${currentInput}
      `;


      const response = await sendMessage(portfolioContext);
      
      // Extract text from response
      let botResponseText = "I'm sorry, I couldn't process that request. Please try again.";
      
      if (response && response.response) {
        botResponseText = response.response;
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact Rafif directly at mrafiff3@gmail.com",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Trigger Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          "bg-accent_primary hover:bg-accent_hover text-white",
          isOpen && "hidden"
        )}
        aria-label="Open AI Assistant"
      >
        <MessageCircle size={24} />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-primary">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-accent_primary to-accent_secondary p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-90">
                  {isTyping ? "Typing..." : "Online"}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20"
              aria-label="Close Chat"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-2 animate-in slide-in-from-bottom-2 duration-300",
                  message.sender === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    message.sender === "user"
                      ? "bg-accent_primary text-white"
                      : "bg-slate-200 text-slate-600 dark:bg-dark dark:text-white"
                  )}
                >
                  {message.sender === "user" ? (
                    <User size={16} />
                  ) : (
                    <Bot size={16} />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[250px] rounded-lg px-3 py-2 text-sm shadow-sm",
                    message.sender === "user"
                      ? "bg-accent_primary text-white"
                      : "bg-slate-100 text-slate-800 dark:bg-dark dark:text-white border dark:border-slate-800"
                  )}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  <div
                    className={cn(
                      "mt-1 text-xs opacity-70",
                      message.sender === "user" ? "text-white" : "text-slate-500 dark:text-slate-400"
                    )}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2 animate-in slide-in-from-bottom-2 duration-300">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 dark:bg-dark dark:text-white">
                  <Bot size={16} />
                </div>
                <div className="rounded-lg bg-slate-100 px-3 py-2 dark:bg-dark border dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-accent_primary [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-accent_primary [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-accent_primary"></div>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      AI is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 p-4 dark:border-slate-800">
            <div className="flex items-end gap-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Rafif's"
                ref={input => {
                  if (input && isOpen) {
                    input.focus();
                  }
                }}
                className="flex-1 resize-none rounded-lg border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent_primary dark:border-slate-800 dark:text-white"
                rows={1}
                disabled={isTyping}
                style={{
                  minHeight: "40px",
                  maxHeight: "100px",
                }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="h-10 w-10 shrink-0 rounded-lg bg-accent_primary hover:bg-accent_hover disabled:opacity-50"
                aria-label="Send Message"
              >
                {isTyping ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}