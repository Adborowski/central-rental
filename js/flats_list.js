// I've emptied this to disable bookings
// var jFlats = [];

// this one is for specific flat, and works only in conjunction with the right HTML data-object attribute
let widgetRunCode = `
document.addEventListener("DOMContentLoaded",function(event){iai_booking_button({"langNew":"0","langIdCodes":{"1":"pl","pl":1,"135":"ru","ru":135,"2":"en","en":2,"3":"de","de":3,"149":"es","es":149},"literalsInLang":{"1":{"label1":"Od","label2":"Do","label3":"Osoby","label4":"Pokoje","button":"Sprawd\u017a dost\u0119pno\u015b\u0107","days":["Nd","Pon","Wt","\u015ar","Czw","Pt","Sob"],"months":["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017adziernik","Listopad","Grudzie\u0144"],"trigger":"Rezerwacja online"},"135":{"label1":"From","label2":"To","label3":"People","label4":"Rooms","button":"Check availability","days":["\u0412\u0421","\u041f\u041d","\u0412\u0422","\u0421\u0420","\u0427\u0422","\u041f\u0422","\u0421\u0411"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"trigger":"Online Reservation"},"2":{"label1":"From","label2":"To","label3":"People","label4":"Rooms","button":"Check availability","days":["S","M","T","W","T","F","S"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"trigger":"Online Reservation"},"3":{"label1":null,"label2":null,"label3":null,"label4":null,"button":null,"days":["So","Mo","Di","Mi","Do","Fr","Sa"],"months":["Januar","Februar","M\u00e4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"trigger":"Online Reservation"},"149":{"label1":null,"label2":null,"label3":null,"label4":null,"button":null,"days":["S","M","T","W","T","F","S"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"trigger":"Online Reservation"}}});});
`

