// p5 can not be executed the normal "global" way
// Instead a sketch instance has to be manually created
// This is done with the closure below

console.log("reading sketch...");
/* Inverse the all words in p tags */
// var text = document.getElementsByTagName('p');
//
// for(var k = 0; k < text.length; k++){
//   var txt = text[k].innerHTML;
//   var words = txt.split(/\s+/);
//   words = words.reverse();
//   txt = words.join(' ');
//   text[k].innerHTML = txt;
// }

/* Variables */
var rectX, rectY, title, xAlign, ratio, servigSize,
servingPerContainer, amountPerServing;

/* p5 Object Constructor */
var sketch = function(p5) {

  /* Setup Function */
  p5.setup = function() {
    var c = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    c.position(0,0);
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
    p5.rect(rectX,rectY,220,370);

    /* Title */
    var title = p5.createElement('h1', 'Nutrition Facts');
    title.addClass('nutritionFacts');
    title.addClass('nutritionFacts-title');
    title.position(xAlign,rectY-3);

    /* Serving Size */
    var servigSize = p5.createElement('p', 'Serving Size ' + p5.windowWidth + '/' + p5.windowHeight + ' px ' + '(' + ratioDecimals + ' ratio)');
    servigSize.addClass('nutritionFacts');
    servigSize.addClass('nutritionFacts-light');
    servigSize.position(xAlign,rectY+28);

    /* Serving per Container */
    var servingPerContainer = p5.createElement('p', 'Serving Per Container About 1');
    servingPerContainer.addClass('nutritionFacts');
    servingPerContainer.addClass('nutritionFacts-light');
    servingPerContainer.addClass('nutritionFacts-underline');
    servingPerContainer.addClass('nutritionFacts-underlineThick');
    servingPerContainer.position(xAlign,rectY+42);

    /* Amount per Serving */
    var amountPerServing = p5.createElement('p', 'Amount Per Serving');
    amountPerServing.addClass('nutritionFacts');
    amountPerServing.addClass('nutritionFacts-bold');
    amountPerServing.addClass('nutritionFacts-underline');
    amountPerServing.position(xAlign,rectY+68);

    /* Calories */
    var calories = p5.createElement('p', 'Calories');
    var caloriesNumber = p5.createElement('p', '230');  // change
    var caloriesFromFat = p5.createElement('p', 'Calories from Fat 40');  // change
    calories.addClass('nutritionFacts');
    calories.addClass('nutritionFacts-bold');
    calories.addClass('nutritionFacts-');
    calories.addClass('nutritionFacts-underline');
    calories.addClass('nutritionFacts-underlineSemiThick');
    calories.position(xAlign,rectY+84);
    caloriesNumber.addClass('nutritionFacts');
    caloriesNumber.addClass('nutritionFacts-light');
    caloriesNumber.position(xAlign + 53,rectY+85);
    caloriesFromFat.addClass('nutritionFacts');
    caloriesFromFat.addClass('nutritionFacts-light');
    caloriesFromFat.position(xAlign + 118,rectY+85);
    /* Calories from Fat */

    /* % Daily Value* */
    var dailyValue = p5.createElement('p', '% Daily Value*');
    dailyValue.addClass('nutritionFacts');
    dailyValue.addClass('nutritionFacts-bold');
    dailyValue.position(xAlign + 140,rectY+108);

    /* Total Images */
    var totalImages = p5.createElement('p', 'Total Images');
    var totalImagesNumber = p5.createElement('p', '8' + ' imgs'); // change
    var totalImagesPerc = p5.createElement('p', '12' + '%'); // change
    totalImages.addClass('nutritionFacts');
    totalImages.addClass('nutritionFacts-topline');
    totalImages.addClass('nutritionFacts-bold');
    totalImages.addClass('nutritionFacts-');
    totalImages.style('border-bottom:1px solid black;padding-bottom:2px;');
    totalImages.position(xAlign,rectY+124);
    totalImagesNumber.addClass('nutritionFacts');
    totalImagesNumber.addClass('nutritionFacts-light');
    totalImagesNumber.position(xAlign + 78,rectY+126);
    totalImagesPerc.addClass('nutritionFacts');
    totalImagesPerc.addClass('nutritionFacts-bold');
    totalImagesPerc.addClass('nutritionFacts-');
    totalImagesPerc.position(xAlign + 185,rectY+126);

    /* Iframe and Avatar */
    var iframe  = p5.createElement('p', 'iframe ' + '1'); // change
    var iframePerct  = p5.createElement('p', '5 ' + '%'); // change
    var avatars  = p5.createElement('p', 'Avatars ' + '1'); // change
    iframe.addClass('nutritionFacts');
    iframe.addClass('nutritionFacts-light');
    iframe.position(xAlign + 20,rectY+143);
    iframe.addClass('nutritionFacts-underlineSubmenu');
    iframe.style('width: 190px;');
    iframePerct.addClass('nutritionFacts');
    iframePerct.addClass('nutritionFacts-bold');
    iframePerct.addClass('nutritionFacts-');
    iframePerct.position(xAlign + 188,rectY+143);
    avatars.addClass('nutritionFacts');
    avatars.addClass('nutritionFacts-light');
    avatars.position(xAlign + 20,rectY+159);
    avatars.addClass('nutritionFacts-underlineSubmenu');
    avatars.style('width: 190px;');

    /* Paragraphs */
    var paragraphs = p5.createElement('p', 'Paragraphs');
    var paragraphsNumber = p5.createElement('p', '12' + ' p'); // change
    var paragraphsPerc = p5.createElement('p', '12' + '%'); // change
    paragraphs.addClass('nutritionFacts');
    paragraphs.addClass('nutritionFacts-bold');
    paragraphs.addClass('nutritionFacts-');
    paragraphs.position(xAlign,rectY+175);
    paragraphs.addClass('nutritionFacts-underline');
    paragraphsNumber.addClass('nutritionFacts');
    paragraphsNumber.addClass('nutritionFacts-light');
    paragraphsNumber.position(xAlign + 69,rectY+175);
    paragraphsPerc.addClass('nutritionFacts');
    paragraphsPerc.addClass('nutritionFacts-bold');
    paragraphsPerc.addClass('nutritionFacts-');
    paragraphsPerc.position(xAlign + 185,rectY+175);


    /* Headlines */
    var headlines = p5.createElement('p', 'Headlines');
    var headlinesNumber = p5.createElement('p', '12' + ' p'); // change
    var headlinesPerc = p5.createElement('p', '12' + '%'); // change
    headlines.addClass('nutritionFacts');
    headlines.addClass('nutritionFacts-bold');
    headlines.addClass('nutritionFacts-');
    headlines.position(xAlign,rectY+194);
    headlines.addClass('nutritionFacts-underline');
    headlinesNumber.addClass('nutritionFacts');
    headlinesNumber.addClass('nutritionFacts-light');
    headlinesNumber.position(xAlign + 58,rectY+194);
    headlinesPerc.addClass('nutritionFacts');
    headlinesPerc.addClass('nutritionFacts-bold');
    headlinesPerc.addClass('nutritionFacts-');
    headlinesPerc.position(xAlign + 185,rectY+194);

    /* Total Links */
    var links = p5.createElement('p', 'Total Links');
    var linksNumber = p5.createElement('p', '4' + ' links'); // change
    var linksPerc = p5.createElement('p', '22' + '%'); // change
    links.addClass('nutritionFacts');
    links.addClass('nutritionFacts-bold');
    links.addClass('nutritionFacts-');
    links.addClass('nutritionFacts-underline');
    links.position(xAlign,rectY+213);
    linksNumber.addClass('nutritionFacts');
    linksNumber.addClass('nutritionFacts-light');
    linksNumber.position(xAlign + 65,rectY+213);
    linksPerc.addClass('nutritionFacts');
    linksPerc.addClass('nutritionFacts-bold');
    linksPerc.addClass('nutritionFacts-');
    linksPerc.position(xAlign + 185,rectY+213);

    /* Outside and Inside */
    var outside  = p5.createElement('p', 'Outside Links '); // change
    var outsidePerct  = p5.createElement('p', '5 ' + '%'); // change
    var inside  = p5.createElement('p', 'Inside Links ' + '1'); // change
    outside.addClass('nutritionFacts');
    outside.addClass('nutritionFacts-light');
    outside.position(xAlign + 20,rectY+230);
    outside.addClass('nutritionFacts-underlineSubmenu');
    outside.style('width: 190px;');
    outsidePerct.addClass('nutritionFacts');
    outsidePerct.addClass('nutritionFacts-bold');
    outsidePerct.addClass('nutritionFacts-');
    outsidePerct.position(xAlign + 188,rectY+230);
    inside.addClass('nutritionFacts');
    inside.addClass('nutritionFacts-light');
    inside.position(xAlign + 20,rectY+245);
    inside.addClass('nutritionFacts-underlineSubmenu');
    inside.style('width: 190px;');

    /* Javascript */
    var javascript = p5.createElement('p', 'Javascript');
    var javascriptNumber = p5.createElement('p', '12' + ' files'); // change
    javascript.addClass('nutritionFacts');
    javascript.addClass('nutritionFacts-bold');
    javascript.addClass('nutritionFacts-');
    javascript.position(xAlign,rectY+264);
    javascript.addClass('nutritionFacts-underline');
    javascript.addClass('nutritionFacts-underlineThick');
    javascriptNumber.addClass('nutritionFacts');
    javascriptNumber.addClass('nutritionFacts-light');
    javascriptNumber.position(xAlign + 62,rectY+264);

    /* Verbs */
    var verbs  = p5.createElement('p', 'Verbs '); // change
    var verbsPerct  = p5.createElement('p', '5 ' + '%'); // change
    verbs.addClass('nutritionFacts');
    verbs.addClass('nutritionFacts-light');
    verbs.position(xAlign,rectY+292);
    verbs.addClass('nutritionFacts-underline');
    verbsPerct.addClass('nutritionFacts');
    verbsPerct.addClass('nutritionFacts-bold');
    verbsPerct.addClass('nutritionFacts-');
    verbsPerct.position(xAlign + 188,rectY+292);

    /* Nouns */
    var nouns  = p5.createElement('p', 'Nouns '); // change
    var nounsPerct  = p5.createElement('p', '5 ' + '%'); // change
    nouns.addClass('nutritionFacts');
    nouns.addClass('nutritionFacts-light');
    nouns.position(xAlign,rectY+308);
    nouns.addClass('nutritionFacts-underline');
    nounsPerct.addClass('nutritionFacts');
    nounsPerct.addClass('nutritionFacts-bold');
    nounsPerct.addClass('nutritionFacts-');
    nounsPerct.position(xAlign + 188,rectY+308);


    /* Disclosure */
    var disclosure  = p5.createElement('p', '*Percent Daily Values are based on a 8 hour watching at a screen. Your daily value may be higier or lower depending on your internet needs.'); // change
    disclosure.addClass('nutritionFacts');
    disclosure.addClass('nutritionFacts-light');
    disclosure.style('font-size:9px;');
    disclosure.position(xAlign,rectY+328);

  }


  /* Draw lines if the user drags the mouse */
  // p5.mouseDragged = function() {
  //   p5.stroke(0);
  //   p5.strokeWeight(4);
  //   p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
  // }






}

/* The above function closure is passed into a p5 object constructor. this starts the sketch. */
var myp5 = new p5(sketch);
