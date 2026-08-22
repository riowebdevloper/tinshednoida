import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Calculator,
  Download,
  FileText,
  MessageCircle,
  Phone,
  Send,
  Trash2,
  User,
  X,
  Building,
  HardHat,
  MapPin,
  Clock,
  Wrench,
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
  "Mujhe 2500 sqft ka warehouse banana hai",
  "What is the cost per sq ft for Factory Sheds?",
  "Clear span capability up to 120ft",
  "Schedule a free site survey in Noida / NCR",
  "Download 51-Page Work Catalog (PDF)",
];

// Grounded conversational AI assistant logic with zero hallucinations
function generateAIResponse(
  userText: string,
  context: ConversationContext,
): { text: string; newContext: ConversationContext; actions?: MessageAction[] | undefined } {
  const text = userText.toLowerCase().trim();
  const nextContext = { ...context };

  // Contextual natural query: "Mujhe 2500 sqft ka warehouse banana hai" or similar
  if (
    (text.includes("warehouse") || text.includes("shed") || text.includes("factory") || text.includes("banana")) &&
    (/\d+/.test(text) || text.includes("sqft") || text.includes("sq ft"))
  ) {
    const numbers = text.match(/\d+[\d,]*/);
    const sizeStr = numbers ? `${numbers[0]} sq.ft` : "your specified area";
    nextContext.size = sizeStr;

    return {
      text: `Bahut badhiya! ${sizeStr} ke structure ke liye hum direct Noida yard fabrication aur turnkey crane erection provide karte hain.\n\nProject ko accurately plan karne ke liye kripya kuch details batayein:\n1. Site Location kahan hai (e.g. Noida, Greater Noida, Ghaziabad ya elsewhere)?\n2. Usage purpose kya hai (Storage/Warehouse, Manufacturing, ya Machine Shop)?\n3. Clear Eaves Height kitni chahiye (Standard 18ft, 24ft, ya 30ft+ for Crane)?\n4. Erection timeline kya hai?`,
      newContext: nextContext,
      actions: [
        { label: "Request Free Site Survey", action: "quote" },
        { label: "Chat on WhatsApp", action: "whatsapp" },
        { label: "Call Yard: +91 85279 77714", action: "call" },
      ],
    };
  }

  // Steel Tonnage Calculation / Estimator
  if (text.includes("tonnage") || text.includes("weight") || text.includes("calculate") || text.includes("estimate") || text.includes("vajan")) {
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
  if (text.includes("cost") || text.includes("price") || text.includes("rate") || text.includes("₹") || text.includes("budget") || text.includes("kharcha") || text.includes("dam")) {
    return {
      text: `Structural steel fabrication rates depend on clear-span width and crane requirements:\n\n• Industrial Factory Shed: ₹280 - ₹380 / sq.ft (Turnkey)\n• Warehouse / Godown: ₹240 - ₹340 / sq.ft\n• Heavy MS Framework: Custom / MT fabrication rate\n• 0.50mm Galvalume / PUF Roofing: ₹140 - ₹220 / sq.ft\n\nAll rates include IS 2062 prime steel, dual-coat red oxide primer, and crane erection.`,
      newContext: nextContext,
      actions: [
        { label: "Calculate Exact BOQ", action: "quote" },
        { label: "Speak with Lead Estimator", action: "call" },
      ],
    };
  }

  // Clear Span & Engineering Capabilities
  if (text.includes("span") || text.includes("column") || text.includes("truss") || text.includes("height") || text.includes("clear span")) {
    return {
      text: `Our Noida engineering shop designs and fabricates portal truss frames with column-free clear spans up to 120 FT (approx 36.5 meters) engineered to IS 800:2007 structural standards.\n\nWe provide 3D Tekla connection modeling, moment-resistant baseplate anchor design, and overhead EOT crane gantry calculations up to 25 Tonnes.`,
      newContext: nextContext,
      actions: [
        { label: "View Clear-Span Projects", action: "projects" },
        { label: "Calculate Shed Quote", action: "quote" },
      ],
    };
  }

  // Catalog / PDF
  if (text.includes("catalog") || text.includes("brochure") || text.includes("pdf") || text.includes("book") || text.includes("portfolio")) {
    return {
      text: `You can explore our complete 51-Page Work Catalog right here on the website with high-resolution drawings, project photography, and engineering certifications, or download the full PDF submittal document.`,
      newContext: nextContext,
      actions: [
        { label: "Download 51-Page PDF", action: "brochure" },
        { label: "Browse Catalog Online", action: "projects" },
      ],
    };
  }

  // Default Grounded Response
  return {
    text: `Namaste! I am the Tin Shade Noida Engineering Desk Assistant.\n\nWe fabricate industrial factory sheds, logistics warehouses, PEB structures, and heavy MS frameworks at our Noida Sector 10 yard with turnkey hydraulic crane erection across India.\n\nHow can I help you today? You can ask about square foot pricing, steel tonnage, clear span capabilities, or request a free site visit.`,
    newContext: nextContext,
    actions: [
      { label: "Calculate Instant BOQ", action: "quote" },
      { label: "Call Yard: +91 85279 77714", action: "call" },
      { label: "WhatsApp Direct", action: "whatsapp" },
    ],
  };
}

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [context, setContext] = useState<ConversationContext>({});
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "w-init",
      role: "assistant",
      text: "Namaste! Welcome to Tin Shade Noida.\n\nI can calculate your steel tonnage, estimate square foot costs, check crane mobilization timelines, or schedule a free site survey in Noida / Pan India.",
      timestamp: "Just now",
      actions: [
        { label: "Estimate Steel Tonnage", action: "quote" },
        { label: "Schedule Free Survey", action: "whatsapp" },
        { label: "Call Yard Desk", action: "call" },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: query.trim(),
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");

    setTimeout(() => {
      const response = generateAIResponse(query, context);
      setContext(response.newContext);

      const aiMessage: Message = {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: response.text,
        timestamp: "Just now",
        actions: response.actions,
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 350);
  };

  const handleActionClick = (action: MessageAction) => {
    if (action.action === "quote") {
      if (action.need) {
        triggerQuoteForNeed(action.need);
      } else {
        const elem = document.getElementById("quote");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = "/quote";
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
      {/* Floating Consultation Launcher in Navy & Safety Yellow */}
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setMinimized(false);
        }}
        aria-label="Open Engineering Consultation Desk"
        className={`fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6 items-center gap-2.5 border border-indigo-200/30 bg-[#101B3B] hover:bg-[#162650] px-4 py-3 text-white shadow-2xl transition-all active:scale-98 rounded-[3px] ${
          open && !minimized ? "hidden" : "flex"
        }`}
      >
        <span className="size-2.5 rounded-full bg-[#F59E0B] animate-pulse" />
        <span className="font-editorial-title text-xs font-bold text-white uppercase tracking-wider">
          TIN SHADE ASSISTANT
        </span>
      </button>

      {/* Consultation Box */}
      {open && !minimized && (
        <div className="fixed bottom-4 right-4 z-50 flex max-h-[85vh] h-[540px] w-[min(26rem,calc(100vw-2rem))] flex-col overflow-hidden border border-indigo-200/30 bg-[#0A1128] text-white shadow-2xl rounded-[3px] animate-in slide-in-from-bottom-3 duration-200">
          
          {/* Header in Navy Surface */}
          <div className="flex items-center justify-between border-b border-indigo-200/20 bg-[#101B3B] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="size-2.5 rounded-full bg-[#F59E0B]" />
              <div>
                <h3 className="font-editorial-title text-sm font-bold tracking-tight text-white uppercase">
                  Tin Shade Assistant
                </h3>
                <p className="text-[0.625rem] text-[#8E9CB8] font-mono">
                  D179 Sector 10, Noida · Active Yard Desk
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[#8E9CB8]">
              <button
                type="button"
                onClick={handleClearChat}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="p-1.5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Trash2 className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setMinimized(true)}
                title="Close desk"
                aria-label="Close desk"
                className="p-1.5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm bg-[#0A1128]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 leading-relaxed whitespace-pre-line text-xs rounded-[2px] ${
                    msg.role === "user"
                      ? "bg-[#F59E0B] text-[#0A1128] font-bold shadow-md"
                      : "border border-indigo-200/20 bg-[#101B3B] text-[#C7D2FE]"
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Actions Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-indigo-200/15 flex flex-wrap gap-1.5">
                      {msg.actions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          type="button"
                          onClick={() => handleActionClick(act)}
                          className="bg-[#0A1128] hover:bg-[#1E3A8A] text-white border border-indigo-200/25 px-2.5 py-1 text-[0.6875rem] font-mono font-bold transition-colors flex items-center gap-1 rounded-[2px]"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="size-2.5 text-[#F59E0B]" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Bar */}
          <div className="border-t border-indigo-200/15 bg-[#101B3B]/70 px-3 py-2 overflow-x-auto flex gap-1.5 scrollbar-none">
            {defaultSuggestions.slice(0, 3).map((sugg, sIdx) => (
              <button
                key={sIdx}
                type="button"
                onClick={() => handleSend(sugg)}
                className="whitespace-nowrap px-2.5 py-1 bg-[#0A1128] hover:bg-[#1E3A8A] text-[0.625rem] font-mono text-[#C7D2FE] border border-indigo-200/20 rounded-[2px] transition-colors"
              >
                {sugg}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t border-indigo-200/20 bg-[#101B3B] p-2.5 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about shed pricing, steel weight, clear span..."
              className="flex-1 border border-indigo-200/20 bg-[#0A1128] px-3 py-2 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="btn-red-primary text-xs py-2 px-3 disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="size-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
