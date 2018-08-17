document.addEventListener("DOMContentLoaded", function(event) {
  var myIngredients = [ {name: "Mąka", id: 0, price_all: 1.99},
                        {name: "Jajka", id: 1, price_all: 6},
                        {name: "Cukier", id: 2, price_all: 2.99},
                        {name: "Olej", id: 3, price_all: 5.45},
                        {name: "Pomarańcza", id: 4, price_all: 2.99},
                        {name: "Galaretka", id: 5, price_all: 1.99},
                        {name: "Mascarpone", id: 6, price_all: 5},
                        {name: "Kremówka", id: 7, price_all: 4},
                        {name: "Ananasy", id: 8, price_all: 3.99},
                        {name: "Marchew", id: 9, price_all: 1.5},
                        {name: "Czekolada", id: 10, price_all: 3.5},
                        {name: "Cynamon", id: 11, price_all: 1.33},
                        {name: "Mąka Ziemniaczana", id: 12, price_all: 1.95},
                        {name: "Proszek", id: 13, price_all: 0.58},
                        {name: "Soda", id: 14, price_all: 0.9},
                        {name: "Orzechy Włoskie", id: 15, price_all: 10},
                        {name: "Karton", id: 16, price_all: 5},
                        {name: "Podkładka", id: 17, price_all: 1},
                        {name: "Masło", id: 18, price_all: 2.5},
                        {name: "Mleko", id: 19, price_all: 1.99},
                        {name: "Cukier puder", id: 20, price_all: 2.7},
                        {name: "Nutella", id: 21, price_all: 12},
                        {name: "Kakao", id: 22, price_all: 5},
                        {name: "Orzechy Laskowe", id: 23, price_all: 6.59},
                        {name: "Mielone Orzechy", id: 24, price_all: 18.09},
                        {name: "Jogurt", id: 25, price_all: 1.7},
                        {name: "Maślanka", id: 26, price_all: 1.79},
                        {name: "Biszkopty", id: 27, price_all: 4.49},
                        {name: "Barwnik", id: 28, price_all: 5},
                        {name: "Maliny", id: 29, price_all: 7.5},
                        {name: "Biała czekolada", id: 30, price_all: 3.5},
                        {name: "Truskawki", id: 31, price_all: 8},
                        {name: "Wiórki Kokosowe", id: 17, price_all: 2.39},
                        {name: "Śliwki", id: 17, price_all: 3},
                        {name: "Kruszonka", id: 17, price_all: 6},
                        {name: "Ser biały", id: 17, price_all: 10},
                        {name: "Budyń", id: 17, price_all: 1},
                        {name: "Miód", id: 17, price_all: 15},
                        {name: "Imbir", id: 17, price_all: 1.19},
                        {name: "Goździki", id: 17, price_all: 1.49},
                        {name: "Ziele Angielskie", id: 17, price_all: 1.29},
                        {name: "Kardamon", id: 17, price_all: 1.49},
                        {name: "Anyż", id: 17, price_all: 4.39},
                        {name: "Gałka", id: 17, price_all: 1.19},
                        {name: "Powidła", id: 17, price_all: 5.99},
                        {name: "Przyprawa do piernika", id: 17, price_all: 3},
                        {name: "Śmietana", id: 17, price_all: 1.5},
                        {name: "Kajmak", id: 17, price_all: 7},
                        {name: "Orzechy ziemne", id: 17, price_all: 7},
                        {name: "Migdały", id: 17, price_all: 8},
                        {name: "Jabłka", id: 17, price_all: 2},
                        {name: "Szpinak", id: 17, price_all: 2.5},
                        {name: "Granat", id: 17, price_all: 6},
                        {name: "Cytryna", id: 17, price_all: 2},
                        {name: "Cukier Brązowy", id: 17, price_all: 5},
                        {name: "Brzoskwinie", id: 17, price_all: 8},
                        {name: "Brzoskwinie w puszce", id: 17, price_all: 6},
                        {name: "Borówki", id: 17, price_all: 8},
                        {name: "Miechunka", id: 17, price_all: 5},
                        {name: "Maliny mrożone", id: 17, price_all: 10},
                        {name: "Biszkopty okrągłe", id: 17, price_all: 2},
                        {name: "Rodzynki", id: 17, price_all: 2.5},
                        {name: "Skórka pomarańczowa", id: 17, price_all: 2},
                        {name: "Morele suszone", id: 17, price_all: 6.49},
                        {name: "Migdały płatki", id: 17, price_all: 5.59},
                        {name: "Żurawina suszona", id: 17, price_all: 3.45},
                        {name: "Bakalie", id: 17, price_all: 5.2},
                        {name: "Mleko skondensowane", id: 17, price_all: 8},
                        {name: "Mąka bezglutenowa", id: 17, price_all: 7},
                        {name: "Proszek bezglutenowy", id: 17, price_all: 1.5},
                        {name: "Kasza Jaglana", id: 17, price_all: 5},
                        {name: "Kamyki", id: 17, price_all: 2},
                        {name: "Kremówka 36% litr", id: 17, price_all: 18},
                        {name: "Kremówka 36%", id: 17, price_all: 7.85},
                        {name: "Opakowanie", id: 17, price_all: 5},
                        {name: "Mąka migdałowa", id: 17, price_all: 23},
                        {name: "Wiśnie", id: 17, price_all: 7},
                        {name: "Żelatyna", id: 17, price_all: 4},
                        {name: "Masło orzechowe", id: 17, price_all: 7.5},
                        {name: "Snickers", id: 17, price_all: 1.89},
                        {name: "Kitkat", id: 17, price_all: 1.89},
                        {name: "Twix", id: 17, price_all: 1.89},
                        {name: "Pieguski", id: 17, price_all: 3.8},];

var IngredientsNamesArray = [];

for (var i = 0; i < myIngredients.length; i++) {
  IngredientsNamesArray.push(myIngredients[i].name);
}


function Ingredient(id, value, name, fool_price) {
this.id = id;
this.value = value;
this.name = name;
this.foolprice = fool_price;
}

var errorMessage = document.getElementById('error');
var errorMessageNumber = document.getElementById('error_number');
var ingredientInput = document.getElementById('ing_input');
var buttonIngredient = document.getElementById('submit');
var ButtonCalculate = document.getElementById('calc');
var recipeDiv = document.getElementById("recipe");
var numberInput = document.getElementById("number_input");
var sumTable = document.getElementById("wynik");
var counter = 0;
var usedIngredients = [];



/////////////////

document.addEventListener("keyup", function() {
  console.clear();
  for (var i = 0; i < IngredientsNamesArray.length; i++) {
    if(IngredientsNamesArray[i].includes(ingredientInput.value)) {
      console.log(IngredientsNamesArray[i]);
    }


  }
});

////////////////

buttonIngredient.addEventListener("click", function() {
errorMessage.setAttribute("style", "display:block");
errorMessageNumber.setAttribute("style", "display:block");
if (numberInput.value > 0) {

for (var i = 0; i < myIngredients.length; i++) {
if (myIngredients[i].name == ingredientInput.value ) {
  var textIng = document.createElement("H3");
  var textIngtext = document.createTextNode(myIngredients[i].name);
  textIng.appendChild(textIngtext);   // Create a text node

  var priceAll = myIngredients[i].price_all;
  var  textIngNumber = document.createElement("P");
  var textIngNumbertext = document.createTextNode(priceAll);
  var opis = document.createTextNode("Cena za szt/kg w zł: ")

  var priceOfUsed = Math.round((myIngredients[i].price_all * numberInput.value)*100) / 100;
  var pMath = document.createElement("P");
  var a = document.createTextNode("Cena zużytego składnika w zł: ");
  pMath.appendChild(a);
  var aMath = document.createTextNode(priceOfUsed);
  pMath.appendChild(aMath);


  textIngNumber.appendChild(opis);
  textIngNumber.appendChild(textIngNumbertext);
  recipeDiv.appendChild(textIng);
  recipeDiv.appendChild(textIngNumber);
  recipeDiv.appendChild(a);
  recipeDiv.appendChild(aMath);




  errorMessage.setAttribute("style", "display:none");
  errorMessageNumber.setAttribute("style", "display:none");

  var ingObject = new Ingredient (counter, priceOfUsed, myIngredients[i].name, myIngredients[i].price_all);
  usedIngredients.push(ingObject);
  counter++

}
}
}
});

ButtonCalculate.addEventListener("click", function() {
  var sumDiv
  var fullPrice = 0;
  var foolPrice = 0;
  for (var i = 0; i < usedIngredients.length; i++) {
    fullPrice = usedIngredients[i].value + fullPrice;
    foolPrice = usedIngredients[i].foolprice + foolPrice;
  }
  var tab = document.createElement("H3");
  var tabText = document.createTextNode("Cena zużytych składników ciasta: ");
  sumTable.appendChild(tabText);
  var suma = document.createTextNode(fullPrice);
  sumTable.appendChild(suma);

  var tabFoolPrice = document.createElement("p");
  var tabFoolPriceText = document.createTextNode("Całkowita cena sklepowa składników ciasta: ");
  tabFoolPrice.appendChild(tabFoolPriceText);
  var tabFoolPriceNumber = document.createTextNode(foolPrice);
  tabFoolPrice.appendChild(tabFoolPriceNumber);

  sumTable.appendChild(tabFoolPrice);

});
  });
