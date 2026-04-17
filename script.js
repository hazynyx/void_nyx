// --- Clock & Date Logic ---
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');

    if (timeEl && dateEl) {
        timeEl.textContent = `${hours}:${minutes}`;
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        dateEl.textContent = now.toLocaleDateString('en-US', options);
    }
}

// --- SVG Library (Original Icons) ---
const svgs = {
    youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`,
    netflix: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h3v20H6zM15 2h3v20h-3zM9 2h6v5H9z" /></svg>`,
    spotify: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 15c3-1 6-1 8 1M7 12c4-1.5 8-1.5 10 1M6 9c5-2 10-2 12 2" /></svg>`,
    reddit: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    gmail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    chatgpt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    mit: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>`,
    pcm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    books: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
    n4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><text x="12" y="16" font-size="10" text-anchor="middle" fill="currentColor" stroke="none">N4</text></svg>`,
    generic: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
};

const defaultShortcuts = [{
        label: "YouTube",
        url: "https://youtube.com",
        icon: svgs.youtube,
        type: 'svg'
    },
    {
        label: "Netflix",
        url: "https://netflix.com",
        icon: svgs.netflix,
        type: 'svg'
    },
    {
        label: "Spotify",
        url: "https://open.spotify.com",
        icon: svgs.spotify,
        type: 'svg'
    },
    {
        label: "Reddit",
        url: "https://reddit.com",
        icon: svgs.reddit,
        type: 'svg'
    },
    {
        label: "Gmail",
        url: "https://mail.google.com",
        icon: svgs.gmail,
        type: 'svg'
    },
    {
        label: "ChatGPT",
        url: "https://chat.openai.com",
        icon: svgs.chatgpt,
        type: 'svg'
    }, // <--- FIXED: Added missing comma here
    {
        label: "MIT OCW",
        url: "https://ocw.mit.edu",
        icon: svgs.mit,
        type: 'svg'
    },
    {
        label: "PCM Books",
        url: "https://practiso.me",
        icon: svgs.pcm,
        type: 'svg'
    },
    {
        label: "Books",
        url: "https://readyourflow.com",
        icon: svgs.books,
        type: 'svg'
    },
    {
        label: "N4 Resources",
        url: "https://migii.net/en/blog/jlpt-n4-books",
        icon: svgs.n4
    }
];

let shortcuts = [];
let contextMenuIndex = null;
let editingIndex = null;

// DOM Elements
const dockContainer = document.getElementById('dock-container');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const labelInput = document.getElementById('new-label');
const urlInput = document.getElementById('new-url');
const positionInput = document.getElementById('new-position');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
const contextMenu = document.getElementById('context-menu');
const ctxEdit = document.getElementById('ctx-edit');
const ctxDelete = document.getElementById('ctx-delete');

// --- Theme Logic ---
const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const body = document.getElementById("main-body");

function setTheme(theme) {
    if (theme === "light") {
        body.classList.add("light");
        icon.textContent = "🌙";
        applyLightModePalette();
    } else {
        body.classList.remove("light");
        icon.textContent = "☀️";
        resetPalette();
    }
    localStorage.setItem("theme", theme);
}

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        const current = localStorage.getItem("theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        setTheme(next);
    });
}

// --- Custom Palette Logic ---
const settingsBtn = document.getElementById("settings-btn");
const settingsOverlay = document.getElementById("settings-overlay");
const settingsSave = document.getElementById("settings-save");
const settingsCancel = document.getElementById("settings-cancel");
const settingsReset = document.getElementById("settings-reset");
const colorBgInput = document.getElementById("color-bg");
const colorTextInput = document.getElementById("color-text");

const defaultLightColors = {
    bg: "#f0f8ff",
    text: "#003366"
};

function getLightColors() {
    const saved = localStorage.getItem("void_light_colors");
    return saved ? JSON.parse(saved) : defaultLightColors;
}

function applyLightModePalette() {
    const colors = getLightColors();
    document.body.style.setProperty('--bg-color', colors.bg);
    document.body.style.setProperty('--text-color', colors.text);
    if (colorBgInput) colorBgInput.value = colors.bg;
    if (colorTextInput) colorTextInput.value = colors.text;
}

function resetPalette() {
    document.body.style.removeProperty('--bg-color');
    document.body.style.removeProperty('--text-color');
}

if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
        const colors = getLightColors();
        if (colorBgInput) colorBgInput.value = colors.bg;
        if (colorTextInput) colorTextInput.value = colors.text;
        settingsOverlay.classList.remove("hidden");
        settingsOverlay.classList.add("flex");
    });
}

if (settingsSave) {
    settingsSave.addEventListener("click", () => {
        const newColors = {
            bg: colorBgInput.value,
            text: colorTextInput.value
        };
        localStorage.setItem("void_light_colors", JSON.stringify(newColors));
        if (body.classList.contains("light")) applyLightModePalette();
        settingsOverlay.classList.add("hidden");
        settingsOverlay.classList.remove("flex");
    });
}

if (settingsReset) {
    settingsReset.addEventListener("click", () => {
        colorBgInput.value = defaultLightColors.bg;
        colorTextInput.value = defaultLightColors.text;
    });
}

if (settingsCancel) {
    settingsCancel.addEventListener("click", () => {
        settingsOverlay.classList.add("hidden");
        settingsOverlay.classList.remove("flex");
    });
}

// --- Helper Functions ---
function formatUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return 'https://' + url;
    }
    return url;
}

