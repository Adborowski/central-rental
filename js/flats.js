console.log("[flats.js]");

$(".modalTrigger").on("click",function(e){
    
    var activeFlatCardId = $(this).parent().parent().attr("data-flat-id");

    $(".boxModalImage").on("click", function(){

        var clickedImageId = $(this).attr("data-photo-id");
        console.log(clickedImageId);
        openPhotoModal(activeFlatCardId, clickedImageId);

    });
    
});

$(".modalKiller").on("click", function(e){
    // killModal();
    window.location.href = "http://www.centralrental.pl/flats";
    
});

$(".photoModalKiller").on("click", function(e){
    killPhotoModal();
});

function showFlatCards(){
    console.log("showing flatCards");

    $("#boxFlatCards").html(""); // clear the #boxFlatCards first

    $.each(jFlats,function(index,jFlat){
        console.log(jFlat);

        $("#boxFlatCards").append(
            `
            <div class="cardFlat" data-flat-id="${index+1}">

            <div class="boxFlatPhoto">
                <img src="images/f${jFlat.flat_id}/mini/1.jpg">
            </div>

            <div class="boxFlatInfo">
                <div class="boxFlatTitle">${jFlat.flat_name}</div>
                <div class="boxFlatSubtitle">${jFlat.address}</div>
                <div class="boxFlatDescription"><div>${jFlat.description_short}</div></div>
                
            </div>

            <div class="boxFlatButtons">
                    <div class="boxFlatButton modalTrigger">Więcej</div>
            </div>

        </div> <!-- end of .cardFlat -->
            `
        )

    }) // end of $.each

    $(".modalTrigger").on("click", function(){
        var flatId = $(this).parent().parent().attr("data-flat-id");
        openModal(flatId);
    });

    
}

showFlatCards();

// this will give the card flats the power to open modal on click
// previously just the MORE button could do that
$(".cardFlat").on("click", function(e){

    var flatId = $(this).attr("data-flat-id");
    // openModal(flatId);

    let newUrl = " ";
    newUrl = window.location.href.toString();
    newUrl = newUrl+'?flat_id='+flatId;
    console.log("BITCH "+newUrl);
    window.location.href = newUrl;
    // window.location.href = window.location.href+'?flat_id='+flatId;

});

var boxModal = $("#boxModal");
var boxPhotoModal = $("#boxPhotoModal");

function freezeBodyScrolling(){
    $("body").addClass("noScroll");
}

function unfreezeBodyScrolling(){
    $("body").removeClass("noScroll");
}

$("#marker-modal").attr("data-flat-id")?openModal($("#marker-modal").attr("data-flat-id")):console.log("nope");

function openModal(flatId){

    calculateModalHeight();

    console.log("Opening modal with element-id: "+flatId);
    boxModal.css("z-index", 550).css("display","block");

    $("html, body").animate({
        scrollTop: 0
    }, );

    $.each(jFlats, function(index, jFlat) {

        if(jFlat.flat_id == flatId){ 
        // console.log("match found:");
        // console.log(jFlat);

            // populate title (which is the address)
            $("#boxModalTitle").html(jFlat.flat_name);
            $("#boxModalSubtitle").html(jFlat.address);

            // populate stats
            $("#stat-value-area").html(jFlat.stats.area+" m2");
            $("#stat-value-persons").html(jFlat.stats.persons);
            $("#stat-value-flatType").html(jFlat.stats.flatType);
            $("#stat-value-beds").html(jFlat.stats.beds);
            $("#stat-value-floor").html(jFlat.stats.floor);

            // this goes under the buttons, but only if there is a rating
            if(jFlat.stats.rating_airbnb){
                $("#rating-airbnb").html("Ocena: "+jFlat.stats.rating_airbnb+"/5");
            }

            if(jFlat.stats.rating_booking){
                $("#rating-booking").html("Ocena: "+jFlat.stats.rating_booking+"/10");
            }

            // clear the modal buttons then re-add
            $("#boxModalButtons").html("");
            $("#boxModalButtons").html(`
            <div style="text-decoration: none" data-object=`+jFlat.object_code+` class="i_do_sell_booking_widget_start boxModalButton" onclick="generateWidgetIdoSellBooking(this)">
                <span>Rezerwuj teraz / Book now / Бронируй теперь</span>
            </div>`);
        
            $(".boxModalButton").on("click", function(){
                fbq('track', 'Lead');
                eval(widgetRunCode);
            })

            // populate imagery
            $("#boxModalImages").html(""); // clear boxModalImages first
            for (var counter = 1; counter < jFlat.number_of_photos+1; counter++) { 

                $("#boxModalImages").append(`

                <div class="boxModalImage" data-photo-id="${counter}">
                <img src="images/f${jFlat.flat_id}/mini/${counter}.jpg">
                </div>

                `); // end of $("#boxModalImages")

            } // end of for loop

            // populate description (short for now)
            $("#boxModalDescription").html(jFlat.description_long);

            // empower images with photoModal
            $(".boxModalImage").on("click",function(){
                var photoId = $(this).attr("data-photo-id");
                var flatId = jFlat.flat_id;
                openPhotoModal(flatId, photoId);
            })

        } // end of if
    
      }); // end of $.each
}

