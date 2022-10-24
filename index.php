<?php
include "components/top.php";
?>

<?php
include "components/navigation.php";
?>

<div id="boxMain" class="boxMainIndex">

    <div class="boxTitle">Najlepsze adresy w mieście gotowe na nowych gości</div>
    <div class="boxText">

    Oferujemy krótki i długi wynajem mieszkań w najlepszych lokalizacjach w Białymstoku. 
    Każde z nich jest po dogłębnym, nadzorowanym przez nas remoncie i w pełni urządzone we współczesnym stylu. Serdecznie zapraszamy.

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
</div>

<?php
include "components/bottom.php";
?>