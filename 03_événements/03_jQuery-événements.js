// console.log("bonjour");
$(function () {
  // ici mon code jquery

  // ----------------------- EVENEMENT MOUSEOVER ------------------------

  $(".zone1").on("mouseover", function () {
    $(this).css("background", "IndianRed");
    // $(this) === $(".zone1")
    $("#info").text("je suis dans la zone 1");
  });

  // ----------------------- EVENEMENT MOUSEMOVE ------------------------

  $(".zone2").on("mousemove", function (event) {
    $(this).text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    $("#info").text("je suis dans la zone 2");
  });

  // ----------------------------------------EVENEMENT MOUSEOUT-----------//-

  $(".zone3").on("mouseout", function () {
    $(this).css("background", "red");
    $("#info").text("je suis sortie dans la zone 3");
  });

  // -----------------------------------EVENMENT MOUSEETER ET MOUSLEAVE-----------//
  $(".zone4").on("mouseenter", function () {
    $(this).css("background", "red");
    $("#info").text("je suis entré dans  la zone 4");
  });
  $(".zone4").on("mouseleave", function () {
    $(this).css("background", "black");
    $("#info").text("je suis sortie la zone 4");
  });

  // -------------------------------EVENEMNT MOUSEUP MOUSEDOWN MOUSEUP-----------------//

  $(".zone5").on("mouseup", function () {
    //  au relachement du bputon est enfoncé
    $(this).css("background", "red");
    $("#info").text("je suis sortie la zone 5");
  });
  $(".zone6").on("mousedown", function () {
    // au relachement du bouton de sourie
    $(this).css("background", "khaki");
    $("#info").text("je suis  dans  la zone 6");
  });
  $(".zone6").on("mouseup", function () {
    // au relachement du bouton de sourie
    $(this).css("background", "IdianRed");
    $("#info").text("je suis dans  la zone 6");
  });
  // -----------------------EVENEMENT CLICK----------------------//
  $(".zone7").on("click", function () {
    // au relachement du bouton de sourtie
    $(this).css("background", "khaki");
    $("#info").text("je suis dans la zone 7");
  });
  // ----------------------EVENEMENT DBLCLICK------------------------------//
  $(".zone8").on("dblclick", function () {
    $(this).css("background", "green");
    $("#info").text("je suis dans la zone 8");
  });

  // ----------------------EVENEMENT CLICK DROIT------------------------------//
  $(".zone9").contextmenu(function () {
    $(this).css("background", "violet");
    $("#info").text("je suis dans la zone 9");
  });
  // ------------------EVENEMENT BLUR-----------------------//
  // lorsque nous allons cliquer ailleurs aprés avoir cliquer sur l'élément

  // ----------------------EVENEMENT DBLCLICK------------------------------//
  $(".zone10").on("blur", function () {
    $(this).css("background", "green");
    $("#info").text("je suis dans la zone 10");
  });

  // ---------------------EVENEMENT CHANGE------------------------------//
  // LORSQUE nous allons changer l'option d'un element select
  $(".zone11").on("change", function () {
    $(this).css("background", "yellow");
    $("#info").text("je suis dans la zone 11");
  });

  // :------------------------------EVENEMENT KEYDOWN-------------------------//
  $(".zone12").on("keydown", function () {
    $(this).css("background", "blue");
    $("#info").text("je suis dans la zone 12");
  });
  // :------------------------------EVENEMENT KEYUP(relacher une touche)------------------------//
  $(".zone12").on("keyUp", function () {
    $(this).css("background", "blue");
    $("#info").text("je suis dans la zone 12");
  });

  // -----------------------EVENEMENT AU SCROLL------------------------//

  $(window).on("scroll", function () {
    $("#info").css("background", "lightgreen");
    $("#info").text("je scoll");
  });
});
