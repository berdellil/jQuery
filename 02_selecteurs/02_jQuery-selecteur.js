// console.log("jQuery est ici"); //
//  $(document).ready(function(){})
// une autre facon d'écrire la fonction d'attente de chargement de la page

$(function () {
  // ici tout mon  code jQuery
  //   $ permet d'attraper un élèment
  let maBaliseSpan = $("span");
  console.log(maBaliseSpan);
  $(maBaliseSpan).css("color,orange");
  maBaliseSpan.css("background", "orange");
});
// --------------------------------------------------Selection ID---------------------------------//

let monID = $("#masection");
console.log(monID);
$(monID).css("color", "green");

// ----------------------------------------------Selction classe---------------------------------//

let maClasse = $(".voiture");
console.log(maClasse);
$(maClasse.css("color", "red"));
$(maClasse).first().css("color", "blue");
$(maClasse).last().css("color", "green");
$(maClasse).eq(2).css("color", " DarkTurquoise");

// -------------------------------------------------------Selection Multiple-------------------------------------//

let mesElements = $("h1,article,aside"); //je selectionne les elements h1 article aside
console.log(mesElements);
$(mesElements).css("color", "MediumVioletRed ");

// -------------------------------------------------------Selection des parents ou ancetre----------------//

$("li").parent().css("border", "40px solid red"); //on selectionne le parent de nos li
$("li").parents("div").css("border"); //on selectionne les ancêtres div  du li

// ----------------------------------Selection des Enfants ou Decendant-----------------------------//
$(".conteneur").children().css("font-weight", "700");
$(".conteneur").children("#enfants").css("color", "red");
$(".conteneur").find(".find").css("border", "5px dashed purple");

//   ---------------------------------------Selectonne

$("li:first-child".siblings().css("text-align", "right"));

// -------- RESUME DES PRINCIPAUX SELECTEURS
/*
      	selection de balise : $('span')
      	selection d'un #id : $('#id')
      	selection d'une classe .class : $('.classe')
      	selection d'un élément par lui-même : $(this)
      	selection d'un élément par sa balise et son type : $('input:text')
      	selection d'un élément par son type (tous les types radio) : $(':radio')
      	selection d'un élément par son attribut : $('img[alt]')
      	selection d'un élément par son attribut (tous les attributs) : $('[alt]')
      	selection d'un élément par le nom de l’attribut ET sa valeur : $("img[title='paris']")
      	sélectionner plusieurs sélecteurs en même temps : $("h1, p, #id")
      */