function openPhotoModal(flatId, photoId){

    // killPhotoModal();
    freezeBodyScrolling();

    $("#boxPhotoModal").addClass("noScroll");

    calculateModalHeight();
    console.log("Opening photo modal for flat id: "+flatId+" and photo id: "+photoId);
    boxPhotoModal.css("z-index", 600).css("display","block");

    $("#boxPhotoModalImage").html(
        `
        <img id="photoModalImage" src="images/f${flatId}/${photoId}.jpg" data-flat-id="${flatId}" data-photo-id="${photoId}">
        `
    );

    // the photoModal should only adjust after a certain window width
    if ($(window).width() > 760 && $(window).width() > $(window).height()){
    adjustToPhotoOrientation();
    }

}

$(".boxArrowButton").on("click",function(){

    var changeValue = parseInt($(this).attr("data-change-value"));
    var flatId = parseInt($(this).parent().find("#boxPhotoModalImage").find("img").attr("data-flat-id"));
    var photoId = parseInt($(this).parent().find("#boxPhotoModalImage").find("img").attr("data-photo-id"));

    if (photoId <= 1 && changeValue == -1){

        console.log("end of scroll (left)");
        $(".boxArrowButton.left").css("opacity", "0.25");
        $(".boxArrowButton.right").css("opacity", "1");
        // scrollPhotoModal(flatId, photoId, changeValue);

    } else if (photoId >= jFlats[flatId-1].number_of_photos && changeValue == 1) {
        
        console.log("end of scroll (right)");
        $(".boxArrowButton.left").css("opacity", "1");
        $(".boxArrowButton.right").css("opacity", "0.25");
        // scrollPhotoModal(flatId, photoId, changeValue);

    } else {
        $(".boxArrowButton.left").css("opacity", "1");
        $(".boxArrowButton.right").css("opacity", "1");
        // console.log("Scrolling photo modal to flat "+flatId + " and photo " + photoId);
        photoId = photoId + changeValue;
        scrollPhotoModal(flatId, photoId, changeValue);

    }
})

function adjustToPhotoOrientation(){

// the photoModal adjusts its CSS based on what photo it receives (portrait/landscape)
var photoModalImageWidth = photoModalImage.naturalWidth;
var photoModalImageHeight = photoModalImage.naturalHeight;

if (photoModalImageWidth > photoModalImageHeight){

    console.log("Orientation: Landscape, Image Size: " + photoModalImageWidth + " x " + photoModalImageHeight);

    // $("#photoModalImage").css("border", "5px solid red");
    $("#photoModalImage").css("height", "auto");
    // $("#photoModalImage").css("max-height", "95vh");
    $("#photoModalImage").css("width", "70%");
    // $("#photoModalImage").css("max-width", "98vw");
    // $("#photoModalImage").css("height", "100%");
    
    // $("#boxPhotoModalImage").css("padding-top", "10px");
    // $("#boxPhotoModalImage").css("padding-bottom", "10px");

} else {

    console.log("Orientation: Portrait, Image Size: " + photoModalImageWidth + " x " + photoModalImageHeight);
    // $("#photoModalImage").css("border", "5px solid blue");
    // $("#photoModalImage").css("width", "auto");
    $("#photoModalImage").css("height", "95%");
    $("#photoModalImage").css("width", "auto");
    
    // $("#photoModalImage").css("max-height", "100vh");
    
    // $("#boxPhotoModalImage").css("padding-top", "0");
    // $("#boxPhotoModalImage").css("padding-bottom", "0");

}

}

function scrollPhotoModal(flatId, photoId, changeValue){

    openPhotoModal(flatId, photoId);
        
}

function killModal(){
    console.log("Killing Modal");
    boxModal.css("z-index", -100).css("display","none");
    // window.history.pushState("Central Rental", "Central Rental", "/cr_web/flats.php");
}

function killPhotoModal(){

    unfreezeBodyScrolling();
    console.log("Killing Photo Modal");
    boxPhotoModal.css("z-index", -200).css("display","none");
    // window.history.pushState("Central Rental", "Central Rental", "/cr_web/flats.php");
}

var autoModalController = location.search.split('showFlat=')[1];

// hide the GET request
if (autoModalController){
        console.log("Found autoModalController, opening modal with flat: "+autoModalController);
        openModal(autoModalController);

        window.history.pushState("Central Rental", "Central Rental", "flats.php");
        
}

