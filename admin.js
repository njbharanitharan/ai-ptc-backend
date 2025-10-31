// Mock data for initialization
const mockData = {
    protocols: {
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

// Get database from localStorage
function getDatabase() {
    const data = localStorage.getItem('ptcDatabase');
    return data ? JSON.parse(data) : mockData;
}

// Save database to localStorage
function saveDatabase(data) {
    localStorage.setItem('ptcDatabase', JSON.stringify(data));
    showStatus('Database saved successfully!', 'success');
}

// DOM Elements
const statusMessage = document.getElementById('statusMessage');
const tabs = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Tab Navigation
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(tabId).classList.add('active');
        
        // Load content for the tab
        if (tabId === 'protocols-tab') loadProtocols();
        else if (tabId === 'images-tab') loadImages();
        else if (tabId === 'references-tab') loadReferences();
        else if (tabId === 'contamination-tab') loadContamination();
    });
});

// Show status message
function showStatus(message, type = 'info') {
    statusMessage.textContent = message;
    statusMessage.className = `status-message show ${type}`;
    setTimeout(() => {
        statusMessage.classList.remove('show');
    }, 3000);
}

// ============ PROTOCOL MANAGEMENT ============

const protocolForm = document.getElementById('protocolForm');
const protocolsList = document.getElementById('protocolsList');

protocolForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const plantName = document.getElementById('plantName').value.toLowerCase().trim();
    const steps = document.getElementById('protocolSteps').value.split('\n').filter(s => s.trim());
    
    if (!plantName || steps.length === 0) {
        showStatus('Please fill in all fields', 'error');
        return;
    }
    
    const db = getDatabase();
    
    db.protocols[plantName] = {
        name: plantName.charAt(0).toUpperCase() + plantName.slice(1),
        protocol: steps,
        references: db.protocols[plantName]?.references || [],
        images: db.protocols[plantName]?.images || []
    };
    
    // Add anti-contamination protocol if not exists
    if (!db.contaminationProtocols[plantName]) {
        db.contaminationProtocols[plantName] = {
            revisedSteps: ["Follow standard anti-contamination procedures..."],
            tips: "Contact your lab supervisor for specific guidance."
        };
    }
    
    saveDatabase(db);
    protocolForm.reset();
    loadProtocols();
    showStatus(`Protocol for "${plantName}" added successfully!`, 'success');
});

function loadProtocols() {
    const db = getDatabase();
    protocolsList.innerHTML = '';
    
    if (Object.keys(db.protocols).length === 0) {
        protocolsList.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📋</div><p>No protocols added yet</p></div>';
        return;
    }
    
    Object.entries(db.protocols).forEach(([key, protocol]) => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.innerHTML = `
            <div class="list-item-content">
                <div class="list-item-title">${protocol.name}</div>
                <div class="list-item-text">${protocol.protocol.length} steps • ${protocol.references.length} references • ${protocol.images.length} images</div>
            </div>
            <div class="list-item-actions">
                <button class="btn btn-sm btn-delete" onclick="deleteProtocol('${key}')">🗑️ Delete</button>
            </div>
        `;
        protocolsList.appendChild(item);
    });
}

function deleteProtocol(plantName) {
    if (!confirm(`Delete protocol for ${plantName}?`)) return;
    
    const db = getDatabase();
    delete db.protocols[plantName];
    delete db.contaminationProtocols[plantName];
    saveDatabase(db);
    loadProtocols();
}

// ============ IMAGE MANAGEMENT ============

const imageForm = document.getElementById('imageForm');
const imagesList = document.getElementById('imagesList');

imageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const plantName = document.getElementById('imageePlantName').value.toLowerCase().trim();
    const imageUrl = document.getElementById('imageUrl').value.trim();
    const caption = document.getElementById('imageCaption').value.trim();
    
    if (!plantName || !imageUrl || !caption) {
        showStatus('Please fill in all fields', 'error');
        return;
    }
    
    const db = getDatabase();
    
    if (!db.protocols[plantName]) {
        showStatus(`Plant "${plantName}" not found. Add protocol first.`, 'error');
        return;
    }
    
    if (!db.protocols[plantName].images) {
        db.protocols[plantName].images = [];
    }
    
    db.protocols[plantName].images.push({ url: imageUrl, caption });
    saveDatabase(db);
    imageForm.reset();
    loadImages();
    showStatus(`Image added to "${plantName}"!`, 'success');
});

function loadImages() {
    const db = getDatabase();
    imagesList.innerHTML = '';
    
    let totalImages = 0;
    
    Object.entries(db.protocols).forEach(([key, protocol]) => {
        if (protocol.images && protocol.images.length > 0) {
            protocol.images.forEach((img, idx) => {
                totalImages++;
                const item = document.createElement('div');
                item.className = 'list-item';
                item.innerHTML = `
                    <img src="${img.url}" alt="${img.caption}" class="list-item-image" onerror="this.src='https://via.placeholder.com/80/ccc/999?text=Image'">
                    <div class="list-item-content">
                        <div class="list-item-title">${protocol.name} - ${img.caption}</div>
                        <div class="list-item-text">${img.url}</div>
                    </div>
                    <div class="list-item-actions">
                        <button class="btn btn-sm btn-delete" onclick="deleteImage('${key}', ${idx})">🗑️ Delete</button>
                    </div>
                `;
                imagesList.appendChild(item);
            });
        }
    });
    
    if (totalImages === 0) {
        imagesList.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🖼️</div><p>No images added yet</p></div>';
    }
}

function deleteImage(plantName, index) {
    if (!confirm('Delete this image?')) return;
    
    const db = getDatabase();
    db.protocols[plantName].images.splice(index, 1);
    saveDatabase(db);
    loadImages();
}

// ============ REFERENCE MANAGEMENT ============

