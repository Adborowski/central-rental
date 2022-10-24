// I've emptied this to disable bookings
// var jFlats = [];

// this one is for specific flat, and works only in conjunction with the right HTML data-object attribute
let widgetRunCode = `
document.addEventListener("DOMContentLoaded",function(event){iai_booking_button({"langNew":"0","langIdCodes":{"1":"pl","pl":1,"135":"ru","ru":135,"2":"en","en":2,"3":"de","de":3,"149":"es","es":149},"literalsInLang":{"1":{"label1":"Od","label2":"Do","label3":"Osoby","label4":"Pokoje","button":"Sprawd\u017a dost\u0119pno\u015b\u0107","days":["Nd","Pon","Wt","\u015ar","Czw","Pt","Sob"],"months":["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017adziernik","Listopad","Grudzie\u0144"],"trigger":"Rezerwacja online"},"135":{"label1":"From","label2":"To","label3":"People","label4":"Rooms","button":"Check availability","days":["\u0412\u0421","\u041f\u041d","\u0412\u0422","\u0421\u0420","\u0427\u0422","\u041f\u0422","\u0421\u0411"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"trigger":"Online Reservation"},"2":{"label1":"From","label2":"To","label3":"People","label4":"Rooms","button":"Check availability","days":["S","M","T","W","T","F","S"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"trigger":"Online Reservation"},"3":{"label1":null,"label2":null,"label3":null,"label4":null,"button":null,"days":["So","Mo","Di","Mi","Do","Fr","Sa"],"months":["Januar","Februar","M\u00e4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"trigger":"Online Reservation"},"149":{"label1":null,"label2":null,"label3":null,"label4":null,"button":null,"days":["S","M","T","W","T","F","S"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"trigger":"Online Reservation"}}});});
`;

