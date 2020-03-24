// I know this is highly inefficient and that CSS is the correct approach.
// This is more of a learning process / experiment.



// HTML ELEMENTS

//title (which is an image)
let title                = document.createElement('img');
title.src                = "imgs/title.png";

//Sub heading
let subHeading           = document.createElement('h3');
let subHeadingText       = document.createElement('span');
subHeadingText.innerText = "This enitre page was made with JavaScript - no HTML / no CSS";
subHeading.appendChild(subHeadingText);

//content container
let container = document.createElement('div');

//first paragraph
let firstParagraph       = document.createElement('p');
firstParagraph.innerText = 'JavaScript is a client side, high level programming language. It is used in conjucture with HTML & CSS to make interactive websites. ';
//first paragraph
let secondParagraph      = document.createElement('p');
secondParagraph.innerText = 'JavaScript is a client side, high level programming language. It is used in conjucture with HTML & CSS to make interactive websites. ';

//main section
let mainSection          = document.createElement('section')



// STYLING

//General styling 
document.body.style.fontFamily    = 'Raleway';
document.body.style.color         = 'white';
document.body.style.background    = 'linear-gradient(259.81deg, #E8FF5A 5.72%, #70FFDD 83.31%)';
document.body.style.fontSize      = '20px';
//section styling
mainSection.style.width           = '90%';
mainSection.style.height          = '1000px';
mainSection.style.margin          = '40px auto'
mainSection.style.backgroundColor = '#353535';
mainSection.style.display         = 'flex';
mainSection.style.flexDirection   = 'column';
mainSection.style.alignItems      = 'center';
//Container styling
container.style.width             = '70%';
container.style.display           = 'flex';
container.style.flexDirection     = 'column';
container.style.alignItems        = 'center';
//title
title.style.width                 = '400px';
title.style.height                = 'auto';
title.style.margin                = '80px auto 0';
//h3 styling 
subHeading.style.fontSize         = '12px';
subHeading.style.letterSpacing    = '1px';
subHeading.style.fontWeight       = 'lighter';
subHeading.style.color            = '#C5C5C5';
subHeading.style.textAlign        = 'center';
subHeading.style.margin           = '40px auto';
//First paragraph styling
firstParagraph.style.lineHeight   = '40px'
firstParagraph.style.marginTop    = '100px'
firstParagraph.style.letterSpacing = '1px'







//Add created Elemements to HTML, add created elements to section first.
container.appendChild(title);
container.appendChild(subHeading);
container.appendChild(firstParagraph);

mainSection.appendChild(container);
document.body.appendChild(mainSection);




