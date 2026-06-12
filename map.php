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

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<?php
include "components/bottom.php";
?>


