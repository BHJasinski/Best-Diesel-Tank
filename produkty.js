// TWOJA ZAKTUALIZOWANA BAZA DANYCH (Zmień image na images)
const produkty = [
    {
        id: "JFC-2500-DUO",
        kategoria: "diesel",
        nazwa: "JFC 2500 Diesel Duo",
        opis: "Optymalne rozwiązanie do magazynowania i wewnętrznej dystrybucji oleju napędowego. Idealny dla rolnictwa i budownictwa.",
        pojemnosc: "2500 L",
        wydajnosc: "72 l/min",
        zasilanie: "230V / 50Hz",
        
        wyposazenie_short: [
            "Pompa 72 l/min",
            "Wąż dystrybucyjny 8m",
            "Pistolet automatyczny A60",
            "Filtr paliwa szklany",
            "Licznik cyfrowy"
        ],

        stat_pojemnosc: 50, 
        stat_wytrzymalosc: 95, 
        stat_wydajnosc: 80, 
        
        // TWOJE 7 ZDJĘĆ AVIF (pamiętaj o folderze img/ jeśli go używasz)
        images: [
            "2500_1.avif",
            "2500_2.avif",
            "2500_3.avif",
            "2500_4.avif",
            "2500_5.avif",
            "2500_6.avif",
            "2500_7.avif"
        ],
        tag: "Bestseller"
    }
];

function renderProducts(cat) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    
    // Filtrowanie po kategorii
    const wybrane = produkty.filter(p => p.kategoria === cat);
    
    wybrane.forEach((p, pIdx) => {
        const mainImgId = `main-view-${pIdx}`;
        
        grid.innerHTML += `
            <div class="fs-panel fs-border p-5 bg-[#2a2d31] flex flex-col h-full animate-fade-in relative">
                ${p.tag ? `<div class="absolute top-2 left-2 bg-[#ff8c00] text-black text-[10px] font-bold px-2 py-1 z-10 uppercase italic">${p.tag}</div>` : ''}
                
                <div class="h-60 bg-[#1a1c1e] mb-3 flex items-center justify-center overflow-hidden border border-gray-800">
                    <img id="${mainImgId}" src="${p.images[0]}" class="max-h-full max-w-full object-contain transition-all duration-500 shadow-2xl">
                </div>

                <div class="flex flex-wrap gap-1 mb-4 overflow-x-auto">
                    ${p.images.map(img => `
                        <div class="w-10 h-10 border border-gray-700 hover:border-[#4dbb3c] cursor-pointer bg-black flex items-center justify-center">
                            <img src="${img}" onclick="document.getElementById('${mainImgId}').src='${img}'" class="max-h-full max-w-full object-cover opacity-50 hover:opacity-100">
                        </div>
                    `).join('')}
                </div>

                <div class="flex-grow">
                    <h3 class="text-2xl font-black uppercase italic mb-1 text-white">${p.nazwa}</h3>
                    <p class="text-[11px] text-gray-400 mb-4 leading-relaxed">${p.opis}</p>
                    
                    <div class="space-y-2 mb-4">
                        <div class="flex justify-between text-[9px] uppercase font-bold text-gray-500"><span>Pojemność: ${p.pojemnosc}</span><span>${p.stat_pojemnosc}%</span></div>
                        <div class="stat-bar"><div class="stat-fill" style="width: ${p.stat_pojemnosc}%"></div></div>
                        
                        <div class="flex justify-between text-[9px] uppercase font-bold text-gray-500"><span>Wydajność: ${p.wydajnosc}</span><span>${p.stat_wydajnosc}%</span></div>
                        <div class="stat-bar"><div class="stat-fill" style="width: ${p.stat_wydajnosc}%"></div></div>
                    </div>

                    <div class="grid grid-cols-1 gap-1 mb-6">
                        ${p.wyposazenie_short.map(f => `
                            <div class="flex items-center text-[10px] text-gray-300 uppercase font-semibold">
                                <span class="w-1.5 h-1.5 bg-[#4dbb3c] mr-2"></span>${f}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button onclick="selectForContact('${p.nazwa}')" 
                        class="w-full bg-[#3d4147] hover:bg-[#4dbb3c] hover:text-black py-4 text-xs font-black uppercase transition-all tracking-tighter shadow-lg">
                    ZAPYTAJ O KONFIGURACJĘ [BEST DIESEL TANK]
                </button>
            </div>
        `;
    });
}

// Inicjalizacja przy starcie
window.onload = () => {
    // Sprawdzenie czy logo jest w repo
    console.log("Best Diesel Tank System Ready...");
    renderProducts('diesel');
};
