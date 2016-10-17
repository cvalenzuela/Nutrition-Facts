/*
==========

Nutrition Fact, a Chrome Extension: get to know the content of the websites you visit.
ICM Assignment.
October 2016.

cvalenzuela@nyu.edu

==========
*/

// p5 can not be executed the normal "global" way
// Instead a sketch instance has to be manually created
// This is done with the closure below
console.log("reading sketch...");

/* Variables */
var rectX, rectY, title, xAlign, ratio, servigSize,
servingPerContainer, amountPerServing;

/* p5 Object Constructor */
var sketch = function(p5) {

  /* Setup Function */
  p5.setup = function() {

    /* Canvas */
    var c = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    c.position(0,0);
    c.style('z-index:999');
    p5.clear();

    /* Setup Variables */
    rectX = p5.windowWidth-240;
    rectY = p5.windowHeight-390;
    xAlign = rectX+3;
    ratio = p5.windowWidth/p5.windowHeight;
    var ratioDecimals = Math.round(ratio*100)/100
    p5.noStroke();
    p5.fill(0);

    /* Rectangle */
    p5.fill(255);
    p5.stroke(0);
    p5.strokeWeight(3);
    p5.rect(rectX-5,rectY-2,227,370);

    /* Get Web Tags */
    var div = document.getElementsByTagName("div").length;
    var imgDiv = document.getElementsByTagName("img").length;
    var ifrmaeDiv = document.getElementsByTagName("iframe").length;
    var pDivText = document.getElementsByTagName("p");
    var pDiv = document.getElementsByTagName("p").length;
    var figureDiv = document.getElementsByTagName("figure").length;
    var aDiv = document.getElementsByTagName("a").length;
    var linkDiv = document.getElementsByTagName("link").length;
    var scriptDiv = document.getElementsByTagName("script").length;
    var h1DivText = document.getElementsByTagName("h1");
    var h2DivText = document.getElementsByTagName("h2");
    var h3DivText = document.getElementsByTagName("h3");
    var h4DivText = document.getElementsByTagName("h4");
    var h5DivText = document.getElementsByTagName("h5");
    var h6DivText = document.getElementsByTagName("h6");
    var h1Div = document.getElementsByTagName("h1").length;
    var h2Div = document.getElementsByTagName("h2").length;
    var h3Div = document.getElementsByTagName("h3").length;
    var h4Div = document.getElementsByTagName("h4").length;
    var h5Div = document.getElementsByTagName("h5").length;
    var h6Div = document.getElementsByTagName("h6").length;
    var htotal = h1Div + h2Div + h3Div + h4Div + h5Div + h6Div;
    var totalDiv = imgDiv + ifrmaeDiv + pDiv + figureDiv + aDiv + linkDiv + scriptDiv + htotal;

    /* NLP setup */
    var nlp = window.nlp_compromise;

    function countNouns(){
      var nouns = 0;
      for (var value = 0; value < pDiv; value++) {
        nouns += nlp.sentence(pDivText[value].innerHTML).nouns().length;
      }
      for (var value = 0; value < h1Div; value++) {
        nouns += nlp.sentence(h1DivText[value].innerHTML).nouns().length;
      }
      for (var value = 0; value < h2Div; value++) {
        nouns += nlp.sentence(h2DivText[value].innerHTML).nouns().length;
      }
      for (var value = 0; value < h3Div; value++) {
        nouns += nlp.sentence(h3DivText[value].innerHTML).nouns().length;
      }
      for (var value = 0; value < h4Div; value++) {
        nouns += nlp.sentence(h4DivText[value].innerHTML).nouns().length;
      }
      for (var value = 0; value < h5Div; value++) {
        nouns += nlp.sentence(h5DivText[value].innerHTML).nouns().length;
      }
      for (var value = 0; value < h6Div; value++) {
        nouns += nlp.sentence(h6DivText[value].innerHTML).nouns().length;
      }
      console.log("There are " + nouns + " nouns in this page");
      return nouns;
    }

    function countVerbs(){
      var verbs = 0;
      for (var value = 0; value < pDiv; value++) {
        verbs += nlp.sentence(pDivText[value].innerHTML).verbs().length;
      }
      for (var value = 0; value < h1Div; value++) {
        verbs += nlp.sentence(h1DivText[value].innerHTML).verbs().length;
      }
      for (var value = 0; value < h2Div; value++) {
        verbs += nlp.sentence(h2DivText[value].innerHTML).verbs().length;
      }
      for (var value = 0; value < h3Div; value++) {
        verbs += nlp.sentence(h3DivText[value].innerHTML).verbs().length;
      }
      for (var value = 0; value < h4Div; value++) {
        verbs += nlp.sentence(h4DivText[value].innerHTML).verbs().length;
      }
      for (var value = 0; value < h5Div; value++) {
        verbs += nlp.sentence(h5DivText[value].innerHTML).verbs().length;
      }
      for (var value = 0; value < h6Div; value++) {
        verbs += nlp.sentence(h6DivText[value].innerHTML).verbs().length;
      }
      console.log("There are " + verbs + " verbs in this page");
      return(verbs);
    }

    /* Nutrition Fact Object */
    var instances = 0;
    function NutritionFact(type, name, x, y, classes){
      instances += 1;
      this.x = xAlign + x;
      this.y = rectY + y;
      this.fact = p5.createElement(type, name);
      this.fact.position(this.x, this.y);
      this.fact.addClass('nutritionFact');
      for(var i = 0; i < classes.length ; i++){
        this.fact.addClass(classes[i]);
      }
    }

    /* Round a number to two decimals */
    function round(a,b){
      if(b == 0){
        var ratiod = 0;
        return ratiod;
      }
      else{
        var ratiod = Math.round((a/b)*100);
        return ratiod;
      }
    }

    /* Instance of Nutrition Facts */
    var title = new NutritionFact('h1', 'Nutrition Facts',0, -3, ['nutritionFacts-title']);
    var servigSize = new NutritionFact('p', 'Serving Size ' + p5.windowWidth + '/' + p5.windowHeight + ' px ' + '(' + ratioDecimals + ' ratio)',0, 28, ['nutritionFacts-light']);
    var servingPerContainer = new NutritionFact('p', 'Serving Per Container About 1',0, 42, ['nutritionFacts-light','nutritionFacts-underline','nutritionFacts-underlineThick']);
    var amountPerServing = new NutritionFact('p', 'Amount Per Serving',0, 68,['nutritionFacts-bold','nutritionFacts-underline'] );
    var calories = new NutritionFact('p', 'Div Calories', 0, 84,['nutritionFacts-bold','nutritionFacts-subTitle', 'nutritionFacts-underline','nutritionFacts-underlineSemiThick'  ] );
    var caloriesNumber = new NutritionFact('p', div, 74, 86,['nutritionFacts-light'] );
    var caloriesFromFat = new NutritionFact('p', 'Calories from Div 40', 118, 85, ['nutritionFacts-light'] );
    var dailyValue =  new NutritionFact('p', '% Daily Value*', 140, 108, ['nutritionFacts-bold']);
    var totalImages = new NutritionFact('p', 'Total Images', 0, 124, ['nutritionFacts-topline','nutritionFacts-bold','nutritionFacts-subTitle', 'borderbottom']);
    var totalImagesNumber = new NutritionFact('p', imgDiv + ' imgs', 78, 127, ['nutritionFacts-light']);
    var totalImagesPerc = new NutritionFact('p', round(imgDiv, totalDiv) + '%', 188, 126, ['nutritionFacts-bold','nutritionFacts-subTitle']);
    var iframe  = new NutritionFact('p', 'iframe ' + ifrmaeDiv, 20, 143, ['nutritionFacts-light','nutritionFacts-underlineSubmenu','width190']);
    var iframePerct  = new NutritionFact('p', round(ifrmaeDiv, totalDiv) + '%', 188, 143, ['nutritionFacts-bold','nutritionFacts-subTitle']);
    var figures  = new NutritionFact('p', 'Figures ' + figureDiv ,20,159, ['nutritionFacts-light','nutritionFacts-underlineSubmenu','width190']);
    var paragraphs = new NutritionFact('p', 'Paragraphs',0,175,['nutritionFacts-bold','nutritionFacts-subTitle','nutritionFacts-underline']);
    var paragraphsNumber = new NutritionFact('p', pDiv + ' p',69,177, ['nutritionFacts-light']);
    var paragraphsPerc = new NutritionFact('p', round(pDiv, totalDiv) + '%', 186, 175, ['nutritionFacts-bold','nutritionFacts-subTitle']);
    var headlines = new NutritionFact('p', 'Headlines',0,194,['nutritionFacts-bold','nutritionFacts-underline']);
    var headlinesNumber = new NutritionFact('p', htotal + ' p', 55, 194, ['nutritionFacts-light']);
    var headlinesPerc = new NutritionFact('p', round(htotal, totalDiv) + '%', 188, 194, ['nutritionFacts-bold']);
    var links = new NutritionFact('p', 'Total Links',0,213,['nutritionFacts-bold','nutritionFacts-underline']);
    var linksNumber = new NutritionFact('p', aDiv+linkDiv + ' links',55,213,['nutritionFacts-light']);
    var linksPerc = new NutritionFact('p', round(aDiv, totalDiv) + '%',188,213,['nutritionFacts-bold']);
    var outside  =  new NutritionFact('p', 'Outside Links ', 20, 230, ['nutritionFacts-light','nutritionFacts-underlineSubmenu','width190']);
    var outsidePerct  =  new NutritionFact('p', linkDiv + '%',186,230,['nutritionFacts-bold','nutritionFacts-subTitle']);
    var inside  =  new NutritionFact('p', 'Inside Links ' + aDiv, 20, 245, ['nutritionFacts-light','nutritionFacts-underlineSubmenu','width190']);
    var javascript = new NutritionFact('p', 'Javascript',0,264, ['nutritionFacts-bold','nutritionFacts-subTitle','nutritionFacts-underline','nutritionFacts-underlineThick']);
    var javascriptNumber = new NutritionFact('p', scriptDiv + ' files',62, 266, ['nutritionFacts-light']);
    var verbs  = new NutritionFact('p', 'Verbs ', 0, 292, ['nutritionFacts-light','nutritionFacts-underline']); // change
    var verbsPerct  = new NutritionFact('p', countVerbs(), 187, 292, ['nutritionFacts-bold','nutritionFacts-subTitle']); // change
    var nouns  = new NutritionFact('p', 'Nouns ', 0, 308, ['nutritionFacts-light','nutritionFacts-underline']); // change
    var nounsPerct  = new NutritionFact('p', countNouns() , 187, 308, ['nutritionFacts-bold','nutritionFacts-subTitle'] ); // change
    var disclosure  =  new NutritionFact('p', '*Percent Daily Values are based on a 8 hour watching at a screen. Your daily value may be higier or lower depending on your internet needs.', 0, 328,['nutritionFacts-light','font19']); // change

  }
}

/* The above function closure is passed into a p5 object constructor. this starts the sketch. */
var myp5 = new p5(sketch);
