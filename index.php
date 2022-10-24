<?php
include "components/top.php";
?>

<?php
include "components/navigation.php";
?>

<div id="boxMain" class="boxMainIndex">

    <div class="boxTitle">Najlepsze adresy w mieście gotowe na nowych gości</div>
    <div class="boxText">

    Oferujemy mieszkania do wynajęcia w najlepszych lokalizacjach w Białymstoku. 
    Obsługujemy wynajem krótko- oraz długoterminowy. Każde z naszych mieszkań jest po dogłębnym, nadzorowanym przez nas remoncie i w pełni urządzone we współczesnym stylu. Serdecznie zapraszamy.

    </div>

    <div class="boxBackgroundImage">
        <img src="images/bialystok.png" id="imgBialystok"></img>      
    </div>

    <div class="boxFrontPageButtons">  
        
        <div id="btnCallToAction" class="btn btnFrontPage" ><span>Poznaj Ofertę</span></div>

        <div 
            id="btnBookNow" 
            data-client="8134" 
            data-show-other-objects="true" 
            class="btn btnFrontPage btnTripleLine"
            onclick="generateWidgetIdoSellBooking(this);">

            <span style="">Rezerwuj teraz</span> 
            <span style="">Book now</span> 
            <span style="">Бронируй теперь</span></div>

        </div>
    
    <div class="boxCollapser">
        <div class="collapserHeader">Więcej</div>
        <div class="collapserContent">

            <p>Central Rental to rodzinna firma zajmująca się wyłącznie wynajmem mieszkań na każdy termin. Działamy w Białymstoku. Zarządzamy apartamentami, które stanowią własność firmy. Wszystkie zostały starannie zaprojektowane, wyremontowane i kompletnie wyposażone. Sami często podróżujemy i nasze mieszkania są odzwierciedleniem naszych wymagań i oczekiwań.</p>
            
            <p>Stawiamy na czystość, funkcjonalność i prostotę. Nasze apartamenty są wyposażone we wszystkie potrzebne nawet na najdłuższy pobyt elementy. Mają w sobie dużo domowego ciepła, którego niejednokrotnie brak pokojom hotelowym. Mieszkania usytuowane są w ścisłym centrum miasta, co pozwala na korzystanie z jego uroków bez korzystania z samochodu.</p>

            <p>Zamieszkaj u nas - poczuj się jak w domu.</p>
        
        </div>
    </div>
</div>

<?php
include "components/bottom.php";
?>