export const personal = {
  name:     "Mohamed Ashfak",
  title:    "Backend Engineer & Gen AI Developer",
  tagline:  "Building scalable backend systems, AI automation platforms, intelligent APIs, and real-time applications.",
  email:    "ashfakmohamed66@gmail.com",
  phone:    "+91 8525883729",
  location: "Chennai, Tamil Nadu",
  linkedin: "https://linkedin.com/in/mohamed-ashfak/",
  github:   "",
};

export const stats = [
  { label:"Years Experience",       value:3,    suffix:"+" },
  { label:"AI Agents Delivered",    value:8,    suffix:"" },
  { label:"Records Automated Daily",value:1500, suffix:"+" },
  { label:"REST APIs Built",        value:20,   suffix:"+" },
];

export const expertiseGroups = [
  {
    title:"Core Backend",
    description:"Backend architecture, API design, data access, and service development.",
    items:["Python","Django","Django REST Framework","REST APIs","FastAPI","Flask","PostgreSQL","MySQL","Django ORM"],
  },
  {
    title:"AI & Automation",
    description:"LLM applications, retrieval systems, intelligent workflows, and document automation.",
    items:["Gemini LLM","LangChain","ChromaDB","RAG Pipelines","Prompt Engineering","Selenium","Pandas","Tesseract OCR","OpenPyXL"],
  },
  {
    title:"Product Delivery",
    description:"Frontend delivery, cloud infrastructure, testing, deployment, and engineering tools.",
    items:["React.js","JavaScript","HTML/CSS","Tailwind","Bootstrap","AWS","AWS S3","Docker","CI/CD","Git/GitHub","Pytest","Postman","JIRA","VS Code"],
  },
];

export const experiences = [
  {
    role:"Software Engineer", company:"Droidal", location:"Chennai, India",
    period:"Aug 2024 – Present", badge:"Current",
    summary:"Architecting AI-powered backend systems, real-time voice agent platforms, and large-scale enterprise automation workflows for healthcare and HR clients.",
    achievements:[
      "Engineered multi-turn conversational flows using Gemini LLM with structured prompt chaining for intent classification and entity extraction",
      "Implemented RAG pipeline using ChromaDB & LangChain enabling context-aware grounded LLM responses across enterprise knowledge bases",
      "Built scalable real-time voice agent platform using LiveKit + Twilio for inbound/outbound enterprise call handling",
      "Delivered 8 AI automation agents processing 1,500+ records daily with near-zero failure rate",
      "Recognized as Employee of the Month for excellence in AI automation delivery",
      "Containerized backend services with Docker; streamlined deployments via CI/CD pipelines",
    ],
    stack:["Python","Django","PostgreSQL","AWS","LiveKit","Twilio","Gemini LLM","LangChain","ChromaDB","Docker","Pytest"],
  },
  {
    role:"Software Developer", company:"ICTES", location:"Chennai, India",
    period:"Jan 2023 – Jul 2024", badge:"Previous",
    summary:"Developed full-stack web applications, 10+ REST APIs, and ML-driven procurement analytics dashboards for enterprise clients.",
    achievements:[
      "Built and maintained 10+ secure REST APIs using Django REST Framework with JWT authentication",
      "Developed Predictive Supplier Management System with ML-based supplier risk scoring",
      "Integrated React.js dashboards delivering real-time supplier analytics and KPI visualization",
      "Optimized complex MySQL queries using joins, subqueries, and window functions reducing load time by 40%",
      "Participated in Agile/Scrum ceremonies including sprint planning, retrospectives, and code reviews",
    ],
    stack:["Python","Django","MySQL","React.js","Pandas","NumPy","DRF","Git","Postman"],
  },
];

