// I know this is highly inefficient and that CSS is the correct approach.
// This is more of a learning process / experiment.



// HTML ELEMENTS

//title (which is an image)
let title = document.createElement('img');
title.src = "imgs/title.png";
//h3
let subHeading      = document.createElement('h3');
let subHeadingText  = document.createElement('span');
subHeadingText.innerText = "This enitre website was made with JavaScript - minimal HTML / no CSS";
subHeading.appendChild(subHeadingText);
//section
let mainSection     = document.createElement('section')



// STYLING

//body styling 
document.body.style.fontFamily    = 'Raleway';
document.body.style.color         = 'white';
document.body.style.background    = 'linear-gradient(259.81deg, #E8FF5A 5.72%, #70FFDD 83.31%)';
//section styling
mainSection.style.width           = '93%';
mainSection.style.height          = '1000px';
mainSection.style.margin          = '40px auto'
mainSection.style.backgroundColor = '#353535';

//title
title.style.width                 = '400px';
title.style.height                = 'auto';
title.style.margin                = '50px auto 0';
//h3 styling 
subHeading.style.fontSize = '12px';
subHeading.style.letterSpacing = '1px';
subHeading.style.fontWeight = 'lighter';
subHeading.style.color = '#C5C5C5';
subHeading.style.textAlign = 'center';
subHeading.style.margin = '40px auto';







//Add created Elemements to HTML, add created elements to section first.
mainSection.appendChild(title);
mainSection.appendChild(subHeading);
document.body.appendChild(mainSection);




