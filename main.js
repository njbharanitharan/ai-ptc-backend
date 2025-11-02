// 🌿 Initialize mock database
const mockData = {
  protocols: {
    aloeVera: {
      name: "Aloe Vera",
      protocol: [
        "Select healthy, mature Aloe vera leaves or shoot tips as explants",
        "Wash thoroughly under running tap water for 20 minutes",
        "Add 2–3 drops of Tween-20 and soak explants for 20 minutes",
        "Rinse with sterile distilled water (3–4 times)",
        "Immerse in 70% ethanol for 30 seconds",
        "Treat with 0.1% HgCl2 solution for 5–10 minutes",
        "Rinse 3–5 times with sterile distilled water",
        "Place explants on MS medium supplemented with 2 mg/L BAP and 0.5 mg/L NAA",
        "Maintain cultures at 25°C with 16 hours photoperiod",
        "Transfer regenerated shoots to MS medium with 0.5 mg/L IBA for rooting",
        "Harden plantlets in cocopeat and soil mixture for 2–3 weeks before field transfer"
      ],
      references: [
        "Murashige, T. & Skoog, F. (1962). A revised medium for rapid growth and bio assays with tobacco tissue cultures.",
        "Roy, S.C. & Sarkar, A. (1991). In vitro regeneration and micropropagation of Aloe barbadensis Mill.",
        "Hashem, A., et al. (2019). Plant tissue culture and its agricultural applications."
      ],
      images: [
        { url: "https://via.placeholder.com/200/32CD32/FFFFFF?text=Aloe+Vera", caption: "Aloe Vera Plant" },
        { url: "https://via.placeholder.com/200/90EE90/FFFFFF?text=Shoot+Culture", caption: "Shoot Multiplication" },
        { url: "https://via.placeholder.com/200/00FA9A/FFFFFF?text=Rooting", caption: "Root Induction" }
      ]
    },

    tomato: {
      name: "Tomato",
      protocol: [
        "Wash fruits with running tap water for 10 minutes",
        "Soak in 70% ethanol for 1 minute",
        "Dip in 0.1% HgCl2 solution for 8-10 minutes",
        "Rinse 3–4 times with sterile distilled water",
        "Dry on sterile filter paper",
        "Excise seeds and culture on MS medium with 2 mg/L BAP + 0.5 mg/L NAA",
        "Incubate at 25°C under 16 hours photoperiod",
        "Subculture every 4 weeks on fresh medium",
        "Transfer regenerated shoots to MS medium with 1 mg/L IBA for rooting",
        "Acclimatize plantlets in greenhouse for 2-3 weeks before transplanting to soil"
      ],
      references: [
        "Murashige, T. & Skoog, F. (1962). Physiologia Plantarum, 15(3), 473-497.",
        "Carputo, D. et al. (1997). Plant Cell Culture Protocols, Humana Press.",
        "Franklin, G. et al. (2004). Plant biotechnology for crop improvement."
      ],
      images: [
        { url: "https://via.placeholder.com/200/FF6B6B/FFFFFF?text=Tomato+Plant", caption: "Tomato Plant" },
        { url: "https://via.placeholder.com/200/FFA500/FFFFFF?text=Tissue+Culture", caption: "In Vitro Callus" },
        { url: "https://via.placeholder.com/200/FFD700/FFFFFF?text=Regeneration", caption: "Shoot Regeneration" }
      ]
    },

    rose: {
      name: "Rose",
      protocol: [
        "Collect young leaves from healthy rose plants",
        "Wash with tap water and 1% soap solution",
        "Sterilize with 70% ethanol for 2 minutes",
        "Immerse in 0.5% NaOCl for 15-20 minutes",
        "Rinse thoroughly 5 times with sterile distilled water",
        "Culture leaf explants on MS medium with 5 mg/L BAP and 1 mg/L IAA",
        "Maintain at 25°C under 16/8 light cycle",
        "Transfer regenerated shoots to MS medium with 0.5 mg/L IBA",
        "Root formation within 4-5 weeks",
        "Harden plants before field transfer"
      ],
      references: [
        "Rout, G.R. et al. (2000). In vitro micropropagation of ornamental plants.",
        "Mhaskar, D. & Gill, R. (1998). Micropropagation of rose.",
        "Góralski, G. et al. (2005). Tissue culture of ornamental plants."
      ],
      images: [
        { url: "https://via.placeholder.com/200/FF69B4/FFFFFF?text=Rose+Flower", caption: "Rose Flower" },
        { url: "https://via.placeholder.com/200/FFB6C1/FFFFFF?text=Leaf+Explant", caption: "Leaf Explant" },
        { url: "https://via.placeholder.com/200/FFC0CB/FFFFFF?text=Micropropagation", caption: "Regenerated Plantlets" }
      ]
    },

    orchid: {
      name: "Orchid",
      protocol: [
        "Obtain seeds from mature orchid capsules",
        "Surface sterilize with 0.5% NaOCl for 10 minutes",
        "Rinse with sterile water 6 times",
        "Inoculate on Knudson C or Vacin & Went medium",
        "Germination within 2–3 weeks",
        "Transfer seedlings to MS medium with 2 mg/L NAA and 1 mg/L BAP",
        "Provide 16h light at 25°C",
        "Subculture every 6–8 weeks",
        "Harden plants in humid chamber for 1–2 months before potting"
      ],
      references: [
        "Knudson, L. (1950). Germination of orchid seeds.",
        "Vacin, E.F. & Went, F.W. (1949). Some pH changes in nutrient solutions.",
        "Yam, T.W. & Ernest, J.K. (1999). Biotechnology of orchids."
      ],
      images: [
        { url: "https://via.placeholder.com/200/9370DB/FFFFFF?text=Orchid+Flower", caption: "Orchid Flower" },
        { url: "https://via.placeholder.com/200/BA55D3/FFFFFF?text=Seed+Germination", caption: "Seed Germination" },
        { url: "https://via.placeholder.com/200/DDA0DD/FFFFFF?text=Seedling", caption: "Orchid Seedling" }
      ]
    }
  },

  contaminationProtocols: {
    aloeVera: {
      revisedSteps: [
        "Replace HgCl2 with 2% sodium hypochlorite for 15 minutes",
        "Increase rinse cycles to 6 times",
        "Add 100 mg/L streptomycin in culture medium",
        "Add 0.1% bavistin for fungal prevention",
        "Maintain strict aseptic laminar flow work"
      ],
      tips: "Avoid prolonged exposure to HgCl2 to prevent tissue browning."
    },
    tomato: {
      revisedSteps: [
        "Use 2% NaOCl instead of 0.1% HgCl2",
        "Extend sterilization to 20 minutes",
        "Add 250 mg/L cephalexin in culture medium",
        "Add 0.5% carbendazim for fungal control",
        "Autoclave all instruments at 121°C for 20 minutes"
      ],
      tips: "If contamination persists, reduce seed surface area or add antifungal supplements."
    },
    rose: {
      revisedSteps: [
        "Increase NaOCl to 1% for 20 minutes",
        "Add 70% ethanol dip for 1 minute after NaOCl",
        "Add 500 mg/L cefotaxime in first subculture",
        "Use Bavistin (0.1%) for fungal control",
        "Lower temperature to 22°C during early culture"
      ],
      tips: "Rose explants often carry fungal spores — clean tools after every batch."
    },
    orchid: {
      revisedSteps: [
        "Use 1% NaOCl for 15 minutes with gentle shaking",
        "Add 70% isopropanol dip for 3 minutes before NaOCl",
        "Add streptomycin (100 mg/L) for bacterial control",
        "Use Tween 80 (0.1%) as surfactant",
        "Add 0.5% activated charcoal in medium to reduce toxicity"
      ],
      tips: "Avoid over-sterilization — orchid seeds are delicate and can lose viability."
    }
  }
};