export const projects = [
  {
    title:"AI Voice Agent Platform",
    category:"Gen AI",
    desc:"Real-time AI-powered voice agent system handling enterprise inbound/outbound calls with multi-turn NLU, RAG-powered knowledge retrieval, and automated decision routing.",
    impact:"Sub-second LLM response latency for live enterprise call sessions at scale.",
    architecture:"Django · LiveKit · Twilio SIP · ChromaDB · Gemini LLM · AWS S3",
    stack:["Python","Django","PostgreSQL","Gemini LLM","LiveKit","Twilio","LangChain","ChromaDB","AWS S3","Pytest"],
    features:[
      "Multi-turn AI with intent classification, slot filling & entity extraction",
      "RAG pipeline with ChromaDB for grounded knowledge base responses",
      "SIP routing, TwiML telephony & phone number provisioning",
      "Call analytics dashboard with filtering, pagination & aggregation",
      "Presigned S3 URLs for secure recording & transcript access",
    ],
  },
  {
    title:"Upstream Data Processing System",
    category:"Backend",
    desc:"High-volume backend pipeline with intelligent document automation, PDF invoice generation, parsing, and real-time Plotly analytics dashboards.",
    impact:"Processes thousands of business records daily with fully automated reporting.",
    architecture:"Django · PostgreSQL · Docker · CI/CD · React.js · Plotly",
    stack:["Python","Django","PostgreSQL","Pandas","PyPDF2","pdfkit","Docker","CI/CD","React.js"],
    features:[
      "JSON/XML parsing and transformation for structured business data",
      "Optimized ORM with complex joins, subqueries & window functions",
      "Background task scheduling with custom Django management commands",
      "PDF invoice generation & parsing with pdfkit & PyPDF2",
      "Office365 automated email notification workflows",
    ],
  },
  {
    title:"AI Automation – Healthcare & HR",
    category:"Automation",
    desc:"Enterprise automation agents for healthcare insurance claims and HR offer verification with MFA handling, OCR, and structured exception escalation.",
    impact:"1,500+ records automated daily across 8 agents — earned Employee of the Month.",
    architecture:"Python agents · Selenium · Tesseract OCR · OpenPyXL · Cron",
    stack:["Python","Selenium","Pandas","OpenPyXL","Tesseract OCR","Outlook Automation","REST APIs","Cron"],
    features:[
      "MFA-based portal automation for secure healthcare systems",
      "Medical insurance claim processing with validation & branching logic",
      "HR offer verification with conditional agent decision trees",
      "Excel data extraction, validation & automated sheet updates",
      "Exception escalation with structured reasoning and discrete logging",
    ],
  },
  {
    title:"Predictive Supplier Management",
    category:"Full Stack",
    desc:"ML-powered web application assessing supplier risk, optimizing procurement workflows, and delivering real-time analytics via React.js dashboards.",
    impact:"Enables proactive supply chain risk identification before issues escalate.",
    architecture:"Django REST · MySQL · React.js · Pandas/NumPy · Plotly",
    stack:["Python","Django","MySQL","React.js","Pandas","NumPy","DRF","Postman","Git"],
    features:[
      "ML-based supplier risk scoring with forecasting engine",
      "Procurement workflow optimization and automation pipelines",
      "Real-time React.js dashboards with live supplier KPI metrics",
      "Forecasting with Pandas & NumPy data processing pipelines",
      "Optimized MySQL schema for large supplier datasets",
    ],
  },
];

export const achievements = [
  { title:"Employee of the Month",  company:"Droidal · 2025",      highlight:true,
    desc:"Recognized for excellence in delivering enterprise healthcare and HR automation systems." },
  { title:"8 AI Agents Delivered",   company:"Droidal · 2024–2025", highlight:false,
    desc:"Engineered 8 production AI automation agents processing 1,500+ records daily with zero critical failures." },
  { title:"AI Voice Agent Platform", company:"Droidal · 2025",      highlight:false,
    desc:"Led backend of a real-time voice agent system using Gemini LLM, LiveKit, Twilio & RAG pipelines." },
  { title:"B.Tech – IT",             company:"Noorul Islam Centre For Higher Education · 2023", highlight:false,
    desc:"Graduated with 7.64 CGPA from Noorul Islam Centre For Higher Education, Kanyakumari." },
];

export const navLinks = [
  { label:"About",        href:"#about" },
  { label:"Work",         href:"#projects" },
  { label:"Experience",   href:"#experience" },
  { label:"Expertise",    href:"#skills" },
  { label:"Recognition",  href:"#achievements" },
  { label:"Contact",      href:"#contact" },
];