// this is the actual
var jFlats = [
    {
         flat_id:1,
         object_code: 13,
         flat_name: 'Apartament "Bluesa"',
         address:"Rynek Ko??ciuszki 15B/25",
         coordinates: {lat: 53.131260, lng: 23.158211},
         number_of_photos: 40,
         stats: {
             area: 32,
             persons: 4,
             flatType: "Studio z Balkonem",
             beds: "2 podw??jne",
             floor: 2,
             rating_booking: "10",
             rating_airbnb: "5"
         }, // end of stats

         description_short: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w ??cis??ym centrum miasta. Kompletnie wyposa??ony na kr??tki i d??ugi pobyt w ka??dym celu.",

         description_long:"Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 50 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. Usytuowany przy zadrzewionej Alei Bluesa, zapewniaj??cej cisz?? i spok??j. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. <br><br> W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. <br><br> Oferujemy ??????ko sypialniane 160 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? o podobnych wymiarach. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prania i prasowania. Bezp??atny parking dla mieszka??c??w odgrodzony szlabanem znajduje si?? w szczycie budynku. Serdecznie zapraszamy.",
        // link_booking, link_airbnb, link_direct are DEPRECATED
         link_booking: "",

         link_airbnb: "",

         link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3890','rateId':'3308','adults':'1','lang':'pl'})`
         // change this before going live, this won't work online
 
    },
    {
         flat_id:2,
         flat_name: 'Apartament "Cichy"',
         object_code: 14,
         number_of_photos: 48,
         address:"ul. Wary??skiego 1A/5",
         coordinates: {lat: 53.134492, lng: 23.150180},
         stats: {
            area: 32,
            persons: 4,
            flatType: "Studio",
            beds: "2 Podw??jne",
            floor: 1,
            rating_booking: "10",
            rating_airbnb: "5"
         }, // end of stats
         description_short: "Komfortowy apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta. Kompletnie wyposa??ony o wysokim standardzie. Gwarantujemy spok??j i czysto????.",

         description_long:"Komfortowy apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 50 m od ulicy Lipowej. Usytuowany w drugiej linii zabudowy gwarantuje cisz?? i spok??j. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo.<br><br> Apartament oferuje szybki internet do 50 Mb/s, tv kablow?? - 70 kana????w HD oraz kana??y w j??zyku bia??oruskim i angielskim. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany.<br><br> Oferujemy ??????ko sypialniane 160 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? o podobnych wymiarach. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prania i prasowania. Serdecznie zapraszamy.",
        // link_booking, link_airbnb, link_direct are DEPRECATED
         link_booking: "",
         link_airbnb: "",
         link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3891','rateId':'3308','adults':'1','lang':'pl'})`
    },

    //53.137481, 23.147653
    //53.137552, 23.147629
    {
        flat_id: 3,
        flat_name: 'Apartament "Komfortowy"',
        object_code: 15,
        number_of_photos: 45,
        address:"ul. Proletariacka 2A/12",
        coordinates: {lat: 53.137552, lng: 23.147629},
        stats: {
            area: 32,
            persons: 4,
            flatType: "Apartament z Sypialni??<br>i Balkonem",
            beds: "2 Podw??jne",
            floor: 2,
            rating_booking: "10",
            rating_airbnb: "5"
        }, // end of stats
        description_short: "Komfortowy apartament tu?? po generalnym remoncie, po??o??ony blisko centrum miasta. Gwarancja komfortu, odpoczynku i czysto??ci. Zapraszamy!",
        description_long: "Komfortowy apartament tu?? po generalnym remoncie, po??o??ony blisko centrum miasta, zaledwie 550 m od ulicy Lipowej. Usytuowany na spokojnym osiedlu gwarantuje cisz?? i spok??j. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. Apartament oferuje szybki internet do 50 Mb/s, tv kablow?? - 70 kana????w HD oraz kana??y w j??zyku bia??oruskim i angielskim. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. Oferujemy ??????ko sypialniane 160 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? o podobnych wymiarach. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prania i prasowania. Serdecznie zapraszamy.",
        // link_booking, link_airbnb, link_direct are DEPRECATED
        link_booking: "",
        link_airbnb: "",
        link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3892','rateId':'3308','adults':'1','lang':'pl'})`
    },

   {
    flat_id: 4,
    flat_name: 'Apartament "Przytulny"',
    object_code: 20,
    number_of_photos: 66,
    address:"ul. Legionowa 2/1 m.2",
    // 53.131700, 23.162410
    coordinates: {lat: 53.131700, lng: 23.162410},
    stats: {
        area: 25,
        persons: 3,
        flatType: "Apartament z Sypialni??",
        beds: "2 Podw??jne",
        floor: 0,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Doskona??y apartament po generalnym remoncie, po??o??ony 50 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. Usytuowany na obrze??ach parku Pa??acu Branickich - per??y turystycznej Podlasia.",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 50 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. Usytuowany na obrze??ach parku Pa??acu Branickich - per??y turystycznej Podlasia. Wystarczy przej???? ulic?? i znajdujemy si?? w parku. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. Oferujemy ??????ko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? o podobnych wymiarach. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prasowania. Bezp??atny parking dla mieszka??c??w znajduje si?? w podw??rku. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3893','rateId':'3308','adults':'1','lang':'pl'})`
},
{
    flat_id: 5,
    flat_name: 'Apartament "Kameralny"',
    object_code: 21,
    number_of_photos: 57,
    address:"ul. Legionowa 2/1 m.19",
    // 53.131700, 23.162410
    coordinates: {lat: 53.13171, lng: 23.16248},
    stats: {
        area: 25,
        persons: 3,
        flatType: "Apartament z Sypialni??<br>i Balkonem",
        beds: "2 Podw??jne",
        floor: 1,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Doskona??y apartament po generalnym remoncie, po??o??ony 50 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. Usytuowany na obrze??ach parku Pa??acu Branickich - per??y turystycznej Podlasia.",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 50 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. Usytuowany na obrze??ach parku Pa??acu Branickich - per??y turystycznej Podlasia. Wystarczy przej???? ulic?? i znajdujemy si?? w parku. Mieszkanie jest na pierwszym pi??trze budynku, sypialnia posiada balkon z widokiem na park pa??acowy. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. Oferujemy ??????ko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? o podobnych wymiarach. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prasowania. Bezp??atny parking dla mieszka??c??w znajduje si?? w podw??rku. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'3895','rateId':'3308','adults':'1','lang':'pl'})`
},
{
    flat_id: 6,
    flat_name: 'Apartament "Uroczy"',
    object_code: 12,
    number_of_photos: 44,
    address:"ul. Nowy ??wiat 18 m. 8",
    // 53.135568, 23.156661
    coordinates: {lat: 53.13546, lng: 23.15671},
    stats: {
        area: 25,
        persons: 3,
        flatType: "Studio z Balkonem",
        beds: "2 Podw??jne<br>1 Pojedyncze",
        floor: 1,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Uroczy apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 450 m od Rynku Ko??ciuszki ??? serca Bia??egostoku.",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 450 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. Usytuowany w cichej, zadrzewionej okolicy, zapewniaj??cej cisz?? i spok??j. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji dobrze wyposa??ony aneks kuchenny, oraz wygodny st???? jadalniany. Oferujemy dwuosobow??, rozk??adan?? sof?? oraz jednoosobowe, rozk??adane ??????ko. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prasowania.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'4127','rateId':'3308','adults':'1','lang':'pl'})`
},
{
    flat_id: 7,
    flat_name: 'Apartament "Wygodny"',
    object_code: 19,
    number_of_photos: 41,
    address:"ul. Nowy ??wiat 13 m. 18",
    // 53.1355053,23.1560445
    coordinates: {lat: 53.1355053, lng: 23.1560445},
    stats: {
        area: 25,
        persons: 3,
        flatType: "Studio z Balkonem",
        beds: "2 Podw??jne<br>1 Pojedyncze",
        floor: 3,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Uroczy apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 450 m od Rynku Ko??ciuszki ??? serca Bia??egostoku.",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 450 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. Usytuowany w cichej, zadrzewionej okolicy, zapewniaj??cej cisz?? i spok??j. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji dobrze wyposa??ony aneks kuchenny, oraz wygodny st???? jadalniany. Oferujemy dwuosobow??, rozk??adan?? sof?? oraz jednoosobowe, rozk??adane ??????ko. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prasowania.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({'hotelId':'694','roomId':'4135','rateId':'3308','adults':'1','lang':'pl'})`
},
{
    flat_id: 8,
    flat_name: 'Apartament "Przy Rynku"',
    object_code: 16,
    number_of_photos: 49,
    address:"ul. Sienkiewicza 6/7",
    // 53.133194, 23.161533
    coordinates: {lat: 53.133194, lng: 23.161533},
    stats: {
        area: 50,
        persons: 4,
        flatType: "Apartament z Sypialni??",
        beds: "1 Podw??jne<br>2 Pojedyncze",
        floor: 2,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Apartament w ??cis??ym centrum miasta 500 m. od Rynku Ko??ciuszki",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 50 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. W tym przestronnym apartamencie znajdziesz salon, sypialni??, kuchni?? i ??azienk??. Oferujemy 2 ??????ka sypialniane 90 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? 160x200 cm. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prasowania. Bezp??atny parking dla mieszka??c??w odgrodzony szlabanem znajduje si?? w podw??rku. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4256","rateId":"3308","adults":"2","lang":"pl"})`
},
{
    flat_id: 9,
    flat_name: 'Apartament "Centrum"',
    object_code: 18,
    number_of_photos: 39,
    address:"ul. Lipowa 18/49",
    // 53.1355053,23.1560445
    coordinates: {lat: 53.133772, lng: 23.151112},
    stats: {
        area: 40,
        persons: 4,
        flatType: "Apartament z Sypialni??",
        beds: "2 Podw??jne",
        floor: 3,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Apartament w ??cis??ym centrum miasta 500 m. od Rynku Ko??ciuszki",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 500 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. W tym przestronnym apartamencie znajdziesz salon, sypialni??, kuchni?? i ??azienk??. Oferujemy ??????ko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? 160x200 cm. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prasowania. W mieszkaniu dost??pne jest szybkie WiFi oraz ponad 100 kana????w jako??ci HD.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4257","rateId":"3308","adults":"2","lang":"pl"})`
},
{
    flat_id: 10,
    flat_name: 'Apartament "??r??dmie??cie"',
    object_code: 17,
    number_of_photos: 50,
    address:"ul. Sienkiewicza 1/25",
    // 53.131598, 23.160396
    coordinates: {lat: 53.131598, lng: 23.160396},
    stats: {
        area: 50,
        persons: 4,
        flatType: "Apartament z 2 Sypialniami",
        beds: "2 Podw??jne",
        floor: 1,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Apartament w ??cis??ym centrum miasta tu?? przy Rynku Ko??ciuszki",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, zaledwie 50 m od Rynku Ko??ciuszki ??? serca Bia??egostoku. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. W tym przestronnym apartamencie znajdziesz dwie sypialnie, kuchni?? i ??azienk??. Oferujemy ??????ka sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem. Mieszkanie jest wysokie - 3 m. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prasowania oraz prania. W mieszkaniu dost??pne jest szybkie WiFi oraz ponad 100 kana????w jako??ci HD.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4258","rateId":"3308","adults":"2","lang":"pl"})`
},
{
    flat_id: 11,
    flat_name: 'Apartament "Rodzinny"',
    object_code: 11,
    number_of_photos: 44,
    address:"ul. Chrobrego 16/41",
    // 53.129649, 23.185526
    coordinates: {lat: 53.129649, lng: 23.185526},
    stats: {
        area: 38,
        persons: 4,
        flatType: "Apartament z Sypialni??",
        beds: "2 Podw??jne",
        floor: 1,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Komfortowy apartament niedaleko od centrum miasta.",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony na osiedlu Piasta I, oddalony 2 km. od centrum miasta. Jest to osiedle z bardzo dobr?? infrastruktur?? oraz du???? ilo??ci?? zieleni. W pobli??u mieszkania znajdziesz wiele sklep??w spo??ywczych i bar??w. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. Oferujemy ??????ko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? o podobnych wymiarach. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prania i prasowania. Przy bloku jest du??y, bezp??atny parking.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4289","rateId":"3308","adults":"2","lang":"pl"})`
},

{
    flat_id: 12,
    flat_name: 'Apartament "W sercu miasta"',
    object_code: 10,
    number_of_photos: 41,
    address:"ul. Lipowa 1/11",
    // 53.132579, 23.156768
    coordinates: {lat: 53.132579, lng: 23.156768},
    stats: {
        area: 34,
        persons: 4,
        flatType: "Apartament z Sypialni??",
        beds: "2 Podw??jne",
        floor: 2,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Komfortowy apartament w sercu miasta.",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, w Rynku Ko??ciuszki ??? sercu Bia??egostoku. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. Oferujemy ??????ko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? o podobnych wymiarach. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prania i prasowania. Serdecznie zapraszamy.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4289","rateId":"3308","adults":"2","lang":"pl"})`
},

{
    flat_id: 13,
    flat_name: 'Apartament Broniewskiego 15',
    object_code: 25,
    number_of_photos: 40,
    address:"ul. Broniewskiego 15/8",
    // 53.139295, 23.128582
    coordinates: {lat: 53.139295, lng: 23.128582},
    stats: {
        area: 26,
        persons: 2,
        flatType: "Apartament z Balkonem",
        beds: "1 Podw??jne",
        floor: 2,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Komfortowy apartament dla dw??ch os??b",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony 2 km. od centrum miasta. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. Oferujemy wygodn??, rozk??adan?? sof?? 160 cm. X 200 cm. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. W apartamencie znajdziesz 100 kana????w HD w r????nych j??zykach oraz szybki internet 30 MB/s. Apartament posiada tak??e sprz??t niezb??dny do prania i prasowania. Bezp??atny parking dla mieszka??c??w znajduje si?? przed domem.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4289","rateId":"3308","adults":"2","lang":"pl"})`
},

{
    flat_id: 14,
    flat_name: 'Apartament przy Katedrze',
    object_code: 27,
    number_of_photos: 31,
    address:"ul. Pi??sudskiego 44/21",
    // 53.139295, 23.128582
    coordinates: {lat: 53.139295, lng: 23.128582},
    stats: {
        area: 36,
        persons: 4,
        flatType: "Apartament z Sypialni??",
        beds: "2 Podw??jne",
        floor: 0,
        rating_booking: 0,
        rating_airbnb: 0
    }, // end of stats
    description_short: "Nowoczesny apartament w Centrum",
    description_long: "Doskona??y apartament tu?? po generalnym remoncie, po??o??ony w centrum miasta, 50 m. od ul. Kili??skiego - najpi??kniejszej, zabytkowej bia??ostockiej uliczki w ??cis??ym centrum. Pomimo po??o??enia w centrum mieszkanie jest zaciszne, po??o??one w s??siedztwie skweru zadrzewionego starodrzewiem. To ??wietna lokalizacja zar??wno dla turyst??w jak te?? podr????uj??cych biznesowo. W pobli??u restauracje i puby z bogat?? ofert?? ??niada?? i obiad??w. Dla amator??w domowego gotowania oddajemy do dyspozycji pe??nowymiarow??, kompletnie wyposa??on?? kuchni?? oraz wygodny st???? jadalniany. Oferujemy ??????ko sypialniane 140 cm. X 200 cm. z bardzo wygodnym materacem oraz rozk??adan??, dwuosobowa sof?? o podobnych wymiarach. Znajdziesz tu r??wnie?? ??wie???? po??ciel i r??czniki, kaw??, herbat??, wod??. Apartament posiada tak??e sprz??t niezb??dny do prania i prasowania. W mieszkaniu jest smart TV oraz szybki internet WiFi.",
    // link_booking, link_airbnb, link_direct are DEPRECATED
    link_booking: "",
    link_airbnb: "",
    link_direct: `javascript:premierSearch.show({"hotelId":"694","roomId":"4289","rateId":"3308","adults":"2","lang":"pl"})`
}


   
 ]; // end of jFlats array