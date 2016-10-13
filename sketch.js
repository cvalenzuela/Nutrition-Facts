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
    var c = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    c.position(0,0);
    //c.style('z-index:9999');
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
    p5.rect(rectX,rectY,225,370);

    /* Get Web Tags */
    var div = document.getElementsByTagName("div");
    var imgDiv = document.getElementsByTagName("img");
    var ifrmaeDiv = document.getElementsByTagName("iframe");
    var pDiv = document.getElementsByTagName("p");
    var figureDiv = document.getElementsByTagName("figure");
    var aDiv = document.getElementsByTagName("a");
    var linkDiv = document.getElementsByTagName("link");
    var scriptDiv = document.getElementsByTagName("script");
    var h1Div = document.getElementsByTagName("h1");
    var h2Div = document.getElementsByTagName("h2");
    var h3Div = document.getElementsByTagName("h3");
    var h4Div = document.getElementsByTagName("h4");
    var h5Div = document.getElementsByTagName("h5");
    var h6Div = document.getElementsByTagName("h6");
    var htotal = h1Div.length + h2Div.length + h3Div.length + h4Div.length + h5Div.length + h6Div.length;
    var totalDiv = imgDiv.length + ifrmaeDiv.length + pDiv.length + figureDiv.length + aDiv.length + linkDiv.length + scriptDiv.length + htotal;
    console.log("Total Div: "+totalDiv);
    console.log("Total h:" + htotal);
    console.log(round(imgDiv.length, totalDiv));
    /* Nutrition Fact Object */
    function NutritionFact(type, name, x, y, classes){
      this.x = xAlign + x;
      this.y = rectY + y;
      this.fact = p5.createElement(type, name);
      this.fact.position(this.x, this.y);
      this.fact.addClass('nutritionFact');
      for(var i = 0; i < classes.length ; i++){
        this.fact.addClass(classes[i]);
      }
    }

    function round(a,b){
      if(a == 0 || b == 0){
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
    var caloriesNumber = new NutritionFact('p', div.length, 74, 86,['nutritionFacts-light'] );
    var caloriesFromFat = new NutritionFact('p', 'Calories from Div 40', 118, 85, ['nutritionFacts-light'] );
    var dailyValue =  new NutritionFact('p', '% Daily Value*', 140, 108, ['nutritionFacts-bold']);
    var totalImages = new NutritionFact('p', 'Total Images', 0, 124, ['nutritionFacts-topline','nutritionFacts-bold','nutritionFacts-subTitle', 'borderbottom']);
    var totalImagesNumber = new NutritionFact('p', imgDiv.length + ' imgs', 78, 127, ['nutritionFacts-light']);
    var totalImagesPerc = new NutritionFact('p', round(imgDiv.length, totalDiv) + '%', 176, 126, ['nutritionFacts-bold','nutritionFacts-subTitle']);
    var iframe  = new NutritionFact('p', 'iframe ' + ifrmaeDiv.length, 20, 143, ['nutritionFacts-light','nutritionFacts-underlineSubmenu','width190']);
    var iframePerct  = new NutritionFact('p', round(ifrmaeDiv.length, totalDiv) + ' %', 176, 143, ['nutritionFacts-bold','nutritionFacts-subTitle']);
    var figures  = new NutritionFact('p', 'Figures ' + figureDiv.length ,20,159, ['nutritionFacts-light','nutritionFacts-underlineSubmenu','width190']);
    var paragraphs = new NutritionFact('p', 'Paragraphs',0,175,['nutritionFacts-bold','nutritionFacts-subTitle','nutritionFacts-underline']);
    var paragraphsNumber = new NutritionFact('p', pDiv.length + ' p',69,177, ['nutritionFacts-light']);
    var paragraphsPerc = new NutritionFact('p', round(pDiv.length, totalDiv) + '%', 176, 175, ['nutritionFacts-bold','nutritionFacts-subTitle']);
    var headlines = new NutritionFact('p', 'Headlines',0,194,['nutritionFacts-bold','nutritionFacts-underline']);
    var headlinesNumber = new NutritionFact('p', htotal + ' p', 55, 194, ['nutritionFacts-light']);
    var headlinesPerc = new NutritionFact('p', round(htotal, totalDiv) + '%', 185, 194, ['nutritionFacts-bold']);
    var links = new NutritionFact('p', 'Total Links',0,213,['nutritionFacts-bold','nutritionFacts-underline']);
    var linksNumber = new NutritionFact('p', aDiv.length+linkDiv.length + ' links',55,213,['nutritionFacts-light']);
    var linksPerc = new NutritionFact('p', round(aDiv.length, totalDiv) + '%',176,213,['nutritionFacts-bold']);
    var outside  =  new NutritionFact('p', 'Outside Links ', 20, 230, ['nutritionFacts-light','nutritionFacts-underlineSubmenu','width190']);
    var outsidePerct  =  new NutritionFact('p', linkDiv.length + ' %',176,230,['nutritionFacts-bold','nutritionFacts-subTitle']);
    var inside  =  new NutritionFact('p', 'Inside Links ' + aDiv.length, 20, 245, ['nutritionFacts-light','nutritionFacts-underlineSubmenu','width190']);
    var javascript = new NutritionFact('p', 'Javascript',0,264, ['nutritionFacts-bold','nutritionFacts-subTitle','nutritionFacts-underline','nutritionFacts-underlineThick']);
    var javascriptNumber = new NutritionFact('p', scriptDiv.length + ' files',62, 266, ['nutritionFacts-light']);
    var verbs  = new NutritionFact('p', 'Verbs ', 0, 292, ['nutritionFacts-light','nutritionFacts-underline']); // change
    var verbsPerct  = new NutritionFact('p', '5 ' + '%', 188, 292, ['nutritionFacts-bold','nutritionFacts-subTitle']); // change
    var nouns  = new NutritionFact('p', 'Nouns ', 0, 308, ['nutritionFacts-light','nutritionFacts-underline']); // change
    var nounsPerct  = new NutritionFact('p', '5 ' + '%', 188, 308, ['nutritionFacts-bold','nutritionFacts-subTitle'] ); // change
    var disclosure  =  new NutritionFact('p', '*Percent Daily Values are based on a 8 hour watching at a screen. Your daily value may be higier or lower depending on your internet needs.', 0, 328,['nutritionFacts-light','font19']); // change


  }
}

/* The above function closure is passed into a p5 object constructor. this starts the sketch. */
var myp5 = new p5(sketch);
