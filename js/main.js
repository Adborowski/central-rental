console.log("[main.js]");

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-745944823/ZAQDCOT36owCEPft2OMC",
    event_callback: callback,
  });
  return false;
}

$(".navButton").on("click", function () {
  console.log(this);
  var target = this.getAttribute("data-target");

  if (target != null) {
    console.log("target is not null");
    window.location.href = target + ".php";
  }
});

$("#btnBookNow").on("click", function () {
  gtag_report_conversion("http://centralrental.pl");
});

$(".boxModalButton").on("click", function () {
  gtag_report_conversion("http://centralrental.pl");
});

$(".collapserHeader").on("click", function () {
  console.log("toggling collapser");
  var collapserContent = $(this).next();
  console.log($(this).next().slideToggle());
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
});

$("#btnCallToAction").on("click", function () {
  window.location.href = "flats.php";
});

function calculateModalHeight() {
  // console.log("calculating");

  var windowHeight = $(window).height();
  var navBarHeight = $("#navBar").height();

  // console.log(windowHeight);
  // console.log(navBarHeight);

  var modalHeight = windowHeight;
  // $("#boxModal").css("height", modalHeight);
  // $("#boxPhotoModal").css("height", modalHeight);
}

$(".boxMainMap").css("padding-top", 0 + "px");

function calculateMapSize() {
  console.log("Calculating Map Size");

  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  var desktopNavBarHeight = $("#navBar").height();
  console.log("desktop navbar height: " + desktopNavBarHeight);
  var desktopNavBarWidth = $("#navBar").width();

  var mobileNavBarHeight = $("#boxMobileBar").height();

  var vSpaceForMap = windowHeight - desktopNavBarHeight;
  // the hard coded number is a result of a series of mistakes
  // fix if possible

  var hSpaceForMap = windowWidth;

  console.log("spaceForMap: " + vSpaceForMap);

  $(".boxMainMap").css("height", vSpaceForMap + "px");
  // $(".boxMainMap").css("width", hSpaceForMap+"px");
  // $(".boxMainMap").css("backgroundColor", "red");
}

if ($(window).width() > 768) {
  calculateMapSize();
}

var isOpen_burgerMenu = false; // default position
var burgerMenuPanel = $("#navPanel");
burgerMenuPanel.slideUp(1);
refreshBurgerMenu();

function refreshBurgerMenu() {
  console.log("toggling burger menu");
  console.log(burgerMenuPanel);

  if (isOpen_burgerMenu == true) {
    burgerMenuPanel.slideDown(300);
    burgerMenuPanel.css("display", "flex");
    isOpen_burgerMenu = !isOpen_burgerMenu;
  } else {
    burgerMenuPanel.slideUp(300);
    isOpen_burgerMenu = !isOpen_burgerMenu;
  }
}

$("#burgerButton").on("click", function () {
  refreshBurgerMenu();
});