// this is the actual
var jFlats = [
  {
    flat_id: 1,
    object_code: 13,
    flat_name: 'Apartament "Bluesa"',
    address: "Rynek Kościuszki 15B/25",
    coordinates: { lat: 53.13126, lng: 23.158211 },
    number_of_photos: 40,
    stats: {
      area: 32,
      persons: 4,
      flatType: "Studio z Balkonem",
      beds: "2 podwójne",
      floor: 2,
      rating_booking: "10",
      rating_airbnb: "5",
    }, // end of stats

    description_short:
      "Doskonały apartament tuż po generalnym remoncie, położony w ścisłym centrum miasta. Kompletnie wyposażony na krótki i długi pobyt w każdym celu.",

    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 50 m od Rynku Kościuszki – serca Białegostoku. Usytuowany przy zadrzewionej Alei Bluesa, zapewniającej ciszę i spokój. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. <br><br> W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. <br><br> Oferujemy łóżko sypialniane 160 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę o podobnych wymiarach. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prania i prasowania. Bezpłatny parking dla mieszkańców odgrodzony szlabanem znajduje się w szczycie budynku. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",

    link_airbnb: "",

    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3890','rateId':'3308','adults':'1','lang':'pl'})`,
    // change this before going live, this won't work online
  },
  {
    flat_id: 2,
    flat_name: 'Apartament "Cichy"',
    object_code: 14,
    number_of_photos: 48,
    address: "ul. Waryńskiego 1A/5",
    coordinates: { lat: 53.134492, lng: 23.15018 },
    stats: {
      area: 32,
      persons: 4,
      flatType: "Studio",
      beds: "2 Podwójne",
      floor: 1,
      rating_booking: "10",
      rating_airbnb: "5",
    }, // end of stats
    description_short:
      "Komfortowy apartament tuż po generalnym remoncie, położony w centrum miasta. Kompletnie wyposażony o wysokim standardzie. Gwarantujemy spokój i czystość.",

    description_long:
      "Komfortowy apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 50 m od ulicy Lipowej. Usytuowany w drugiej linii zabudowy gwarantuje ciszę i spokój. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo.<br><br> Apartament oferuje szybki internet do 50 Mb/s, tv kablową - 70 kanałów HD oraz kanały w języku białoruskim i angielskim. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany.<br><br> Oferujemy łóżko sypialniane 160 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę o podobnych wymiarach. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prania i prasowania. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3891','rateId':'3308','adults':'1','lang':'pl'})`,
  },

  //53.137481, 23.147653
  //53.137552, 23.147629
  {
    flat_id: 3,
    flat_name: 'Apartament "Komfortowy"',
    object_code: 15,
    number_of_photos: 45,
    address: "ul. Proletariacka 2A/12",
    coordinates: { lat: 53.137552, lng: 23.147629 },
    stats: {
      area: 32,
      persons: 4,
      flatType: "Apartament z Sypialnią i Balkonem",
      beds: "2 Podwójne",
      floor: 2,
      rating_booking: "10",
      rating_airbnb: "5",
    }, // end of stats
    description_short:
      "Komfortowy apartament tuż po generalnym remoncie, położony blisko centrum miasta. Gwarancja komfortu, odpoczynku i czystości. Zapraszamy!",
    description_long:
      "Komfortowy apartament tuż po generalnym remoncie, położony blisko centrum miasta, zaledwie 550 m od ulicy Lipowej. Usytuowany na spokojnym osiedlu gwarantuje ciszę i spokój. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. Apartament oferuje szybki internet do 50 Mb/s, tv kablową - 70 kanałów HD oraz kanały w języku białoruskim i angielskim. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. Oferujemy łóżko sypialniane 160 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę o podobnych wymiarach. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prania i prasowania. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3892','rateId':'3308','adults':'1','lang':'pl'})`,
  },

  {
    flat_id: 4,
    flat_name: 'Apartament "Przytulny"',
    object_code: 20,
    number_of_photos: 66,
    address: "ul. Legionowa 2/1 m.2",
    // 53.131700, 23.162410
    coordinates: { lat: 53.1317, lng: 23.16241 },
    stats: {
      area: 25,
      persons: 3,
      flatType: "Apartament z Sypialnią",
      beds: "2 Podwójne",
      floor: 0,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short:
      "Doskonały apartament po generalnym remoncie, położony 50 m od Rynku Kościuszki – serca Białegostoku. Usytuowany na obrzeżach parku Pałacu Branickich - perły turystycznej Podlasia.",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 50 m od Rynku Kościuszki – serca Białegostoku. Usytuowany na obrzeżach parku Pałacu Branickich - perły turystycznej Podlasia. Wystarczy przejść ulicę i znajdujemy się w parku. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. Oferujemy łóżko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę o podobnych wymiarach. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prasowania. Bezpłatny parking dla mieszkańców znajduje się w podwórku. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3893','rateId':'3308','adults':'1','lang':'pl'})`,
  },
  {
    flat_id: 5,
    flat_name: 'Apartament "Kameralny"',
    object_code: 21,
    number_of_photos: 57,
    address: "ul. Legionowa 2/1 m.19",
    // 53.131700, 23.162410
    coordinates: { lat: 53.13171, lng: 23.16248 },
    stats: {
      area: 25,
      persons: 3,
      flatType: "Apartament z Sypialnią i Balkonem",
      beds: "2 Podwójne",
      floor: 1,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short:
      "Doskonały apartament po generalnym remoncie, położony 50 m od Rynku Kościuszki – serca Białegostoku. Usytuowany na obrzeżach parku Pałacu Branickich - perły turystycznej Podlasia.",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 50 m od Rynku Kościuszki – serca Białegostoku. Usytuowany na obrzeżach parku Pałacu Branickich - perły turystycznej Podlasia. Wystarczy przejść ulicę i znajdujemy się w parku. Mieszkanie jest na pierwszym piętrze budynku, sypialnia posiada balkon z widokiem na park pałacowy. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. Oferujemy łóżko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę o podobnych wymiarach. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prasowania. Bezpłatny parking dla mieszkańców znajduje się w podwórku. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3895','rateId':'3308','adults':'1','lang':'pl'})`,
  },
  {
    flat_id: 6,
    flat_name: 'Apartament "Uroczy"',
    object_code: 12,
    number_of_photos: 44,
    address: "ul. Nowy Świat 18 m. 8",
    // 53.135568, 23.156661
    coordinates: { lat: 53.13546, lng: 23.15671 },
    stats: {
      area: 25,
      persons: 3,
      flatType: "Studio z Balkonem",
      beds: "2 Podwójne<br>1 Pojedyncze",
      floor: 1,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short:
      "Uroczy apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 450 m od Rynku Kościuszki – serca Białegostoku.",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 450 m od Rynku Kościuszki – serca Białegostoku. Usytuowany w cichej, zadrzewionej okolicy, zapewniającej ciszę i spokój. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji dobrze wyposażony aneks kuchenny, oraz wygodny stół jadalniany. Oferujemy dwuosobową, rozkładaną sofę oraz jednoosobowe, rozkładane łóżko. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prasowania.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'4127','rateId':'3308','adults':'1','lang':'pl'})`,
  },
  {
    flat_id: 7,
    flat_name: 'Apartament "Wygodny"',
    object_code: 19,
    number_of_photos: 41,
    address: "ul. Nowy Świat 13 m. 18",
    // 53.1355053,23.1560445
    coordinates: { lat: 53.1355053, lng: 23.1560445 },
    stats: {
      area: 25,
      persons: 3,
      flatType: "Studio z Balkonem",
      beds: "2 Podwójne<br>1 Pojedyncze",
      floor: 3,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short:
      "Uroczy apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 450 m od Rynku Kościuszki – serca Białegostoku.",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 450 m od Rynku Kościuszki – serca Białegostoku. Usytuowany w cichej, zadrzewionej okolicy, zapewniającej ciszę i spokój. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji dobrze wyposażony aneks kuchenny, oraz wygodny stół jadalniany. Oferujemy dwuosobową, rozkładaną sofę oraz jednoosobowe, rozkładane łóżko. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prasowania.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'4135','rateId':'3308','adults':'1','lang':'pl'})`,
  },
  {
    flat_id: 8,
    flat_name: 'Apartament "Przy Rynku"',
    object_code: 28,
    number_of_photos: 49,
    address: "ul. Sienkiewicza 6/7",
    // 53.133194, 23.161533
    coordinates: { lat: 53.133194, lng: 23.161533 },
    stats: {
      area: 50,
      persons: 4,
      flatType: "Apartament z Sypialnią",
      beds: "1 Podwójne<br>2 Pojedyncze",
      floor: 2,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short:
      "Apartament w ścisłym centrum miasta 500 m. od Rynku Kościuszki",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 50 m od Rynku Kościuszki – serca Białegostoku. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. W tym przestronnym apartamencie znajdziesz salon, sypialnię, kuchnię i łazienkę. Oferujemy 2 łóżka sypialniane 90 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę 160x200 cm. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prasowania. Bezpłatny parking dla mieszkańców odgrodzony szlabanem znajduje się w podwórku. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4256","rateId":"3308","adults":"2","lang":"pl"})`,
  },
  {
    flat_id: 9,
    flat_name: 'Apartament "Centrum"',
    object_code: 18,
    number_of_photos: 39,
    address: "ul. Lipowa 18/49",
    // 53.1355053,23.1560445
    coordinates: { lat: 53.133772, lng: 23.151112 },
    stats: {
      area: 40,
      persons: 4,
      flatType: "Apartament z Sypialnią",
      beds: "2 Podwójne",
      floor: 3,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short:
      "Apartament w ścisłym centrum miasta 500 m. od Rynku Kościuszki",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 500 m od Rynku Kościuszki – serca Białegostoku. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. W tym przestronnym apartamencie znajdziesz salon, sypialnię, kuchnię i łazienkę. Oferujemy łóżko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę 160x200 cm. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prasowania. W mieszkaniu dostępne jest szybkie WiFi oraz ponad 100 kanałów jakości HD.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4257","rateId":"3308","adults":"2","lang":"pl"})`,
  },
  {
    flat_id: 10,
    flat_name: 'Apartament "Śródmieście"',
    object_code: 17,
    number_of_photos: 50,
    address: "ul. Sienkiewicza 1/25",
    // 53.131598, 23.160396
    coordinates: { lat: 53.131598, lng: 23.160396 },
    stats: {
      area: 50,
      persons: 4,
      flatType: "Apartament z 2 Sypialniami",
      beds: "2 Podwójne",
      floor: 1,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short:
      "Apartament w ścisłym centrum miasta tuż przy Rynku Kościuszki",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 50 m od Rynku Kościuszki – serca Białegostoku. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. W tym przestronnym apartamencie znajdziesz dwie sypialnie, kuchnię i łazienkę. Oferujemy łóżka sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem. Mieszkanie jest wysokie - 3 m. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prasowania oraz prania. W mieszkaniu dostępne jest szybkie WiFi oraz ponad 100 kanałów jakości HD.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4258","rateId":"3308","adults":"2","lang":"pl"})`,
  },
  {
    flat_id: 11,
    flat_name: 'Apartament "Rodzinny"',
    object_code: 11,
    number_of_photos: 44,
    address: "ul. Chrobrego 16/41",
    // 53.129649, 23.185526
    coordinates: { lat: 53.129649, lng: 23.185526 },
    stats: {
      area: 38,
      persons: 4,
      flatType: "Apartament z Sypialnią",
      beds: "2 Podwójne",
      floor: 1,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short: "Komfortowy apartament niedaleko od centrum miasta.",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony na osiedlu Piasta I, oddalony 2 km. od centrum miasta. Jest to osiedle z bardzo dobrą infrastrukturą oraz dużą ilością zieleni. W pobliżu mieszkania znajdziesz wiele sklepów spożywczych i barów. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. Oferujemy łóżko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę o podobnych wymiarach. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prania i prasowania. Przy bloku jest duży, bezpłatny parking.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4289","rateId":"3308","adults":"2","lang":"pl"})`,
  },

  {
    flat_id: 12,
    flat_name: 'Apartament "W sercu miasta"',
    object_code: 10,
    number_of_photos: 41,
    address: "ul. Lipowa 1/11",
    // 53.132579, 23.156768
    coordinates: { lat: 53.132579, lng: 23.156768 },
    stats: {
      area: 34,
      persons: 4,
      flatType: "Apartament z Sypialnią",
      beds: "2 Podwójne",
      floor: 2,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short: "Komfortowy apartament w sercu miasta.",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, w Rynku Kościuszki – sercu Białegostoku. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. Oferujemy łóżko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę o podobnych wymiarach. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prania i prasowania. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4289","rateId":"3308","adults":"2","lang":"pl"})`,
  },

  {
    flat_id: 13,
    flat_name: "Apartament Broniewskiego 15",
    object_code: 25,
    number_of_photos: 40,
    address: "ul. Broniewskiego 15/8",
    // 53.139295, 23.128582
    coordinates: { lat: 53.139295, lng: 23.128582 },
    stats: {
      area: 26,
      persons: 2,
      flatType: "Apartament z Balkonem",
      beds: "1 Podwójne",
      floor: 2,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short: "Komfortowy apartament dla dwóch osób",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony 2 km. od centrum miasta. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. Oferujemy wygodną, rozkładaną sofę 160 cm. X 200 cm. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. W apartamencie znajdziesz 100 kanałów HD w różnych językach oraz szybki internet 30 MB/s. Apartament posiada także sprzęt niezbędny do prania i prasowania. Bezpłatny parking dla mieszkańców znajduje się przed domem.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4289","rateId":"3308","adults":"2","lang":"pl"})`,
  },

  {
    flat_id: 14,
    flat_name: "Apartament przy Katedrze",
    object_code: 27,
    number_of_photos: 31,
    address: "ul. Piłsudskiego 44/21",
    // 53.132960, 23.166145
    coordinates: { lat: 53.13296, lng: 23.166145 },
    stats: {
      area: 36,
      persons: 4,
      flatType: "Apartament z Sypialnią",
      beds: "2 Podwójne",
      floor: 0,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short: "Nowoczesny apartament w Centrum",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, 50 m. od ul. Kilińskiego - najpiękniejszej, zabytkowej białostockiej uliczki w ścisłym centrum. Pomimo położenia w centrum mieszkanie jest zaciszne, położone w sąsiedztwie skweru zadrzewionego starodrzewiem. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. Oferujemy łóżko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę o podobnych wymiarach. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prania i prasowania. W mieszkaniu jest smart TV oraz szybki internet WiFi.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4289","rateId":"3308","adults":"2","lang":"pl"})`,
  },

  {
    flat_id: 15,
    flat_name: "Apartament Centrum Zamenhofa 1",
    object_code: 28,
    number_of_photos: 42,
    address: "ul. Zamenhofa 1/16",
    // 53.133530143150246, 23.15911268666082
    coordinates: { lat: 53.13353, lng: 23.159112 },
    stats: {
      area: 46,
      persons: 4,
      flatType: "Apartament z Sypialnią",
      beds: "1 Podwójne, 2 Pojedyncze",
      floor: 2,
      rating_booking: 0,
      rating_airbnb: 0,
    }, // end of stats
    description_short: "Nowoczesny apartament w Centrum",
    description_long:
      "Doskonały apartament tuż po generalnym remoncie, położony w centrum miasta, zaledwie 50 m od Rynku Kościuszki – serca Białegostoku. Usytuowany przy ul. Zamenhofa 1, zapewniającej ciszę i spokój. To świetna lokalizacja zarówno dla turystów jak też podróżujących biznesowo. W pobliżu restauracje i puby z bogatą ofertą śniadań i obiadów. Dla amatorów domowego gotowania oddajemy do dyspozycji pełnowymiarową, kompletnie wyposażoną kuchnię oraz wygodny stół jadalniany. Oferujemy 2 łóżka sypialniane 100 cm. X 200 cm. z bardzo wygodnym materacem oraz rozkładaną, dwuosobowa sofę o podobnych wymiarach. Znajdziesz tu również świeżą pościel i ręczniki, kawę, herbatę, wodę. Apartament posiada także sprzęt niezbędny do prasowania. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4289","rateId":"3308","adults":"2","lang":"pl"})`,
  },
]; // end of jFlats array
