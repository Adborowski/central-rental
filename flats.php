<?php
include "components/top.php";
?>

<script>
fbq('track', 'ViewContent');
</script>

<?php
include "components/navigation.php";
?>

<?php

if (!empty($_GET["flat_id"]))

  echo "<div id='marker-modal' data-flat-id='".$_GET["flat_id"]."'></div>"
  
?>


<script defer src="js/flats.js"></script>

<div id="boxBackground"></div>

<div id="boxMain">

    <div id="boxFlatCards">

    </div> <!-- end of #boxFlatCards -->

</div> <!-- end of #boxMain -->


<?php
include "components/modal.php";
include "components/photoModal.php";
include "components/bottom.php";
?>


