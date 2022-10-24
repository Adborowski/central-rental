<?php
include "components/top.php";
?>

<script>
fbq('track', 'FindLocation');
</script>

<?php
include "components/navigation.php";
?>

<div id="boxMain" class="boxMainMap">
    <!-- above id / class set up is backwards -->

    <div id="boxMap">

        <div id="map"></div>

    </div>

</div>

<script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbn17B9FO0UXQDZaWCSKwwc7FoGwRQqpc&callback=initMap" type="text/javascript"></script>

<?php
include "components/bottom.php";
?>


