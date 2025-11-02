// Initialize data with mock protocols
const mockData = {
    protocols: {
        // Mock data for initialization
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
        "Murashige, T. & Skoog, F. (1962)...",
        "Roy, S.C. & Sarkar, A. (1991)...",
        "Hashem, A., et al. (2019)..."
      ],
      images: [
        { url: "https://via.placeholder.com/200/32CD32/FFFFFF?text=Aloe+Vera", caption: "Aloe Vera Plant" },
        { url: "https://via.placeholder.com/200/90EE90/FFFFFF?text=Shoot+Culture", caption: "Shoot Multiplication" },
        { url: "https://via.placeholder.com/200/00FA9A/FFFFFF?text=Rooting", caption: "Root Induction" }
      ]
    }
  },
  contaminationProtocols: {
    aloeVera: {
      revisedSteps: [
        "Replace HgCl2 with 2% sodium hypochlorite...",
        "Increase exposure time to 20 minutes...",
        "Use 100 mg/L streptomycin...",
        "Add 0.1% bavistin...",
        "Work strictly in laminar flow..."
      ],
      tips: "Avoid prolonged exposure to HgCl2..."
    }
  }
};

        tomato: {
            name: "Tomato",
            protocol: [
                "Surface sterilization: Wash fruits with running water for 10 minutes",
                "Soak in 70% ethanol for 1 minute",
                "Dip in 0.1% HgCl2 solution for 8-10 minutes",
                "Rinse with sterile distilled water (3-4 times)",
                "Dry on sterile filter paper",
                "Excise seeds and culture on MS medium supplemented with 2 mg/L BAP and 0.5 mg/L NAA",
                "Incubate at 25°C under 16 hours photoperiod",
                "Subculture every 4 weeks on fresh medium",
                "Transfer regenerated shoots to MS medium with 1 mg/L IBA for root induction",
                "Acclimatize plantlets in greenhouse for 2-3 weeks before transplanting to soil"
            ],
            references: [
                "Murashige, T. & Skoog, F. (1962). A revised medium for rapid growth and bio assays with tobacco tissue cultures. Physiologia Plantarum, 15(3), 473-497.",
                "Carputo, D., Frusciante, L., & Parisi, B. (1997). Plant tissue culture of tomato. In Plant Cell Culture Protocols (pp. 261-273). Humana Press.",
                "Franklin, G., Oliveira, M., & Nivekar, C. (2004). Plant biotechnology for crop improvement. Plant Cell Reports, 23(5), 346-357."
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
                "Immerse in 0.5% NaOCl for 15-20 minutes with gentle agitation",
                "Rinse thoroughly with sterile distilled water (5 times)",
                "Culture leaf explants on MS medium with 5 mg/L BAP and 1 mg/L IAA",
                "Maintain at 24-26°C with 16/8 hours light/dark photoperiod",
                "Transfer regenerated shoots to MS medium with 0.5 mg/L IBA",
                "Root formation occurs within 4-5 weeks",
                "Harden plants in greenhouse before transferring to field"
            ],
            references: [
                "Rout, G.R., Samantaray, S., & Das, P. (2000). In vitro micropropagation of ornamental plants: A review. Scientia Horticulturae, 87(3-4), 147-179.",
                "Mhaskar, D. & Gill, R. (1998). Micropropagation of rose. In Handbook of Plant Cell Culture (pp. 521-541).",
                "Góralski, G., Slesak, H., & Tretyn, A. (2005). Tissue culture of ornamental plants. Acta Physiologiae Plantarum, 27(2), 255-267."
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
                "Clean seeds in running water",
                "Surface sterilize with 0.5% NaOCl for 10 minutes",
                "Rinse with sterile distilled water (6 times)",
                "Inoculate on Knudson C medium or Vacin & Went medium",
                "Germination begins within 2-3 weeks",
                "Transfer seedlings to MS medium with 2 mg/L NAA and 1 mg/L BAP",
                "Provide 14-16 hours photoperiod at 25-28°C",
                "Subculture every 6-8 weeks",
                "Harden plants in a humid chamber for 1-2 months before potting"
            ],
            references: [
                "Knudson, L. (1950). Germination of orchid seeds. American Orchid Society Bulletin, 19, 136-144.",
                "Vacin, E.F. & Went, F.W. (1949). Some pH changes in nutrient solutions. Botanical Gazette, 110, 605-613.",
                "Yam, T.W. & Ernest, J.K. (1999). Biotechnology of orchids with reference to the tropical species. Plant Cell, Tissue and Organ Culture, 59(2), 83-93."
            ],
            images: [
                { url: "https://via.placeholder.com/200/9370DB/FFFFFF?text=Orchid+Flower", caption: "Orchid Flower" },
                { url: "https://via.placeholder.com/200/BA55D3/FFFFFF?text=Seed+Germination", caption: "Seed Germination" },
                { url: "https://via.placeholder.com/200/DDA0DD/FFFFFF?text=Seedling", caption: "Orchid Seedling" }
            ]
        }
    },
    contaminationProtocols: {
        tomato: {
            revisedSteps: [
                "Use 2% v/v Clorox (sodium hypochlorite) instead of 0.1% HgCl2",
                "Extend sterilization time to 15-20 minutes",
                "Add antibiotic solution: 250 mg/L cephalexin or 100 mg/L ampicillin to culture medium",
                "Culture in antibiotic-free medium after 2-3 passages",
                "Use 0.5% carbendazim for fungal contamination prevention",
                "Improve aseptic technique: work in laminar flow hood for extended periods",
                "Autoclave all materials at 121°C for 20 minutes at 15 psi"
            ],
            tips: "If contamination persists after revised protocol, consider using systemic fungicides like hexaconazole (0.1% v/v)."
        },
        rose: {
            revisedSteps: [
                "Increase NaOCl concentration to 1% for 20-25 minutes",
                "Add 70% ethanol dip for 1 minute after NaOCl treatment",
                "Include antibiotics: 500 mg/L cefotaxime in culture medium for first 2-3 weeks",
                "Use fungicide Bavistin (0.1-0.2%) in sterilization solution",
                "Culture explants in growth room with 20-22°C (lower temperature inhibits microbial growth)",
                "Change culture medium every 10 days initially to remove any developing contaminants",
                "Work under sterile conditions continuously; never leave culture plates open"
            ],
            tips: "Rose tissues are particularly susceptible to fungal contamination. Use preventive antifungal agents from the start."
        },
        orchid: {
            revisedSteps: [
                "Use 1% NaOCl for 15 minutes with gentle agitation",
                "Add isopropyl alcohol 70% for 3 minutes before NaOCl treatment",
                "Include streptomycin (100 mg/L) for bacterial contamination control",
                "Use Tween 80 (0.1%) as surfactant during sterilization",
                "Culture seeds on activated charcoal-containing medium (0.5% w/v) to absorb inhibitory substances",
                "Maintain strict anaerobic conditions in early germination stage",
                "Use specialized orchid growth medium with lower nitrogen for better contamination resistance"
            ],
            tips: "Orchid seeds have delicate seed coats. Balance sterilization intensity to avoid damaging viability."
        }
    }
};

