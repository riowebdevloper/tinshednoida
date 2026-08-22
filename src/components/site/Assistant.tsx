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
      text: `Structural steel fabrication rates depend on clear-span width and crane requirements:\n\n• Industrial Factory Shed: ₹280 – ₹380 / sq.ft (Turnkey)\n• Warehouse / Godown: ₹240 – ₹340 / sq.ft\n• Heavy MS Framework: Custom / MT fabrication rate\n• 0.50mm Galvalume / PUF Roofing: ₹140 – ₹220 / sq.ft\n\nAll rates include IS 2062 prime steel, dual-coat red oxide primer, and crane erection.`,
      newContext: nextContext,
      actions: [
        { label: "Request Written BOQ", action: "quote" },
        { label: "Call Yard: +91 85279 77714", action: "call" },
      ],
    };
  }

  // Clear Span & Technical Capabilities
  if (text.includes("span") || text.includes("120") || text.includes("crane") || text.includes("height") || text.includes("pillar")) {
    return {
      text: `Tin Shade Noida fabricates column-free modular trusses up to 120 Feet Clear Span:\n\n• Warren & Pratt Tubular Pipe Trusses\n• Heavy EOT Crane Gantry Columns (up to 40T)\n• Clear Eaves Height: 15ft to 36ft+\n• Weld Compliance: IS 816 Metal Arc Welding\n• Design Code: IS 800:2007`,
      newContext: nextContext,
      actions: [
        { label: "View Executed Projects", action: "projects" },
        { label: "Download Work Catalog", action: "brochure" },
      ],
    };
  }

  // Repair / Renovation
  if (text.includes("repair") || text.includes("leak") || text.includes("rust") || text.includes("renovat") || text.includes("purana") || text.includes("damage")) {
    return {
      text: `Industrial Shed Repair & Renovation Services:\n\n• Monsoon roof leak proofing & fastener replacement\n• Corroded GI sheet replacement with 0.50mm Galvalume\n• Sagging truss gusset reinforcement & column strengthening\n• Heavy-gauge gutter replacement (1.2mm – 1.6mm GI)\n\nWe execute repair work in phased sections with zero disruption to your factory operations.`,
      newContext: nextContext,
      actions: [
        { label: "Request Repair Inspection", action: "quote" },
        { label: "WhatsApp Yard Desk", action: "whatsapp" },
      ],
    };
  }

  // PEB Pre-Engineered Buildings
  if (text.includes("peb") || text.includes("pre-engineered") || text.includes("portal frame")) {
    return {
      text: `Pre-Engineered Building (PEB) Solutions:\n\n• Tapered built-up I-sections (High-tensile 345 MPa steel)\n• Cold-formed galvanized Z & C purlins (275 GSM zinc)\n• Up to 40% faster on-site bolted assembly\n• Clear spans up to 120ft without center pillars`,
      newContext: nextContext,
      actions: [
        { label: "PEB Technical Details", action: "projects" },
        { label: "Request PEB Quote", action: "quote" },
      ],
    };
  }

  // Site Survey / Inspection
  if (text.includes("visit") || text.includes("survey") || text.includes("inspect") || text.includes("noida") || text.includes("location") || text.includes("dekhna")) {
    return {
      text: `Senior Engineer Site Inspection:\n\nWe provide free physical site surveys across Noida, Greater Noida, Ghaziabad, Faridabad, Gurgaon, and Delhi NCR.\n\nOur engineers measure plot elevation, verify 40-tonne crane access routes, and provide digital CAD layout drawings within 24 hours.`,
      newContext: nextContext,
      actions: [
        { label: "Schedule Free Survey", action: "quote" },
        { label: "WhatsApp Yard Desk", action: "whatsapp" },
      ],
    };
  }

  // Working Hours & Yard Address
  if (text.includes("hour") || text.includes("time") || text.includes("address") || text.includes("kahan") || text.includes("location") || text.includes("office")) {
    return {
      text: `Tin Shade Noida Yard Details:\n\n📍 Workshop & Yard: D179 Sector 10, Noida, Uttar Pradesh 201301\n🕒 Operational Hours: Monday – Saturday (8:00 AM – 8:00 PM), Sunday by appointment\n📞 Direct Hotline: +91 85279 77714\n\nYou are welcome to visit our yard to inspect raw IS 2062 steel stocks and watch ongoing arc welding in person.`,
      newContext: nextContext,
      actions: [
        { label: "Call +91 85279 77714", action: "call" },
        { label: "WhatsApp Direct", action: "whatsapp" },
      ],
    };
  }

  // Brochure / Catalog
  if (text.includes("catalog") || text.includes("brochure") || text.includes("pdf") || text.includes("download") || text.includes("file")) {
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
    text: `Hello! This is the Engineering Desk at Tin Shade Noida (Fabrication Yard: D179 Sector 10, Noida).\n\nHow can we assist you with your industrial shed, warehouse, MS framing, or roofing project today?`,
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
      {/* Clean Architectural Floating Consultation Launcher */}
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setMinimized(false);
        }}
        aria-label="Open Engineering Consultation Desk"
        className={`fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6 items-center gap-2 border border-white/20 bg-[#14171A] hover:bg-[#0B0D0F] px-4 py-3 text-white shadow-2xl transition-all active:scale-98 ${
          open && !minimized ? "hidden" : "flex"
        }`}
      >
        <span className="size-2 rounded-full bg-[#B08A4A] animate-pulse" />
        <span className="font-editorial-title text-xs font-bold text-white uppercase tracking-wider">
          TIN SHADE ASSISTANT
        </span>
      </button>

      {/* Consultation Box */}
      {open && !minimized && (
        <div className="fixed bottom-4 right-4 z-50 flex max-h-[85vh] h-[520px] w-[min(26rem,calc(100vw-2rem))] flex-col overflow-hidden border border-white/20 bg-[#0B0D0F] text-white shadow-2xl animate-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#14171A] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-[#B08A4A]" />
              <div>
                <h3 className="font-editorial-title text-sm font-bold tracking-tight text-white uppercase">
                  Tin Shade Assistant
                </h3>
                <p className="text-[0.625rem] text-[#8C9398] font-mono">
                  D179 Sector 10, Noida · Active Yard Desk
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[#8C9398]">
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
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm bg-[#0B0D0F]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 leading-relaxed whitespace-pre-line text-xs ${
                    msg.role === "user"
                      ? "bg-[#B08A4A] text-[#0B0D0F] font-bold shadow-sm"
                      : "border border-white/10 bg-[#14171A] text-[#C8CCD0]"
                  }`}
                >
                  {msg.text}

                  {/* Contextual Actions */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5 pt-2.5 border-t border-white/10">
                      {msg.actions.map((act, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => executeAction(act)}
                          className="inline-flex items-center gap-1 border border-white/15 bg-white/5 hover:bg-white/15 px-2.5 py-1 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-white transition-colors"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="size-2.5" />
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="mt-1.5 block text-[0.625rem] text-[#8C9398] text-right font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#8C9398] italic py-1 font-mono">
                <span className="size-2 rounded-full bg-[#B08A4A] animate-pulse" />
                Calculating engineering specifications…
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-t border-white/10 bg-[#14171A] px-3 py-2">
            {defaultSuggestions.map((sug) => (
              <button
                key={sug}
                type="button"
                onClick={() => handleSend(sug)}
                className="shrink-0 border border-white/15 bg-[#0B0D0F] px-2.5 py-1 text-[0.6875rem] font-mono text-[#8C9398] hover:border-[#B08A4A] hover:text-white transition-all"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-white/10 bg-[#14171A] p-2.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rates, tonnages, spans, site visits…"
              className="min-w-0 flex-1 border border-white/15 bg-[#0B0D0F] px-3 py-2 text-xs text-white placeholder:text-[#8C9398] outline-none focus:border-[#B08A4A] font-sans"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex size-8 shrink-0 items-center justify-center bg-[#B08A4A] hover:bg-[#C59D5B] text-[#0B0D0F] disabled:opacity-40 transition-colors font-bold"
            >
              <Send className="size-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
