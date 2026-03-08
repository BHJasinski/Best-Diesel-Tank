const produkty = [
    {
        id: "JFC-2500-DUO",
        kategoria: "diesel",
        nazwa: "JFC 2500 Diesel Duo",
        opis: "Optymalne rozwiązanie do magazynowania i wewnętrznej dystrybucji oleju napędowego. Idealny dla rolnictwa i budownictwa.",
        pojemnosc: "2500 L",
        wydajnosc: "72 l/min",
        zasilanie: "230V / 50Hz",
        
        // Wyposażenie wyświetlane na głównej karcie (ikony + tekst)
        wyposazenie_short: [
            "Pompa 72 l/min",
            "Wąż dystrybucyjny 8m",
            "Pistolet automatyczny A60",
            "Filtr paliwa szklany",
            "Licznik cyfrowy"
        ],

        // Pełna lista dla "szczegółów" lub zapytania
        opcje_dodatkowe: [
            "Zwijadło automatyczne (6-20m)",
            "Oświetlenie LED szafy",
            "System monitoringu SMDP / XTRACK",
            "Pompa do 100 l/min",
            "Linia napełniająca DN50"
        ],

        // Statystyki do pasków postępu (w skali 1-100)
        stat_pojemnosc: 50, // Średni w ofercie (skala 1000-9000L)
        stat_wytrzymalosc: 95, // Duo ma wzmocnione pierścienie
        stat_wydajnosc: 80, // 72l/min to wysoki standard
        
        image: "img/jfc-2500-duo.jpg", // Tu wstawisz ścieżkę do zdjęcia
        tag: "Bestseller"
    },
    // Tutaj będziesz dodawał kolejne 11 zbiorników na diesel...
];