// DOM Elements
const messagesArea = document.getElementById('messagesArea');
const userInput = document.getElementById('userInput');
const chatForm = document.getElementById('chatForm');
const sendBtn = document.querySelector('.send-btn');
const protocolModal = document.getElementById('protocolModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');

// Conversation state
let conversationState = {
    currentPlant: null,
    showingProtocol: false,
    waitingForContaminationResponse: false
};

// Initialize localStorage
function initializeStorage() {
    if (!localStorage.getItem('ptcDatabase')) {
        localStorage.setItem('ptcDatabase', JSON.stringify(mockData));
    }
}

// Get data from localStorage
function getDatabase() {
    const data = localStorage.getItem('ptcDatabase');
    return data ? JSON.parse(data) : mockData;
}

// Format protocol as HTML
function formatProtocol(plant) {
    const db = getDatabase();
    const plantData = db.protocols[plant.toLowerCase()];
    
    if (!plantData) {
        return null;
    }

    let html = `
        <div class="protocol-section">
            <h3>📋 Protocol Steps for ${plantData.name}</h3>
            <ol>
    `;
    
    plantData.protocol.forEach(step => {
        html += `<li>${step}</li>`;
    });
    
    html += `</ol></div>`;
    
    // Add images
    html += `<div class="images-container">`;
    plantData.images.forEach(img => {
        html += `
            <div class="image-item">
                <img src="${img.url}" alt="${img.caption}" onerror="this.src='https://via.placeholder.com/200/ccc/999?text=Image'">
                <div class="image-caption">${img.caption}</div>
            </div>
        `;
    });
    html += `</div>`;
    
    // Add references
    html += `
        <div class="references-container">
            <h4>📚 Research References:</h4>
    `;
    
    plantData.references.forEach((ref, idx) => {
        html += `<div class="reference-item">[${idx + 1}] ${ref}</div>`;
    });
    
    html += `</div>`;
    
    return html;
}