const referenceForm = document.getElementById('referenceForm');
const referencesList = document.getElementById('referencesList');

referenceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const plantName = document.getElementById('refPlantName').value.toLowerCase().trim();
    const referenceText = document.getElementById('referenceText').value.trim();
    
    if (!plantName || !referenceText) {
        showStatus('Please fill in all fields', 'error');
        return;
    }
    
    const db = getDatabase();
    
    if (!db.protocols[plantName]) {
        showStatus(`Plant "${plantName}" not found. Add protocol first.`, 'error');
        return;
    }
    
    if (!db.protocols[plantName].references) {
        db.protocols[plantName].references = [];
    }
    
    db.protocols[plantName].references.push(referenceText);
    saveDatabase(db);
    referenceForm.reset();
    loadReferences();
    showStatus(`Reference added to "${plantName}"!`, 'success');
});

function loadReferences() {
    const db = getDatabase();
    referencesList.innerHTML = '';
    
    let totalRefs = 0;
    
    Object.entries(db.protocols).forEach(([key, protocol]) => {
        if (protocol.references && protocol.references.length > 0) {
            protocol.references.forEach((ref, idx) => {
                totalRefs++;
                const item = document.createElement('div');
                item.className = 'list-item';
                item.innerHTML = `
                    <div class="list-item-content">
                        <div class="list-item-title">${protocol.name}</div>
                        <div class="list-item-text">${ref}</div>
                    </div>
                    <div class="list-item-actions">
                        <button class="btn btn-sm btn-delete" onclick="deleteReference('${key}', ${idx})">🗑️ Delete</button>
                    </div>
                `;
                referencesList.appendChild(item);
            });
        }
    });
    
    if (totalRefs === 0) {
        referencesList.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📚</div><p>No references added yet</p></div>';
    }
}

function deleteReference(plantName, index) {
    if (!confirm('Delete this reference?')) return;
    
    const db = getDatabase();
    db.protocols[plantName].references.splice(index, 1);
    saveDatabase(db);
    loadReferences();
}

// ============ CONTAMINATION PROTOCOL MANAGEMENT ============

const contaminationForm = document.getElementById('contaminationForm');
const contaminationList = document.getElementById('contaminationList');

contaminationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const plantName = document.getElementById('contPlantName').value.toLowerCase().trim();
    const revisedSteps = document.getElementById('revisedSteps').value.split('\n').filter(s => s.trim());
    const tips = document.getElementById('contaminationTips').value.trim();
    
    if (!plantName || revisedSteps.length === 0 || !tips) {
        showStatus('Please fill in all fields', 'error');
        return;
    }
    
    const db = getDatabase();
    
    if (!db.protocols[plantName]) {
        showStatus(`Plant "${plantName}" not found. Add protocol first.`, 'error');
        return;
    }
    
    db.contaminationProtocols[plantName] = {
        revisedSteps,
        tips
    };
    
    saveDatabase(db);
    contaminationForm.reset();
    loadContamination();
    showStatus(`Anti-contamination protocol for "${plantName}" added successfully!`, 'success');
});

function loadContamination() {
    const db = getDatabase();
    contaminationList.innerHTML = '';
    
    if (Object.keys(db.contaminationProtocols).length === 0) {
        contaminationList.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🧪</div><p>No anti-contamination protocols added yet</p></div>';
        return;
    }
    
    Object.entries(db.contaminationProtocols).forEach(([key, protocol]) => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.innerHTML = `
            <div class="list-item-content">
                <div class="list-item-title">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
                <div class="list-item-text"><strong>Steps:</strong> ${protocol.revisedSteps.length}\n<strong>Tips:</strong> ${protocol.tips}</div>
            </div>
            <div class="list-item-actions">
                <button class="btn btn-sm btn-delete" onclick="deleteContaminationProtocol('${key}')">🗑️ Delete</button>
            </div>
        `;
        contaminationList.appendChild(item);
    });
}

function deleteContaminationProtocol(plantName) {
    if (!confirm(`Delete anti-contamination protocol for ${plantName}?`)) return;
    
    const db = getDatabase();
    delete db.contaminationProtocols[plantName];
    saveDatabase(db);
    loadContamination();
}

// ============ DATA EXPORT/IMPORT ============

const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');
const resetBtn = document.getElementById('resetBtn');

exportBtn.addEventListener('click', () => {
    const db = getDatabase();
    const dataStr = JSON.stringify(db, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ptc-database-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showStatus('Database exported successfully!', 'success');
});

importBtn.addEventListener('click', () => {
    const file = importFile.files[0];
    if (!file) {
        showStatus('Please select a file', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Validate structure
            if (!importedData.protocols || !importedData.contaminationProtocols) {
                throw new Error('Invalid database format');
            }
            
            localStorage.setItem('ptcDatabase', JSON.stringify(importedData));
            showStatus('Database imported successfully!', 'success');
            importFile.value = '';
            
            // Reload all tabs
            loadProtocols();
            loadImages();
            loadReferences();
            loadContamination();
        } catch (error) {
            showStatus(`Import error: ${error.message}`, 'error');
        }
    };
    reader.readAsText(file);
});

resetBtn.addEventListener('click', () => {
    if (confirm('⚠️ This will delete all your data and restore the default mock data. Are you sure?')) {
        localStorage.removeItem('ptcDatabase');
        localStorage.setItem('ptcDatabase', JSON.stringify(mockData));
        showStatus('Database reset to default!', 'success');
        
        // Reload all tabs
        loadProtocols();
        loadImages();
        loadReferences();
        loadContamination();
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    // Initialize localStorage if needed
    if (!localStorage.getItem('ptcDatabase')) {
        localStorage.setItem('ptcDatabase', JSON.stringify(mockData));
    }
    loadProtocols();
});