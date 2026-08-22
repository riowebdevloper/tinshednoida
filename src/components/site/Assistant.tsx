import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  Download,
  FileText,
  MessageCircle,
  Phone,
  RefreshCw,
  Send,
  Sparkles,
  Trash2,
  User,
  X,
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
  "What do you build?",
  "How much does a shed cost?",
  "Do you provide Pan India service?",
  "How can I get a quote?",
  "Can I request a site visit?",
  "How do I download the brochure?",
];

// Conversational AI logic with grounded knowledge base & zero hallucinations
function generateAIResponse(
  userText: string,
  context: ConversationContext,
): { text: string; newContext: ConversationContext; actions?: MessageAction[] | undefined } {
  const text = userText.toLowerCase().trim();
  const nextContext = { ...context };

  // 1. Extract Service Type
  if (text.includes("warehouse") || text.includes("godown") || text.includes("storage")) {
    nextContext.serviceType = "Warehouse Shed";
  } else if (
    text.includes("industrial") ||
    text.includes("factory") ||
    text.includes("workshop") ||
    text.includes("plant")
  ) {
    nextContext.serviceType = "Industrial Shed";
  } else if (
    text.includes("ms structure") ||
    text.includes("steel frame") ||
    text.includes("mezzanine") ||
    text.includes("truss")
  ) {
    nextContext.serviceType = "MS Structure";
  } else if (
    text.includes("roofing") ||
    text.includes("tin roof") ||
    text.includes("sheet") ||
    text.includes("terrace")
  ) {
    nextContext.serviceType = "Tin Roofing";
  } else if (
    text.includes("peb") ||
    text.includes("pre-engineered") ||
    text.includes("pre engineered")
  ) {
    nextContext.serviceType = "PEB Structure";
  } else if (
    text.includes("repair") ||
    text.includes("fix") ||
    text.includes("leak") ||
    text.includes("renovate")
  ) {
    nextContext.serviceType = "Repair / Renovation";
  }

  // 2. Extract Area Size
  const sizeMatch =
    text.match(/(\d{3,6})\s*(sqft|sq\s*ft|square\s*feet|feet|ft)/i) ||
    text.match(/(\d{3,6})\s*k[a\s]/i);
  if (sizeMatch && sizeMatch[1]) {
    nextContext.size = `${sizeMatch[1]} sq ft`;
  }

  // 3. Extract Location
  if (text.includes("noida") || text.includes("greater noida")) {
    nextContext.location = "Noida / Greater Noida";
  } else if (
    text.includes("delhi") ||
    text.includes("ncr") ||
    text.includes("ghaziabad") ||
    text.includes("gurugram") ||
    text.includes("faridabad")
  ) {
    nextContext.location = "Delhi NCR";
  } else if (
    text.includes("mumbai") ||
    text.includes("maharashtra") ||
    text.includes("pune") ||
    text.includes("gujarat") ||
    text.includes("bangalore") ||
    text.includes("south")
  ) {
    nextContext.location = "Pan India";
  }

  // BROCHURE / CATALOG DOWNLOAD QUERY
  if (
    text.includes("brochure") ||
    text.includes("catalog") ||
    text.includes("pdf") ||
    text.includes("download")
  ) {
    return {
      text: `You can view and download our complete 51-page official company catalog directly.\n\nIt features structural drawings, completed warehouse & industrial shed photos, material specifications, and project portfolios.`,
      newContext: nextContext,
      actions: [
        { label: "DOWNLOAD BROCHURE (PDF)", action: "brochure" },
        { label: "GET A QUOTE", action: "quote" },
      ],
    };
  }

  // WHAT IS AN INDUSTRIAL SHED?
  if (text.includes("what is an industrial shed") || text.includes("what is industrial shed")) {
    return {
      text: `An Industrial Shed is a heavy-duty structural steel enclosure engineered for manufacturing units, machine shops, processing factories, and industrial workshops.\n\nTin Shade Noida builds custom clear-span industrial sheds with heavy tubular MS trusses, crane gantry beams, ridge ventilators, and weather-resistant GI/Galvalume roofing sheets.`,
      newContext: nextContext,
      actions: [
        { label: "QUOTE FOR INDUSTRIAL SHED", action: "quote", need: "Industrial Shed" },
        { label: "VIEW PROJECTS", action: "projects" },
      ],
    };
  }

  // WHAT IS MS STRUCTURE?
  if (text.includes("what is ms structure") || text.includes("what is ms")) {
    return {
      text: `An MS (Mild Steel) Structure consists of structural columns, heavy trusses, rafters, purlins, mezzanine floors, and steel frameworks fabricated using IS 2062 certified mild steel.\n\nOur certified welding crew fabricates and erects structures on site with anti-rust primer and epoxy protective coatings.`,
      newContext: nextContext,
      actions: [
        { label: "QUOTE FOR MS STRUCTURE", action: "quote", need: "MS Structure" },
        { label: "VIEW PROJECTS", action: "projects" },
      ],
    };
  }

  // WHAT IS PEB STRUCTURE?
  if (text.includes("what is peb") || text.includes("pre-engineered")) {
    return {
      text: `A PEB (Pre-Engineered Building) is an engineered steel building system using factory-built tapered I-beams, high-yield steel frames, and cold-formed Z/C purlins.\n\nPEB structures offer up to 50% faster on-site crane erection, wider column-free spans, and modular expandability for logistics parks and factories.`,
      newContext: nextContext,
      actions: [
        { label: "QUOTE FOR PEB STRUCTURE", action: "quote", need: "PEB Structure" },
        { label: "VIEW PROJECTS", action: "projects" },
      ],
    };
  }

  // WHAT IS TIN ROOFING?
  if (text.includes("what is tin roofing") || text.includes("tin roof")) {
    return {
      text: `Tin Roofing involves installing corrugated or trapezoidal color-coated Galvanized Iron (GI) or Galvalume sheets on MS frameworks.\n\nWe provide 100% leak-proof screw fastening with EPDM washers, proper slope design for Indian monsoons, and translucent polycarbonate daylighting panels.`,
      newContext: nextContext,
      actions: [
        { label: "QUOTE FOR TIN ROOFING", action: "quote", need: "Tin Roofing" },
        { label: "TALK ON WHATSAPP", action: "whatsapp" },
      ],
    };
  }

  // DO YOU PROVIDE REPAIR WORK?
  if (text.includes("repair") || text.includes("leakage") || text.includes("renovation")) {
    return {
      text: `Yes! We provide complete shed repair and renovation services Pan India — including rusted sheet replacement, gutter waterproofing, roof leak fixing, structural truss strengthening, and shed extensions.`,
      newContext: nextContext,
      actions: [
        { label: "BOOK REPAIR SURVEY", action: "quote", need: "Other" },
        { label: "CALL US DIRECTLY", action: "call" },
      ],
    };
  }

  // PRICING / COST QUERY
  if (
    text.includes("cost") ||
    text.includes("price") ||
    text.includes("rate") ||
    text.includes("kitne") ||
    text.includes("budget") ||
    text.includes("how much")
  ) {
    let reply =
      `Pricing depends on structure type, clear-span width, eaves height, sheet gauge, steel specifications, site conditions and installation location.\n\n` +
      `Rather than guessing an inaccurate figure, our engineering team provides itemized written quotations with transparent pricing and free site visits.`;

    if (nextContext.serviceType || nextContext.size) {
      reply += `\n\nI have noted your interest in ${nextContext.serviceType || "a structure"}${nextContext.size ? ` (approx ${nextContext.size})` : ""}. Would you like to get a formal quotation?`;
    } else {
      reply += `\n\nWould you like to get a free written quote or schedule a site visit?`;
    }

    return {
      text: reply,
      newContext: nextContext,
      actions: [
        { label: "GET A QUOTE", action: "quote", need: nextContext.serviceType },
        { label: "TALK ON WHATSAPP", action: "whatsapp" },
        { label: "CALL NOW", action: "call" },
      ],
    };
  }

  // WHAT DO YOU BUILD / SERVICES QUERY
  if (
    text.includes("what do you build") ||
    text.includes("services") ||
    text.includes("build") ||
    text.includes("kya banate")
  ) {
    const list = needs.map((n) => `• ${n.label} (${n.short})`).join("\n");
    return {
      text: `Tin Shade Noida fabricates and installs 6 core industrial structure categories Pan India:\n\n${list}\n\nAll structures are site-fabricated by our in-house crew. Tell me what type of project you have in mind!`,
      newContext: nextContext,
      actions: [
        { label: "GET A QUOTE", action: "quote" },
        { label: "VIEW PROJECTS", action: "projects" },
      ],
    };
  }

  // SITE VISIT / MEASUREMENT QUERY
  if (
    text.includes("site visit") ||
    text.includes("visit") ||
    text.includes("measurement") ||
    text.includes("survey")
  ) {
    return {
      text: `Yes! We provide 100% free site visits and technical measurements across Noida, Greater Noida, Delhi NCR, and major industrial centers across India.\n\nOur site engineers will visit your site, inspect structural feasibility, and provide a clear plan and estimate.`,
      newContext: nextContext,
      actions: [
        { label: "BOOK SITE VISIT", action: "quote" },
        { label: "WHATSAPP US", action: "whatsapp" },
      ],
    };
  }

  // SERVICE AREA / LOCATION / PAN INDIA QUERY
  if (
    text.includes("area") ||
    text.includes("location") ||
    text.includes("where") ||
    text.includes("pan india") ||
    text.includes("city")
  ) {
    return {
      text: `Tin Shade Noida serves clients PAN INDIA!\n\nOur main fabrication hub is located in Sector 10, Noida, UP, and our installation crews execute factory shed, warehouse roofing and MS structure projects nationwide.`,
      newContext: nextContext,
      actions: [
        { label: "GET A QUOTE", action: "quote" },
        { label: "CALL US", action: "call" },
      ],
    };
  }

  // CONTACT INFORMATION QUERY
  if (text.includes("contact") || text.includes("phone") || text.includes("email") || text.includes("address")) {
    return {
      text: `You can reach Tin Shade Noida directly:\n\n📞 Phone: ${company.phone}\n💬 WhatsApp: +91-8527977714\n✉️ Email: ${company.email}\n📍 Workshop & HQ: ${company.address}\n⏰ Hours: ${company.hours}`,
      newContext: nextContext,
      actions: [
        { label: "CALL NOW", action: "call" },
        { label: "WHATSAPP US", action: "whatsapp" },
        { label: "GET A QUOTE", action: "quote" },
      ],
    };
  }

  // PROJECTS PORTFOLIO QUERY
  if (
    text.includes("project") ||
    text.includes("portfolio") ||
    text.includes("work") ||
    text.includes("photo") ||
    text.includes("example")
  ) {
    return {
      text: `We have completed over 500+ industrial sheds, warehouses, and steel structures over 15+ years of operations.\n\nYou can explore our recent project portfolio, catalog viewer and action videos directly on this website.`,
      newContext: nextContext,
      actions: [
        { label: "VIEW PROJECTS", action: "projects" },
        { label: "DOWNLOAD BROCHURE", action: "brochure" },
        { label: "GET A QUOTE", action: "quote" },
      ],
    };
  }

  // CONVERSATIONAL FLOW FOR SPECIFIC REQUIREMENTS
  if (nextContext.serviceType) {
    if (!nextContext.size) {
      return {
        text: `Got it — you are interested in a ${nextContext.serviceType}.\n\nCould you share the approximate area or dimensions required (e.g. 2,500 sq ft or 50x50 ft)?`,
        newContext: nextContext,
        actions: [
          {
            label: `QUOTE FOR ${nextContext.serviceType.toUpperCase()}`,
            action: "quote",
            need: nextContext.serviceType,
          },
        ],
      };
    }

    if (!nextContext.location) {
      return {
        text: `Understood: ${nextContext.serviceType} of approx. ${nextContext.size}.\n\nWhere is your project site located (e.g. Noida, Greater Noida, Ghaziabad, or another city)?`,
        newContext: nextContext,
        actions: [{ label: "PROCEED TO QUOTE", action: "quote", need: nextContext.serviceType }],
      };
    }

    return {
      text: `Great! I have gathered your requirement:\n\n• Structure: ${nextContext.serviceType}\n• Approximate Area: ${nextContext.size}\n• Site Location: ${nextContext.location}\n\nWould you like to open the quotation form to submit your contact details for an official estimate and free site visit?`,
      newContext: nextContext,
      actions: [
        { label: "GET OFFICIAL QUOTE", action: "quote", need: nextContext.serviceType },
        { label: "CHAT ON WHATSAPP", action: "whatsapp" },
      ],
    };
  }

  // DEFAULT HELPFUL FALLBACK (Strict zero hallucinations)
  return {
    text: `I'm Tin Shade's AI Assistant. I can help answer questions about shed types, site visits, execution timelines, materials, or collect your project requirements for an official quotation.\n\nWhat type of project are you planning to build?`,
    newContext: nextContext,
    actions: [
      { label: "GET A QUOTE", action: "quote" },
      { label: "WHATSAPP US", action: "whatsapp" },
      { label: "CALL NOW", action: "call" },
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
      id: "m-welcome",
      role: "assistant",
      text: "Hello! I am the Tin Shade AI Assistant. How can I help with your industrial shed, warehouse, roofing or MS structure project today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && !minimized) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, minimized, isTyping]);

  function handleSend(userQuery?: string) {
    const query = (userQuery || input).trim();
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
      const response = generateAIResponse(query, context);
      setContext(response.newContext);

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        role: "assistant",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actions: response.actions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  }

  function handleClearChat() {
    setContext({});
    setMessages([
      {
        id: `m-reset-${Date.now()}`,
        role: "assistant",
        text: "Chat history cleared. How can I assist you with your construction requirements?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  }

  function executeAction(act: MessageAction) {
    if (act.action === "quote") {
      triggerQuoteForNeed(act.need || context.serviceType || "Industrial Shed");
      setMinimized(true);
    } else if (act.action === "whatsapp") {
      window.open(company.whatsappText, "_blank");
    } else if (act.action === "call") {
      window.location.href = company.phoneHref;
    } else if (act.action === "brochure") {
      const link = document.createElement("a");
      link.href = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";
      link.download = "TIN_SHADE_NOIDA_CATALOG.pdf";
      link.target = "_blank";
      link.click();
    } else if (act.action === "projects") {
      const projElem = document.getElementById("projects") || document.getElementById("gallery");
      if (projElem) {
        projElem.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/projects";
      }
    }
  }

  return (
    <>
      {/* Floating Assistant Button */}
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setMinimized(false);
        }}
        aria-label="Open Tin Shade AI Assistant"
        className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full border border-primary/50 bg-steel-deep px-4 py-3.5 text-white shadow-elevated transition-all hover:scale-105 hover:border-primary ${
          open && !minimized ? "hidden" : "flex"
        }`}
      >
        <div className="relative flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
          <Bot className="size-5" />
          <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-emerald-400 border border-steel-deep animate-pulse" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-white">
            Tin Shade Assistant
          </p>
          <p className="text-xs text-primary font-medium">Usually replies instantly</p>
        </div>
      </button>

      {/* Main Chat Assistant Modal Box */}
      {open && !minimized && (
        <div className="fixed bottom-4 right-4 z-50 flex max-h-[85vh] h-[540px] w-[min(26rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-sm border border-steel-line bg-steel-deep text-steel-foreground shadow-elevated animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-steel-line bg-steel px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/40">
                <Sparkles className="size-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold uppercase text-white tracking-wide">
                  Tin Shade Assistant
                </h3>
                <p className="text-xs text-steel-muted">
                  Pan India Service · Usually replies instantly
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-steel-muted">
              <button
                type="button"
                onClick={handleClearChat}
                title="Clear chat"
                aria-label="Clear chat history"
                className="rounded-sm p-1.5 hover:bg-steel-deep hover:text-white transition-colors"
              >
                <Trash2 className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setMinimized(true)}
                title="Minimize chat"
                aria-label="Minimize chat assistant"
                className="rounded-sm p-1.5 hover:bg-steel-deep hover:text-white transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 mt-0.5">
                    <Bot className="size-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-sm p-3.5 leading-relaxed whitespace-pre-line shadow-xs ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground font-medium"
                      : "border border-steel-line bg-steel/90 text-steel-foreground"
                  }`}
                >
                  {msg.text}

                  {/* Contextual Action Buttons */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap gap-2 pt-2 border-t border-steel-line/40">
                      {msg.actions.map((act, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => executeAction(act)}
                          className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-wider text-primary-foreground shadow-xs transition-transform hover:scale-102"
                        >
                          {act.label}
                          <ArrowRight className="size-3" />
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="mt-1 block text-[0.6rem] text-steel-muted text-right font-mono opacity-70">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.role === "user" && (
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-steel text-steel-muted border border-steel-line mt-0.5">
                    <User className="size-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-steel-muted italic py-1">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Sparkles className="size-3 animate-spin" />
                </span>
                Tin Shade Assistant is typing…
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestion Pills */}
          <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-t border-steel-line bg-steel/40 px-3 py-2">
            {defaultSuggestions.map((sug) => (
              <button
                key={sug}
                type="button"
                onClick={() => handleSend(sug)}
                className="shrink-0 rounded-full border border-steel-line bg-steel-deep px-3 py-1 text-[0.7rem] font-medium text-steel-muted transition-all hover:border-primary hover:text-white"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input Form Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-steel-line bg-steel p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about sheds, roofing, pricing, projects…"
              className="min-w-0 flex-1 rounded-sm border border-steel-line bg-steel-deep px-3.5 py-2.5 text-xs text-white placeholder:text-steel-muted outline-none transition-colors focus:border-primary"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message to AI assistant"
              className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-opacity disabled:opacity-50"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
