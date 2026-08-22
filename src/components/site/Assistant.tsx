import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Calculator,
  Check,
  Download,
  FileText,
  MessageCircle,
  Phone,
  RefreshCw,
  Send,
  Trash2,
  User,
  X,
  Building,
  HardHat,
} from "lucide-react";
import { company, needs, projects, services } from "@/lib/site-data";
import { triggerQuoteForNeed } from "./QuoteWizard";

export interface MessageAction {
  label: string;
  action: "quote" | "whatsapp" | "call" | "projects" | "brochure";
  need?: string | undefined;
}

export interface Message {
  id: string;
  role: "assistant" | "user";
  text: string;
  timestamp: string;
  actions?: MessageAction[] | undefined;
}

interface ConversationContext {
  serviceType?: string;
  size?: string;
  location?: string;
  purpose?: string;
  timeline?: string;
  contactName?: string;
  contactPhone?: string;
}

const defaultSuggestions = [
  "Estimate Steel Tonnage for my site",
  "What is the cost per sq ft for Factory Sheds?",
  "Clear span capability up to 120ft",
  "Schedule a free site survey in Noida / NCR",
  "Download 51-Page Work Catalog (PDF)",
];

// Grounded engineering assistant logic with zero hallucinations
function generateAIResponse(
  userText: string,
  context: ConversationContext,
): { text: string; newContext: ConversationContext; actions?: MessageAction[] | undefined } {
  const text = userText.toLowerCase().trim();
  const nextContext = { ...context };

  // Steel Tonnage Calculation / Estimator
  if (text.includes("tonnage") || text.includes("weight") || text.includes("calculate") || text.includes("estimate")) {
    return {
      text: `For IS 2062 Prime Mild Steel structural sheds:\n\n• Factory Sheds: ~4.5 to 5.2 kg / sq.ft\n• Logistics Warehouses: ~4.0 to 4.5 kg / sq.ft\n• Heavy Crane Gantry Bays: ~6.0 to 7.5 kg / sq.ft\n\nFor a 10,000 sq ft shed, estimated steel requirement is approx ~45 to 50 Metric Tonnes.\n\nWould you like an itemized BOQ calculation with current steel rates?`,
      newContext: nextContext,
      actions: [
        { label: "Open Steel Estimator", action: "quote" },
        { label: "Chat on WhatsApp", action: "whatsapp" },
      ],
    };
  }

  // Cost / Pricing
  if (text.includes("cost") || text.includes("price") || text.includes("rate") || text.includes("₹") || text.includes("budget")) {
    return {
      text: `Structural steel fabrication rates depend on clear-span width and crane requirements:\n\n• Industrial Factory Shed: ₹280 – ₹380 / sq.ft (Turnkey)\n• Warehouse / Godown: ₹240 – ₹340 / sq.ft\n• Heavy MS Framework: Custom / MT fabrication rate\n• 0.50mm Galvalume / PUF Roofing: ₹140 – ₹220 / sq.ft\n\nAll rates include IS 2062 prime steel, dual-coat red oxide primer, and crane erection.`,
      newContext: nextContext,
      actions: [
        { label: "Request Written BOQ", action: "quote" },
        { label: "Call Yard: +91 85279 77714", action: "call" },
      ],
    };
  }

  // Clear Span & Technical Capabilities
  if (text.includes("span") || text.includes("120") || text.includes("crane") || text.includes("height")) {
    return {
      text: `Tin Shade Noida fabricates column-free modular trusses up to 120 Feet Clear Span:\n\n• Warren & Pratt Tubular Pipe Trusses\n• Heavy EOT Crane Gantry Columns (up to 40T)\n• Clear Eaves Height: 15ft to 36ft+\n• Weld Compliance: IS 816 Metal Arc Welding\n• Design Code: IS 800:2007`,
      newContext: nextContext,
      actions: [
        { label: "View Executed Projects", action: "projects" },
        { label: "Download Work Catalog", action: "brochure" },
      ],
    };
  }

  // Site Survey / Inspection
  if (text.includes("visit") || text.includes("survey") || text.includes("inspect") || text.includes("noida") || text.includes("location")) {
    return {
      text: `Senior Engineer Site Inspection:\n\nWe provide free physical site surveys across Noida, Greater Noida, Ghaziabad, Faridabad, Gurgaon, and Delhi NCR.\n\nOur engineers measure plot elevation, verify 40-tonne crane access routes, and provide digital CAD layout drawings within 24 hours.`,
      newContext: nextContext,
      actions: [
        { label: "Schedule Free Survey", action: "quote" },
        { label: "WhatsApp Yard Desk", action: "whatsapp" },
      ],
    };
  }

  // Brochure / Catalog
  if (text.includes("catalog") || text.includes("brochure") || text.includes("pdf") || text.includes("download")) {
    return {
      text: `You can download our official 51-Page Structural Work Catalog (PDF, 4.5 MB):\n\n• 500+ Project Case Studies\n• Truss Chord Weight Schedules\n• IS 2062 Mill Test Certificate Criteria\n• Crane Gantry Foundation Anchoring Details`,
      newContext: nextContext,
      actions: [
        { label: "Download 51-Page PDF", action: "brochure" },
      ],
    };
  }

  // Default Consultation Response
  return {
    text: `Hello! This is the Engineering Desk at Tin Shade Noida (Fabrication Yard: D179 Sector 10, Noida).\n\nHow can we assist you with your industrial shed or structural steel requirement today?`,
    newContext: nextContext,
    actions: [
      { label: "Get Itemized Quote", action: "quote" },
      { label: "Call +91 85279 77714", action: "call" },
      { label: "WhatsApp Direct", action: "whatsapp" },
    ],
  };
}

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext>({});
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Welcome to Tin Shade Noida Engineering Desk.\n\nAsk about steel tonnage calculations, square foot rates, 120ft clear-span trusses, or schedule a free site survey.",
      timestamp: "Just now",
      actions: [
        { label: "Estimate Steel Tonnage", action: "quote" },
        { label: "Schedule Site Survey", action: "whatsapp" },
        { label: "51-Page Catalog PDF", action: "brochure" },
      ],
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && !minimized) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, open, minimized]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const resp = generateAIResponse(query, context);
      setContext(resp.newContext);
      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: resp.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actions: resp.actions,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  const executeAction = (action: MessageAction) => {
    if (action.action === "quote") {
      if (action.need) {
        triggerQuoteForNeed(action.need);
      } else {
        const elem = document.getElementById("estimator") || document.getElementById("quote");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMinimized(true);
    } else if (action.action === "whatsapp") {
      window.open(company.whatsappText, "_blank");
    } else if (action.action === "call") {
      window.location.href = company.phoneHref;
    } else if (action.action === "projects") {
      window.location.href = "/projects";
    } else if (action.action === "brochure") {
      window.open(company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf", "_blank");
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `w-${Date.now()}`,
        role: "assistant",
        text: "Conversation reset. How can our engineering desk assist you with your project?",
        timestamp: "Just now",
        actions: [
          { label: "Estimate Steel Tonnage", action: "quote" },
          { label: "Schedule Free Survey", action: "whatsapp" },
        ],
      },
    ]);
  };

  return (
    <>
      {/* Clean Corporate Floating Launcher Button */}
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setMinimized(false);
        }}
        aria-label="Open Engineering Consultation Desk"
        className={`fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6 items-center gap-2 rounded-xs border border-slate-300 bg-[#0E2A47] px-4 py-2.5 text-white shadow-xl transition-all hover:bg-[#0B192C] hover:shadow-2xl active:scale-98 ${
          open && !minimized ? "hidden" : "flex"
        }`}
      >
        <HardHat className="size-4 text-amber-400" aria-hidden="true" />
        <span className="font-display text-xs font-bold text-white tracking-wide">
          Engineering Desk
        </span>
      </button>

      {/* Corporate Consultation Modal Box */}
      {open && !minimized && (
        <div className="fixed bottom-4 right-4 z-50 flex max-h-[85vh] h-[520px] w-[min(26rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xs border border-slate-300 bg-white text-slate-900 shadow-2xl animate-in slide-in-from-bottom-3 duration-200">
          
          {/* Executive Header */}
          <div className="flex items-center justify-between border-b border-[#0B192C]/10 bg-[#0E2A47] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-xs bg-amber-400 text-slate-950">
                <HardHat className="size-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold tracking-tight text-white">
                  Tin Shade Engineering Desk
                </h3>
                <p className="text-[0.6875rem] text-slate-300 font-mono">
                  D179 Sector 10, Noida · Active Yard
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-300">
              <button
                type="button"
                onClick={handleClearChat}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="rounded-xs p-1.5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Trash2 className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setMinimized(true)}
                title="Close desk"
                aria-label="Close desk"
                className="rounded-xs p-1.5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Messages Body in Clean White & Slate */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm bg-[#F8FAFC]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-xs p-3 leading-relaxed whitespace-pre-line text-xs ${
                    msg.role === "user"
                      ? "bg-[#0E2A47] text-white font-medium shadow-xs"
                      : "border border-slate-200 bg-white text-slate-800 shadow-xs"
                  }`}
                >
                  {msg.text}

                  {/* Contextual Action Buttons */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                      {msg.actions.map((act, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => executeAction(act)}
                          className="inline-flex items-center gap-1 rounded-xs bg-[#0E2A47] hover:bg-[#0B192C] px-2.5 py-1 font-display text-[0.6875rem] font-bold uppercase tracking-wider text-white transition-colors"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="size-2.5" />
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="mt-1 block text-[0.625rem] text-slate-400 text-right font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-500 italic py-1 font-mono">
                <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
                Calculating engineering specifications…
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Consultation Suggestions */}
          <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-t border-slate-200 bg-slate-100 px-3 py-2">
            {defaultSuggestions.map((sug) => (
              <button
                key={sug}
                type="button"
                onClick={() => handleSend(sug)}
                className="shrink-0 rounded-xs border border-slate-300 bg-white px-2.5 py-1 text-[0.6875rem] font-mono text-slate-700 hover:border-[#0E2A47] hover:text-[#0E2A47] transition-all"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Clean Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-2.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rates, tonnages, spans, site visits…"
              className="min-w-0 flex-1 rounded-xs border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#0E2A47] font-sans"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex size-8 shrink-0 items-center justify-center rounded-xs bg-[#0E2A47] hover:bg-[#0B192C] text-white disabled:opacity-40 transition-colors"
            >
              <Send className="size-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