// Add message to chat
function addMessage(text, isUser = false, isHTML = false) {
    const message = document.createElement('div');
    message.className = `message ${isUser ? 'user-message' : 'assistant-message'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? '👤' : '🤖';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    if (isHTML) {
        content.innerHTML = text;
    } else {
        content.textContent = text;
    }
    
    message.appendChild(avatar);
    message.appendChild(content);
    messagesArea.appendChild(message);
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

// Add typing indicator
function addTypingIndicator() {
    const message = document.createElement('div');
    message.className = 'message assistant-message';
    message.id = 'typingIndicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🤖';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    
    message.appendChild(avatar);
    message.appendChild(content);
    messagesArea.appendChild(message);
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Generate protocol response
function generateProtocolResponse(plant) {
    addTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        
        const db = getDatabase();
        const plantData = db.protocols[plant.toLowerCase()];
        
        if (!plantData) {
            addMessage(`I don't have a protocol for "${plant}" in my database yet. Try: Tomato, Rose, or Orchid. You can add new protocols in the Admin Panel.`);
            conversationState.currentPlant = null;
            return;
        }
        
        conversationState.currentPlant = plant.toLowerCase();
        conversationState.showingProtocol = true;
        
        // Add greeting message
        addMessage(`Great! I've found the tissue culture protocol for ${plantData.name}. Here's what I have for you:`);
        
        // Add protocol
        const protocolHTML = formatProtocol(plant);
        const message = document.createElement('div');
        message.className = 'message assistant-message';
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = '🤖';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = protocolHTML;
        
        message.appendChild(avatar);
        message.appendChild(content);
        messagesArea.appendChild(message);
        messagesArea.scrollTop = messagesArea.scrollHeight;
        
        // Ask about contamination after a delay
        setTimeout(() => {
            askContaminationQuestion();
        }, 1000);
    }, 1000);
}

// Ask contamination question
function askContaminationQuestion() {
    const message = document.createElement('div');
    message.className = 'message assistant-message';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🤖';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `
        <div class="contamination-question">
            <p>❓ Did you encounter any contamination during the process?</p>
            <div class="button-group">
                <button class="btn btn-yes" onclick="handleContaminationYes()">Yes, there was contamination</button>
                <button class="btn btn-no" onclick="handleContaminationNo()">No, everything went fine</button>
            </div>
        </div>
    `;
    
    message.appendChild(avatar);
    message.appendChild(content);
    messagesArea.appendChild(message);
    messagesArea.scrollTop = messagesArea.scrollHeight;
    
    conversationState.waitingForContaminationResponse = true;
}

// Handle contamination - YES
window.handleContaminationYes = function() {
    addMessage('Yes, there was contamination', true);
    conversationState.waitingForContaminationResponse = false;
    
    addTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        
        const db = getDatabase();
        const plantLower = conversationState.currentPlant;
        const contaminationData = db.contaminationProtocols[plantLower];
        
        if (!contaminationData) {
            addMessage('I apologize, but I don\'t have a revised protocol for this case. Please consult with your lab supervisor.');
            return;
        }
        
        // Add response
        addMessage(`Don't worry! Here's a revised protocol to address contamination issues for ${db.protocols[plantLower].name}:`);
        
        // Add revised steps
        const message = document.createElement('div');
        message.className = 'message assistant-message';
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = '🤖';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = `
            <div class="protocol-section">
                <h3>✅ Revised Protocol (Anti-Contamination)</h3>
                <ol>
                    ${contaminationData.revisedSteps.map(step => `<li>${step}</li>`).join('')}
                </ol>
                <p style="margin-top: 15px; padding: 10px; background: #f0fdf4; border-radius: 6px; border-left: 3px solid var(--success-color);"><strong>💡 Tips:</strong> ${contaminationData.tips}</p>
            </div>
        `;
        
        message.appendChild(avatar);
        message.appendChild(content);
        messagesArea.appendChild(message);
        messagesArea.scrollTop = messagesArea.scrollHeight;
        
        // Follow up
        setTimeout(() => {
            addMessage('Would you like to try another plant protocol, or do you need more information about this one?');
            conversationState.currentPlant = null;
            conversationState.showingProtocol = false;
            userInput.focus();
        }, 500);
    }, 1500);
};

// Handle contamination - NO
window.handleContaminationNo = function() {
    addMessage('No, everything went fine', true);
    conversationState.waitingForContaminationResponse = false;
    
    addTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        
        const db = getDatabase();
        const plantName = db.protocols[conversationState.currentPlant].name;
        
        addMessage(`🎉 Excellent! Your ${plantName} tissue culture protocol was successful!`);
        addMessage('Next steps:\n• Monitor the plantlets for healthy growth\n• Gradually acclimate them to greenhouse conditions\n• Transfer to soil once established\n\nWould you like to work with another plant, or need any clarification?');
        
        conversationState.currentPlant = null;
        conversationState.showingProtocol = false;
        userInput.focus();
    }, 1000);
};

// Handle form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = userInput.value.trim();
    if (!input) return;
    
    // Add user message
    addMessage(input, true);
    userInput.value = '';
    
    if (conversationState.waitingForContaminationResponse) {
        return; // Ignore input when waiting for button clicks
    }
    
    // Generate protocol
    generateProtocolResponse(input);
});

// Modal functionality
modalClose.addEventListener('click', () => {
    protocolModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === protocolModal) {
        protocolModal.style.display = 'none';
    }
});

// Initialize
initializeStorage();

userInput.focus();