function saveAndRender() {
    localStorage.setItem('void_shortcuts', JSON.stringify(shortcuts));
    renderDock();
}

// --- Context Menu Logic ---
document.addEventListener('click', (e) => {
    if (contextMenu && !contextMenu.contains(e.target)) {
        contextMenu.style.display = 'none';
    }
});

if (ctxDelete) {
    ctxDelete.addEventListener('click', () => {
        if (contextMenuIndex !== null && confirm(`Delete ${shortcuts[contextMenuIndex].label}?`)) {
            shortcuts.splice(contextMenuIndex, 1);
            saveAndRender();
        }
        contextMenu.style.display = 'none';
    });
}

if (ctxEdit) {
    ctxEdit.addEventListener('click', () => {
        if (contextMenuIndex !== null) openModal(true, contextMenuIndex);
        contextMenu.style.display = 'none';
    });
}

// --- Modal Functions (Adding/Editing) ---
function openModal(isEdit = false, index = null) {
    modalOverlay.classList.remove('hidden');
    modalOverlay.classList.add('flex');

    if (isEdit && index !== null) {
        editingIndex = index;
        modalTitle.textContent = "Edit Shortcut";
        labelInput.value = shortcuts[index].label;
        urlInput.value = shortcuts[index].url;
        positionInput.value = index + 1; // Display 1-based index
    } else {
        editingIndex = null;
        modalTitle.textContent = "Add Shortcut";
        urlInput.value = '';
        labelInput.value = '';
        positionInput.value = shortcuts.length + 1; // Default to end
    }
    positionInput.max = shortcuts.length + (isEdit ? 0 : 1);
    labelInput.focus();
}

function closeModal() {
    modalOverlay.classList.add('hidden');
    modalOverlay.classList.remove('flex');
    editingIndex = null;
}

if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        const label = labelInput.value.trim();
        let url = urlInput.value.trim();
        let pos = parseInt(positionInput.value);

        if (label && url) {
            url = formatUrl(url);

            // Ensure position is valid
            if (isNaN(pos) || pos < 1) pos = 1;
            if (pos > shortcuts.length + 1) pos = shortcuts.length + 1;

            const targetIndex = pos - 1; // Convert to 0-based index

            if (editingIndex !== null) {
                // --- EDIT EXISTING ---
                const item = shortcuts[editingIndex];
                item.label = label;
                item.url = url;

                // Move item if position changed
                if (targetIndex !== editingIndex) {
                    shortcuts.splice(editingIndex, 1); // Remove from old spot
                    shortcuts.splice(targetIndex, 0, item); // Insert at new spot
                }
            } else {
                // --- ADD NEW ---
                // New items use the Generic Icon to keep the look consistent
                const newItem = {
                    label,
                    url,
                    icon: svgs.generic,
                    type: 'svg'
                };
                shortcuts.splice(targetIndex, 0, newItem);
            }

            saveAndRender();
            closeModal();
        }
    });
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModal);
}

// --- Shortcut Rendering ---
function renderDock() {
    if (!dockContainer) return;

    dockContainer.innerHTML = '';

    shortcuts.forEach((item, index) => {
        const link = document.createElement('a');
        link.href = item.url;
        link.className = 'dock-item';
        link.dataset.label = item.label;
        link.dataset.index = index;

        // Context Menu
        link.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            contextMenuIndex = index;
            if (contextMenu) {
                contextMenu.style.display = 'block';
                contextMenu.style.left = `${e.pageX}px`;
                contextMenu.style.top = `${e.pageY - 60}px`;
            }
        });

        // Render Icon
        link.innerHTML = item.icon || svgs.generic;
        dockContainer.appendChild(link);
    });

    // Add "+" Button
    const addBtn = document.createElement('div');
    addBtn.className = 'dock-item';
    addBtn.dataset.label = "Add";
    addBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
    addBtn.addEventListener('click', () => openModal(false));
    dockContainer.appendChild(addBtn);

    initDockAnimation();
}

// --- Mac Dock Physics Animation ---
function initDockAnimation() {
    if (!dockContainer) return;

    const icons = document.querySelectorAll('.dock-item');
    const baseSize = 20; // Ensure this matches your CSS width/height
    const maxScale = 2.5;
    const range = 200;

    dockContainer.onmouseleave = () => {
        icons.forEach(icon => {
            icon.style.width = `${baseSize}px`;
            icon.style.height = `${baseSize}px`;
            icon.style.marginBottom = '0px';
        });
    };

    dockContainer.onmousemove = (e) => {
        const mouseX = e.clientX;
        icons.forEach(icon => {
            const rect = icon.getBoundingClientRect();
            const iconCenterX = rect.left + rect.width / 2;
            const distance = Math.abs(mouseX - iconCenterX);
            let scale = 1;
            if (distance < range) {
                const angle = (1 - distance / range) * (Math.PI / 2);
                const scaleValue = Math.sin(angle);
                scale = 1 + (maxScale - 1) * scaleValue;
            }
            icon.style.width = `${baseSize * scale}px`;
            icon.style.height = `${baseSize * scale}px`;
        });
    };
}

// --- Initialization ---
window.addEventListener("load", () => {
    updateTime();
    setInterval(updateTime, 60000);
    const savedShortcuts = localStorage.getItem('void_shortcuts');
    if (savedShortcuts) {
        shortcuts = JSON.parse(savedShortcuts);
    } else {
        shortcuts = defaultShortcuts;
    }
    renderDock();
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.focus();
    }
});