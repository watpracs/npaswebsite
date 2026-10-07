export interface Exhibition {
  id: string;
  title: string;
  year: number;
  type: "National" | "International";
  status: "Upcoming" | "Active" | "Completed";
  resultsStatus: "Results Published" | "Awaiting Results" | "Entries Open";
  description: string;
  coverImage?: string;
  guidelinesEnglishPdf?: string;
  guidelinesSinhalaPdf?: string;
  entryLink?: string;
  cataloguePdf?: string;
  resultsPdf?: string;
  featuredWinners?: {
    award: string;
    photographer: string;
    country: string;
    title: string;
    image: string;
  }[];
}

export const exhibitionsData: Exhibition[] = [
  {
    id: "46th-national-2026",
    title: "46th NPAS National Exhibition of Photography 2026",
    year: 2026,
    type: "National",
    status: "Completed",
    resultsStatus: "Results Published",
    description: "The 46th Annual National Photographic Art Competition & Exhibition organized by the National Photographic Art Society of Sri Lanka. Official judging completed and final results released.",
    coverImage: "/assets/images/exhibitions/Exhibition-Poster-1-1280X956.jpg",
    guidelinesEnglishPdf: "/assets/docs/exhibitions/46th_NPAS_Competition_Exhibition_2026_Guidelines_English.pdf",
    guidelinesSinhalaPdf: "/assets/docs/exhibitions/46th_NPAS_Competition_Exhibition_2026_Guidelines_Sinhala.pdf",
    resultsPdf: "/assets/docs/exhibitions/NPAS-45th-National-Exhibition-2024-Results.pdf",
    cataloguePdf: "/assets/docs/exhibitions/CATALOGUE-NPAS-45TH-NATIONAL-EXHIBITION-OF-PHOTOGRAPHY-2024.pdf",
    featuredWinners: [
      {
        award: "FIAP Silver Medal",
        photographer: "Dr. Wasiri Gajaman",
        country: "Sri Lanka",
        title: "Battle",
        image: "/assets/images/exhibitions/FIAP-Silver-Medal-WASIRI-GAJAMAN-Sri-Lanka-BATTLE-1-scaled.jpg"
      },
      {
        award: "NPAS Silver Medal",
        photographer: "Pandula Bandara",
        country: "Sri Lanka",
        title: "Check Mate",
        image: "/assets/images/exhibitions/NPAS-Silver-Medal-Pandula-Bandara-Sri-Lanka-Check-Mate-1-scaled.jpg"
      },
      {
        award: "FIAP Blue Ribbon",
        photographer: "Jure Kravanja",
        country: "Slovenia",
        title: "Steps",
        image: "/assets/images/exhibitions/FIAP-Blue-Ribbon-Jure-Kravanja-Slovenia-Steps-scaled.jpg"
      }
    ]
  },
  {
    id: "21st-international-2025",
    title: "21st International Exhibition of Photography 2025",
    year: 2025,
    type: "International",
    status: "Completed",
    resultsStatus: "Results Published",
    description: "FIAP Patronage 2025 International Salon organized by NPAS Sri Lanka with worldwide photographic submissions. Catalog and results published.",
    coverImage: "/assets/images/exhibitions/21-exhibition-psd-copy.jpg",
    guidelinesEnglishPdf: "/assets/docs/exhibitions/Entry-Conditions-21st-International-Exhibition-of-Photography-2025-.pdf",
    cataloguePdf: "/assets/docs/exhibitions/21st-International-Exhibition-of-Photography-2025-Catalog-.pdf",
    resultsPdf: "/assets/docs/exhibitions/NPAS-21st-Intl-Exhibition-Results.pdf",
    featuredWinners: [
      {
        award: "NPAS Gold Medal",
        photographer: "Erdem Arif Yigit",
        country: "Türkiye",
        title: "Gokhan Usta",
        image: "/assets/images/exhibitions/NPAS-Gold-Medal-Erdem-Arif-Yigit-Turkiye-gokhan_usta_2742-1-scaled.jpg"
      },
      {
        award: "NPAS Gold Medal",
        photographer: "Elmas Cumcu",
        country: "Türkiye",
        title: "Isolation",
        image: "/assets/images/exhibitions/NPAS-Gold-Medal-elmas-Cumcu-Turkiye-isolation-1-scaled.jpg"
      },
      {
        award: "NPAS Bronze Medal",
        photographer: "Petros Zervos",
        country: "Greece",
        title: "Bodyscape",
        image: "/assets/images/exhibitions/NPAS-Bronze-Medal-PETROS-ZERVOS-Greece-BODYSCAPE-1-scaled.jpg"
      },
      {
        award: "NPAS Ribbon",
        photographer: "Rowshan Akhter",
        country: "USA",
        title: "Subah-E-Benaras",
        image: "/assets/images/exhibitions/NPAS-Ribbon-Rowshan-Akhter-USA-Subah-E-Benaras-6454-1-scaled.jpg"
      }
    ]
  },
  {
    id: "45th-national-2024",
    title: "45th NPAS National Exhibition of Photography 2024",
    year: 2024,
    type: "National",
    status: "Completed",
    resultsStatus: "Results Published",
    description: "The 45th National Photographic Art Exhibition celebrating excellence in Sri Lankan photography.",
    coverImage: "/assets/images/exhibitions/Catalogue-Download-Poster-1024x765.jpg",
    cataloguePdf: "/assets/docs/exhibitions/CATALOGUE-NPAS-45TH-NATIONAL-EXHIBITION-OF-PHOTOGRAPHY-2024.pdf",
    resultsPdf: "/assets/docs/exhibitions/NPAS-45th-National-Exhibition-2024-Results.pdf"
  }
];
