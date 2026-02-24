// ASIC Website Content Data - Multi-language Support
// English (default) & Bahasa Melayu

export type Language = 'en' | 'ms';

export const siteContent = {
  // Brand Information (same for both languages)
  brand: {
    name: "ASIATECH SCHOOL OF INNOVATION & COMMERCIALIZATION",
    shortName: "ASIC",
  },

  // Localized Content
  content: {
    en: {
      // Hero Section
      hero: {
        emoji: "🌏",
        title: "ASIATECH SCHOOL OF INNOVATION & COMMERCIALIZATION (ASIC)",
        tagline: "Building Asia's Commercialization Talents",
        subtitle: "Malaysia's Dedicated School for Innovation, Commercialization & Talent Mobility",
        quote: "Innovation without commercialization is only an idea.",
        description: "At ASIC, we bridge the gap between research, technology, talent and market — transforming potential into real economic and social impact.",
      },

      // What We Develop
      talentTypes: [
        { emoji: "🚀", title: "Innovators" },
        { emoji: "💡", title: "Technology Founders" },
        { emoji: "🏢", title: "Intrapreneurs" },
        { emoji: "🎓", title: "Researchers" },
        { emoji: "🌏", title: "Cross-border Talents" },
      ],

      // What Makes ASIC Different
      differentiators: {
        title: "🎯 What Makes ASIC Different?",
        subtitle: "1️⃣ Structured Commercialization Pathways",
        description: "Unlike generic business training providers, ASIC focuses specifically on innovation-to-market execution.",
      },

      // Programs
      programs: {
        intro: "Our flagship programs include:",
        list: [
          {
            id: "tca",
            emoji: "🔹",
            name: "Technology Commercialization Associate (TCA)",
            slug: "tca",
            tagline: "A structured pathway for commercialization excellence",
            description: "A structured pathway designed to help innovators and ecosystem players understand:",
            learningOutcomes: [
              "Technology Readiness Levels (TRL)",
              "Market validation",
              "Funding readiness",
              "Investor communication",
              "Commercial strategy mapping",
            ],
            contactNote: "For more information or collaboration, please email to hello@asiatech.ltd.",
            category: "certification",
          },
          {
            id: "i4i",
            emoji: "🔹",
            name: "Innovation for Impact (I4I)",
            slug: "i4i",
            tagline: "Practical innovation implementation program",
            description: "A practical program that builds:",
            learningOutcomes: [
              "Innovation thinking",
              "Prototype validation",
              "Commercialization frameworks",
              "Impact measurement",
              "Ecosystem engagement",
            ],
            recognition: "Participants completing I4I (with practical output) earn recognition as Innovation Associates (IA).",
            contactNote: "For more information or collaboration, please email to hello@asiatech.ltd.",
            category: "training",
          },
          {
            id: "mobility",
            emoji: "🌏",
            name: "Mobility & Edu-Tourism Programmes",
            slug: "mobility",
            tagline: "Cross-border learning and collaboration",
            description: "ASIC goes beyond classroom learning. We design Mobility cum Edu-Tourism Programmes that bridge talents across Asian countries through:",
            activities: [
              "Innovation immersion visits",
              "Industry exposure programmes",
              "Cross-border collaboration projects",
              "University-industry engagement",
              "Cultural & ecosystem learning",
            ],
            philosophy: "We believe commercialization thrives when talents experience ecosystems beyond their own borders.",
            contactNote: "For more information or collaboration, please email to hello@asiatech.ltd.",
            category: "immersion",
          },
          {
            id: "finance-shariah",
            emoji: "🏛️",
            name: "Finance & Shariah Innovation Programmes",
            slug: "finance-shariah",
            tagline: "ASIC goes beyond technology and market strategy.",
            description: "In collaboration with Amanie Academy, we design Finance & Shariah Innovation Programmes that strengthen ethical financing, governance, and sustainable commercialization across industries.",
            learningOutcomes: [
              "Islamic finance & Shariah governance training",
              "Value-based intermediation frameworks",
              "Shariah-compliant commercialization pathways",
              "Halal industry structuring & advisory",
              "Social finance & impact-driven funding models",
              "Leadership programmes for emerging finance professionals",
            ],
            philosophy: "We believe innovation thrives when it is supported by strong governance, ethical financing, and sustainable value creation.",
            contactNote: "For more information or collaboration, please email to hello@asiatech.ltd.",
            category: "finance",
          },
        ] as Program[],
      },

      // Readiness Assessment
      readinessAssessment: {
        title: "🧪 Readiness Assessment Ecosystem",
        intro: "Being part of the ASIC Community means more than attending training. We provide structured Readiness Assessments including:",
        categories: [
          {
            emoji: "🔬",
            title: "Technology / Prototype Readiness",
            assessments: [
              "TRL mapping",
              "Commercial feasibility screening",
              "Market-fit evaluation",
              "Ecosystem alignment assessment",
            ],
          },
          {
            emoji: "👩‍💼",
            title: "Career & Talent Development Readiness",
            assessments: [
              "Commercialization role suitability",
              "Innovation leadership assessment",
              "Industry readiness mapping",
              "Strategic growth pathway guidance",
            ],
          },
        ],
        conclusion: "These assessments help participants move forward with clarity — not confusion.",
      },

      // Community Advantage
      community: {
        title: "🤝 The ASIC Community Advantage",
        intro: "When you join ASIC, you gain access to:",
        benefits: [
          "Commercialization advisory support",
          "Ecosystem networking",
          "Practical implementation guidance",
          "Cross-sector collaboration opportunities",
          "Structured commercialization clinics",
          "Funding preparation support",
        ],
        tagline: "We are building more than programs.\nWe are building a Commercialization Community.",
      },

      // Vision
      vision: {
        emoji: "🌟",
        title: "Our Vision",
        statement: "To develop Asia-level commercialization talents who transform innovation into measurable economic and societal impact.",
      },

      // Target Audience
      targetAudience: {
        title: "🎓 Who Should Join ASIC?",
        audiences: [
          "Researchers & Academics",
          "Tech Founders",
          "Startups",
          "Corporate Intrapreneurs",
          "Government-linked innovation teams",
          "Talent development institutions",
          "Universities seeking commercialization pathways",
        ],
      },

      // Advisors
      advisors: {
        title: "Advisors from Academia, Industries & Government Agencies",
        description: "Our advisors bring expertise from diverse fields to support your commercialization journey.",
      },

      // Navigation
      navigation: {
        main: [
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "Readiness", href: "/readiness" },
          { label: "Community", href: "/community" },
          { label: "Advisors", href: "/advisors" },
          { label: "Contact", href: "/contact" },
        ],
      },

      // CTAs
      ctas: {
        primary: "Join ASIC Community",
        secondary: "Explore Programs",
        contact: "Get in Touch",
        assessment: "Take Readiness Assessment",
        learnMore: "Learn More",
      },

      // Features
      features: [
        {
          id: 1,
          emoji: "🎯",
          title: "Structured Commercialization Pathways",
          description: "Unlike generic business training providers, ASIC focuses specifically on innovation-to-market execution through TCA and I4I programs.",
          highlights: ["TCA Certification", "I4I Recognition", "Practical Frameworks"],
        },
        {
          id: 2,
          emoji: "🌏",
          title: "Mobility & Edu-Tourism",
          description: "Go beyond classroom learning with immersion programs that bridge talents across Asian countries.",
          highlights: ["Cross-border Learning", "Industry Exposure", "Cultural Exchange"],
        },
        {
          id: 3,
          emoji: "🧪",
          title: "Readiness Assessment Ecosystem",
          description: "Structured assessments for technology readiness and career development to move forward with clarity.",
          highlights: ["TRL Mapping", "Career Guidance", "Market-Fit Evaluation"],
        },
      ],

      // SEO
      seo: {
        defaultTitle: "ASIC - Asia's Innovation Commercialization School | Malaysia",
        defaultDescription: "ASIATECH SCHOOL OF INNOVATION & COMMERCIALIZATION (ASIC) - Building Asia's commercialization talents through TCA, I4I programs, and cross-border mobility.",
      },
    },

    ms: {
      // Hero Section
      hero: {
        emoji: "🌏",
        title: "ASIATECH SCHOOL OF INNOVATION & COMMERCIALIZATION (ASIC)",
        tagline: "Membina Bakat Pengkomersilan Asia",
        subtitle: "Sekolah Khusus Malaysia untuk Inovasi, Pengkomersilan & Mobiliti Bakat",
        quote: "Inovasi tanpa pengkomersilan hanyalah sekadar idea.",
        description: "Di ASIC, kami merapatkan jurang antara penyelidikan, teknologi, bakat dan pasaran — mengubah potensi kepada impak ekonomi dan sosial yang nyata.",
      },

      // What We Develop
      talentTypes: [
        { emoji: "🚀", title: "Inovator" },
        { emoji: "💡", title: "Pengasas Teknologi" },
        { emoji: "🏢", title: "Intrapreneur" },
        { emoji: "🎓", title: "Penyelidik" },
        { emoji: "🌏", title: "Bakat Rentas Sempadan" },
      ],

      // What Makes ASIC Different
      differentiators: {
        title: "🎯 Apa Yang Membezakan ASIC?",
        subtitle: "1️⃣ Laluan Pengkomersilan Berstruktur",
        description: "Tidak seperti penyedia latihan perniagaan generik, ASIC memberi tumpuan khusus kepada pelaksanaan inovasi-ke-pasaran.",
      },

      // Programs
      programs: {
        intro: "Program utama kami termasuk:",
        list: [
          {
            id: "tca",
            emoji: "🔹",
            name: "Technology Commercialization Associate (TCA)",
            slug: "tca",
            tagline: "Laluan berstruktur untuk kecemerlangan pengkomersilan",
            description: "Laluan berstruktur yang direka untuk membantu inovator dan pemain ekosistem memahami:",
            learningOutcomes: [
              "Tahap Kesediaan Teknologi (TRL)",
              "Pengesahan pasaran",
              "Kesediaan pembiayaan",
              "Komunikasi pelabur",
              "Pemetaan strategi komersial",
            ],
            contactNote: "Untuk maklumat lanjut atau kerjasama, sila emel ke hello@asiatech.ltd.",
            category: "certification",
          },
          {
            id: "i4i",
            emoji: "🔹",
            name: "Innovation for Impact (I4I)",
            slug: "i4i",
            tagline: "Program pelaksanaan inovasi praktikal",
            description: "Program praktikal yang membina:",
            learningOutcomes: [
              "Pemikiran inovasi",
              "Pengesahan prototaip",
              "Rangka kerja pengkomersilan",
              "Pengukuran impak",
              "Penglibatan ekosistem",
            ],
            recognition: "Peserta yang melengkapkan I4I (dengan output praktikal) mendapat pengiktirafan sebagai Innovation Associates.",
            contactNote: "Untuk maklumat lanjut atau kerjasama, sila emel ke hello@asiatech.ltd.",
            category: "training",
          },
          {
            id: "mobility",
            emoji: "🌏",
            name: "Program Mobiliti & Edu-Pelancongan",
            slug: "mobility",
            tagline: "Pembelajaran dan kerjasama rentas sempadan",
            description: "ASIC melampaui pembelajaran bilik darjah. Kami mereka Program Mobiliti cum Edu-Pelancongan yang menghubungkan bakat merentasi negara Asia melalui:",
            activities: [
              "Lawatan pendalaman inovasi",
              "Program pendedahan industri",
              "Projek kerjasama rentas sempadan",
              "Penglibatan universiti-industri",
              "Pembelajaran budaya & ekosistem",
            ],
            philosophy: "Kami percaya pengkomersilan berkembang apabila bakat mengalami ekosistem di luar sempadan mereka sendiri.",
            contactNote: "Untuk maklumat lanjut atau kerjasama, sila emel ke hello@asiatech.ltd.",
            category: "immersion",
          },
          {
            id: "finance-shariah",
            emoji: "🏛️",
            name: "Program Inovasi Kewangan & Syariah",
            slug: "finance-shariah",
            tagline: "ASIC melampaui teknologi dan strategi pasaran.",
            description: "Dengan kerjasama Amanie Academy, kami mereka Program Inovasi Kewangan & Syariah yang mengukuhkan pembiayaan beretika, tadbir urus, dan pengkomersilan mampan merentas industri.",
            learningOutcomes: [
              "Latihan kewangan Islam & tadbir urus Syariah",
              "Rangka kerja pengantaraan berasaskan nilai",
              "Laluan pengkomersilan patuh Syariah",
              "Penstrukturan & nasihat industri halal",
              "Model pembiayaan kewangan sosial & berimpak",
              "Program kepimpinan untuk profesional kewangan baharu",
            ],
            philosophy: "Kami percaya inovasi berkembang apabila disokong oleh tadbir urus yang kukuh, pembiayaan beretika, dan penciptaan nilai mampan.",
            contactNote: "Untuk maklumat lanjut atau kerjasama, sila emel ke hello@asiatech.ltd.",
            category: "finance",
          },
        ] as Program[],
      },

      // Readiness Assessment
      readinessAssessment: {
        title: "🧪 Ekosistem Penilaian Kesediaan",
        intro: "Menjadi sebahagian daripada Komuniti ASIC bermakna lebih daripada menghadiri latihan. Kami menyediakan Penilaian Kesediaan berstruktur termasuk:",
        categories: [
          {
            emoji: "🔬",
            title: "Kesediaan Teknologi / Prototaip",
            assessments: [
              "Pemetaan TRL",
              "Saringan kebolehlaksanaan komersial",
              "Penilaian kesesuaian pasaran",
              "Penilaian penjajaran ekosistem",
            ],
          },
          {
            emoji: "👩‍💼",
            title: "Kesediaan Kerjaya & Pembangunan Bakat",
            assessments: [
              "Kesesuaian peranan pengkomersilan",
              "Penilaian kepimpinan inovasi",
              "Pemetaan kesediaan industri",
              "Panduan laluan pertumbuhan strategik",
            ],
          },
        ],
        conclusion: "Penilaian ini membantu peserta bergerak ke hadapan dengan kejelasan — bukan kekeliruan.",
      },

      // Community Advantage
      community: {
        title: "🤝 Kelebihan Komuniti ASIC",
        intro: "Apabila anda menyertai ASIC, anda mendapat akses kepada:",
        benefits: [
          "Sokongan nasihat pengkomersilan",
          "Rangkaian ekosistem",
          "Panduan pelaksanaan praktikal",
          "Peluang kerjasama merentas sektor",
          "Klinik pengkomersilan berstruktur",
          "Sokongan persediaan pembiayaan",
        ],
        tagline: "Kami membina lebih daripada program.\nKami membina Komuniti Pengkomersilan.",
      },

      // Vision
      vision: {
        emoji: "🌟",
        title: "Visi Kami",
        statement: "Untuk membangunkan bakat pengkomersilan peringkat Asia yang mengubah inovasi kepada impak ekonomi dan masyarakat yang boleh diukur.",
      },

      // Target Audience
      targetAudience: {
        title: "🎓 Siapa Patut Sertai ASIC?",
        audiences: [
          "Penyelidik & Akademik",
          "Pengasas Teknologi",
          "Syarikat Permulaan",
          "Intrapreneur Korporat",
          "Pasukan inovasi berkaitan kerajaan",
          "Institusi pembangunan bakat",
          "Universiti yang mencari laluan pengkomersilan",
        ],
      },

      // Advisors
      advisors: {
        title: "Penasihat dari Akademia, Industri & Agensi Kerajaan",
        description: "Penasihat kami membawa kepakaran dari pelbagai bidang untuk menyokong perjalanan pengkomersilan anda.",
      },

      // Navigation
      navigation: {
        main: [
          { label: "Utama", href: "/" },
          { label: "Program", href: "/programs" },
          { label: "Kesediaan", href: "/readiness" },
          { label: "Komuniti", href: "/community" },
          { label: "Penasihat", href: "/advisors" },
          { label: "Hubungi", href: "/contact" },
        ],
      },

      // CTAs
      ctas: {
        primary: "Sertai Komuniti ASIC",
        secondary: "Terokai Program",
        contact: "Hubungi Kami",
        assessment: "Ambil Penilaian Kesediaan",
        learnMore: "Ketahui Lebih Lanjut",
      },

      // Features
      features: [
        {
          id: 1,
          emoji: "🎯",
          title: "Laluan Pengkomersilan Berstruktur",
          description: "Tidak seperti penyedia latihan perniagaan generik, ASIC memberi tumpuan khusus kepada pelaksanaan inovasi-ke-pasaran melalui program TCA dan I4I.",
          highlights: ["Pensijilan TCA", "Pengiktirafan I4I", "Rangka Kerja Praktikal"],
        },
        {
          id: 2,
          emoji: "🌏",
          title: "Mobiliti & Edu-Pelancongan",
          description: "Melampaui pembelajaran bilik darjah dengan program pendalaman yang menghubungkan bakat merentasi negara Asia.",
          highlights: ["Pembelajaran Rentas Sempadan", "Pendedahan Industri", "Pertukaran Budaya"],
        },
        {
          id: 3,
          emoji: "🧪",
          title: "Ekosistem Penilaian Kesediaan",
          description: "Penilaian berstruktur untuk kesediaan teknologi dan pembangunan kerjaya untuk bergerak ke hadapan dengan kejelasan.",
          highlights: ["Pemetaan TRL", "Panduan Kerjaya", "Penilaian Kesesuaian Pasaran"],
        },
      ],

      // SEO
      seo: {
        defaultTitle: "ASIC - Sekolah Pengkomersilan Inovasi Asia | Malaysia",
        defaultDescription: "ASIATECH SCHOOL OF INNOVATION & COMMERCIALIZATION (ASIC) - Membina bakat pengkomersilan Asia melalui program TCA, I4I, dan mobiliti rentas sempadan.",
      },
    },
  },

  // Contact Information (same for both languages)
  contact: {
    email: "hello@asiatech.ltd",
    phone: "+60 19-310 6657",
    address: {
      street: "Address Line 1",
      city: "Kuala Lumpur",
      state: "Federal Territory",
      postcode: "XXXXX",
      country: "Malaysia",
    },
    socialMedia: {
      facebook: "https://www.facebook.com/asiatecheducation",
      instagram: "https://instagram.com/asic_malaysia",
      twitter: "https://twitter.com/asic_malaysia",
    },
  },
};

// Helper function to get content by language
export function getContent(lang: Language = 'en') {
  return siteContent.content[lang];
}

// TypeScript Interfaces
export interface Program {
  id: string;
  emoji: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  learningOutcomes?: string[];
  activities?: string[];
  recognition?: string;
  philosophy?: string;
  contactNote?: string;
  category: string;
}

export default siteContent;
