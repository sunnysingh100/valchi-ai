export interface CaseStudy {
  slug: string;
  company: string;
  description: string;
  metric: string;
  logo: string;
  heroDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "transcard",
    company: "Transcard",
    description:
      "Bulgaria's first credit card company needed to handle repetitive inquiries at scale. We built a chatbot with complex menu-driven flows from their...",
    metric: "48% customer support automation",
    logo: "/transcard-logo.png",
    heroDescription:
      "Bulgaria's first credit card company needed to handle repetitive customer inquiries at scale. We built a chatbot with complex menu-driven flows from their entire knowledge base—operational for over a year and still going strong.",
    challenge:
      "As Bulgaria's first credit card company, Transcard was dealing with a massive volume of repetitive customer inquiries. Their support team was overwhelmed with the same FAQ questions being asked over and over—questions about card limits, transaction fees, account balances, and basic service information. This was eating up valuable support resources and slowing down response times for complex issues that actually needed human attention.",
    solution:
      "We built a sophisticated chatbot with complex menu-driven flows based on their entire knowledge base. The key innovation was allowing customers to get answers in just a few clicks through an intuitive menu system—no typing required for those who preferred quick navigation. We integrated the chatbot with a custom dashboard that gives Transcard full transparency into KPIs, performance metrics, and allows them to continuously update and improve the bot's responses.",
    outcome:
      "The chatbot has been operational for over a year since November 2024 and continues to deliver results. It now handles 48% of all routine FAQ inquiries automatically, saving thousands every month and freeing up hundreds of hours of support team time. The custom dashboard allows Transcard to monitor performance in real-time and make continuous improvements to keep the automation rate climbing.",
    stats: [
      {
        value: "48%",
        label: "of routine FAQ inquiries handled by AI",
      },
      {
        value: "1+ Year",
        label: "chatbot running since Nov 2024",
      },
      {
        value: "1000s",
        label: "saved every month",
      },
      {
        value: "100s",
        label: "of hours freed up monthly",
      },
    ],
  },
  {
    slug: "pulse-fitness",
    company: "Pulse Fitness",
    description:
      "Bulgaria's largest fitness chain (26 locations, 13x Fitness of the Year) needed to scale customer engagement. We're building a chatbot across web,...",
    metric: "57% reduced customer support",
    logo: "/pulse-fitness.png",
    heroDescription:
      "Bulgaria's largest fitness chain (26 locations, 13x Fitness of the Year) needed to scale customer engagement. We built a unified AI agent across their website, Instagram, and Messenger to handle memberships, bookings, and FAQs contextually.",
    challenge:
      "With 26 locations and thousands of daily active members, Pulse Fitness faced a communication bottleneck. Members were constantly reaching out via social media and the website to ask about class schedules, membership freezing, locker availability, and personal training options. The customer support team struggled to provide instantaneous responses across multiple platforms during peak hours.",
    solution:
      "We deployed a unified omnichannel conversational AI designed specifically for the fitness industry. The agent integrates seamlessly with their scheduling and membership CRM. It understands user context depending on the platform they use to reach out, offering quick action buttons for class bookings on the website, while handling natural language inquiries gracefully on Instagram and Facebook Messenger.",
    outcome:
      "The AI now effectively triages all incoming inquiries, automatically resolving 57% of Tier 1 support tickets without human intervention. Response times dropped from hours during peak times to mere seconds, significantly improving member satisfaction and allowing the human support team to focus on sales and complex member retention cases.",
    stats: [
      {
        value: "57%",
        label: "reduction in Tier 1 support tickets",
      },
      {
        value: "<2s",
        label: "average response time",
      },
      {
        value: "3",
        label: "platforms fully integrated",
      },
      {
        value: "24/7",
        label: "instant member support",
      },
    ],
  },
  {
    slug: "zarimex",
    company: "Zarimex",
    description:
      "Bulgarian hunting & firearms retailer was drowning in 100+ daily calls. We built a chatbot targeting 50% reduction—achieved 90% instead, proving channel...",
    metric: "90% call reduction",
    logo: "/zarimex.png",
    heroDescription:
      "Bulgarian hunting & firearms retailer was drowning in 100+ daily calls. We built a custom AI agent specifically designed to handle product inventory, order tracking, and regulatory questions, achieving a massive 90% reduction in support calls.",
    challenge:
      "Zarimex, a major hunting and firearms retailer, was overwhelmed with over 100 daily support calls. The majority of these calls were simple inquiries: 'Is this item in stock?', 'Where is my order?', and specific regulatory questions regarding firearms purchasing. This high volume of routine calls created a severe bottleneck, preventing staff from assisting in-store customers and processing complex online orders efficiently.",
    solution:
      "We developed and deployed a specialized AI chatbot integrated directly into their e-commerce platform. The bot was securely connected to their live inventory management system and ERP, allowing it to instantly answer stock check questions and provide real-time order tracking updates. We also trained the AI extensively on Bulgarian firearms regulations to accurately answer compliance-related FAQs.",
    outcome:
      "The results far exceeded our initial goal of a 50% call reduction. The AI assistant successfully absorbed 90% of routine inquiries, drastically plummeting the daily call volume. This allowed the Zarimex team to refocus their efforts on high-value sales, in-store customer experiences, and handling complex regulatory paperwork, significantly increasing overall operational efficiency.",
    stats: [
      {
        value: "90%",
        label: "reduction in daily support calls",
      },
      {
        value: "100+",
        label: "calls deflected daily",
      },
      {
        value: "Real-time",
        label: "inventory and order sync",
      },
      {
        value: "20x",
        label: "ROI within the first 3 months",
      },
    ],
  },
  {
    slug: "flexcost",
    company: "FlexCost",
    description:
      "US-based window quoting software company and 7+ year client. We built their entire B2C and B2B configuration platform—and this year added voice...",
    metric: "Voice-powered window configuration",
    logo: "/flex-cost.webp",
    heroDescription:
      "US-based window quoting software company and 7+ year client. After building their entire B2C and B2B visual configuration platform, we recently integrated advanced voice AI, allowing contractors to configure complex window orders completely hands-free while on job sites.",
    challenge:
      "FlexCost contractors frequently needed to input complex window measurements and specifications while actively walking job sites, holding tape measures, or climbing ladders. The mobile interface, while responsive, still required manual data entry which slowed down the quoting process and occasionally led to fat-finger errors in critical dimensions.",
    solution:
      "We leveraged advanced natural language processing to build a voice-first configuration interface. Contractors can now simply speak their measurements and specifications (e.g., 'Add a 36 by 48 double-hung vinyl window with Low-E glass to the master bedroom'). The AI interprets the complex industry jargon, automatically populates the configurator, and provides spoken confirmation of the entered details.",
    outcome:
      "The voice-powered system revolutionized the field quoting experience. On-site configuration speed increased dramatically, and data entry errors were reduced by nearly 40%. The hands-free approach has become a major selling point for FlexCost, significantly increasing adoption rates among new contractors and boosting the volume of quotes generated through the platform.",
    stats: [
      {
        value: "60%",
        label: "faster on-site quote generation",
      },
      {
        value: "100%",
        label: "hands-free operation capability",
      },
      {
        value: "40%",
        label: "reduction in data entry errors",
      },
      {
        value: "1st",
        label: "to market with voice quoting",
      },
    ],
  },
  {
    slug: "nova-translate",
    company: "Nova Translate",
    description:
      "Bulgarian translation agency (15 years, 10K+ projects, clients like Binance & Revolut) needed to scale quoting. We built a chatbot that analyzes uploaded...",
    metric: "AI-powered quoting system",
    logo: "/nova-translate.png",
    heroDescription:
      "Bulgarian translation agency (15 years, 10K+ projects) with enterprise clients needed to scale quoting. We built a custom AI agent that instantly analyzes uploaded documents, calculates word counts, and generates accurate quotes within seconds.",
    challenge:
      "Nova Translate, a leading translation agency, was bottlenecked by their manual quoting process. Project managers spent hours every day downloading client documents, manually counting words across various file formats (PDFs, Word docs, images), and applying complex pricing matrices based on language pairs and turnaround times. This delayed quote delivery and cost them potential clients who required immediate pricing.",
    solution:
      "We engineered a sophisticated AI-powered quoting integration for their website. Users can securely upload complex documents, which the system immediately processes using OCR and natural language extraction to determine the precise word count and language. The bot then instantly cross-references Nova's pricing logic to generate and deliver a formal, accurate quote to the client directly within the chat interface.",
    outcome:
      "The automated quoting system drastically slashed the turnaround time for pricing from hours to seconds. Project managers were entirely freed from the tedious task of manual counting, allowing them to focus on complex project management and enterprise client acquisition. The immediate pricing feature significantly increased conversion rates for small-to-medium project inquiries.",
    stats: [
      {
        value: "<10s",
        label: "average quote generation time",
      },
      {
        value: "100%",
        label: "automation of preliminary quoting",
      },
      {
        value: "35%",
        label: "increase in small project conversions",
      },
      {
        value: "0",
        label: "manual word counts required",
      },
    ],
  },
];
