// I know this is highly inefficient and that CSS would be the correct approach.
// This is more of a learning process / experiment.



// CREATED HTML ELEMENTS

//title (which is an image)
let title                = document.createElement('img');
title.src                = "imgs/title.png";

//Sub heading
let subHeading           = document.createElement('h3');
let subHeadingText       = document.createElement('span');
subHeadingText.innerText = "This enitre page was made with 1 JavaScript file - no HTML / no CSS";
subHeading.appendChild(subHeadingText);

//content container
let container = document.createElement('div');

//first paragraph
let firstParagraph       = document.createElement('p');
firstParagraph.innerHTML = '<span>JavaScript </span>is a client side, high level programming language. It is used in conjucture with HTML & CSS to make interactive websites. It may sound simular but it has nothing to do with Java, which is a completly different language. Think of it like this: Java is to JavaScript like Car is to Carpet.';
//second paragraph
let secondParagraph      = document.createElement('p');
secondParagraph.innerHTML= '<span>There </span> are many different things that you can do with JavaScript, <span>Animations</span> can be implemented using event listeners and by using using different interaction such as when somthing is <span>Hovered</span>. Or whenever the user <span>Clicks</span> on something. <span>Styling</span> can also be changed using JavaScript. You can change different colours, or Font Styles. Also you can make really sweet   <span>fade-in effects.</span> <span>Sweet! </span>';

let thirdParagraph       = document.createElement('p');
thirdParagraph.innerHTML = '<span>Form validation </span> can also be done using JavaScript. Below is a very simple form, have a go!';
//main section
let mainSection          = document.createElement('section');

//form section
let formTitle            = document.createElement('p');
formTitle.innerHTML      = ('Please enter a word that is 5 - 10 characters long.')
//form div
let formDiv              = document.createElement('div');
//form first text
let formH1               = document.createElement('h1');
formH1.innerHTML         = ('Very Important Form');
//form warning message
let warning              = document.createElement('p');
warning.innerHTML        = ('Incorrect input, please try again');
//form complete message
let complete = document.createElement('p');
complete.innerHTML = 'Very Clever!';
//form element
let form = document.createElement('form');
//form input
let formInput = document.createElement('input');
formInput.required = true;
formInput.addEventListener('click', formClear);
//form button
let button = document.createElement('input');
button.type = 'submit';

//form vaildation function
form.addEventListener('submit', function(e){
    var word = formInput.value
    if (word.length >= 5 && word.length <= 10) {
        complete.style.opacity   = ('1');
        formDiv.style.background = '#5EB567';
        e.preventDefault();
        
    } else if (word.length < 5 || word.length > 10){
        warning.style.opacity = ('1');
        formDiv.style.background = '#FF725F';
        button.style.background = '#3E3E3E';
        button.style.color = 'white';
        e.preventDefault();
    }
});



//add the form elements to the form tag
form.appendChild(formInput);
form.appendChild(button);
//then add the form to the div
formDiv.appendChild(formH1);
formDiv.appendChild(formTitle);
formDiv.appendChild(form);
formDiv.appendChild(warning);
formDiv.appendChild(complete);



// STYLING

//General styling

document.body.style.fontFamily     = 'Raleway';
document.body.style.color          = 'white';
document.body.style.background     = 'linear-gradient(259.81deg, #E8FF5A 5.72%, #70FFDD 83.31%)';
document.body.style.fontSize       = '1.1em';
//section styling
mainSection.style.width            = '90%';
mainSection.style.height           = '2000px';
mainSection.style.margin           = '40px auto'
mainSection.style.backgroundColor  = '#353535';
mainSection.style.display          = 'flex';
mainSection.style.flexDirection    = 'column';
mainSection.style.alignItems       = 'center';
//Container styling
container.style.width              = '65%';
container.style.display            = 'flex';
container.style.flexDirection      = 'column';
container.style.alignItems         = 'center';
//title
title.style.width                  = '400px';
title.style.height                 = 'auto';
title.style.margin                 = '130px auto 0';
//h3 styling 
subHeading.style.fontSize          = '12px';
subHeading.style.letterSpacing     = '1px';
subHeading.style.fontWeight        = 'lighter';
subHeading.style.color             = '#C5C5C5';
subHeading.style.textAlign         = 'center';
subHeading.style.margin            = '40px auto';
//First paragraph styling
firstParagraph.style.marginTop     = '130px';
firstParagraph.style.lineHeight    = '45px';
firstParagraph.style.letterSpacing = '.5px';
//Second paragraph styling      
secondParagraph.style.lineHeight   = '45px';
secondParagraph.style.marginTop    = '100px';
secondParagraph.style.letterSpacing= '.5px';
//Third paragraph styling      
thirdParagraph.style.lineHeight    = '45px';
thirdParagraph.style.marginTop     = '40px';
thirdParagraph.style.letterSpacing = '.5px';
//Form styling
formDiv.style.width                = ('750px');
formDiv.style.height               = ('300px');
formDiv.style.background           = ('#F5F5F5');
formDiv.style.marginTop            = ('10px');
formDiv.style.borderRadius         = ('10px');
formDiv.style.textAlign            = ('center');
formDiv.style.display              = ('flex');
formDiv.style.flexDirection        = ('column');
formDiv.style.alignItems           = ('center');
formDiv.style.transition           = ('all .3s ease');
form.style.display                 = ('flex');
form.style.flexDirection           = ('column');
form.style.alignItems              = ('center');
formTitle.style.letterSpacing      = ('.5px');
formTitle.style.fontSize           = ('.7em');
formTitle.style.color              = ('black');
formTitle.style.transition         = ('all .3s ease');
formH1.style.color                 = ('black');
formH1.style.fontSize              = ('2em');
formH1.style.transition            = ('all .3s ease');
warning.style.color                = ('black');
warning.style.fontWeight           = ('bold');
warning.style.marginTop            = ('15px');
warning.style.opacity              = ('0');
warning.style.transition           = ('all .3s ease');
complete.style.transition          = ('all .3s ease');
complete.style.opacity             = ('0');
complete.style.color               = ('white')
complete.style.fontWeight          = ('bold');
complete.style.position            = ('relative')
complete.style.bottom              = ('55px')
formInput.style.width              = ('200px');
formInput.style.height             = ('30px');
formInput.style.height             = ('30px');
formInput.style.transition         = ('all .3s ease');
formInput.style.textAlign          = ('center');
button.style.width                 = ('150px');
button.style.height                = ('40px');
button.style.marginTop             = ('30px');
button.style.border                = ('3px solid #7AFFD2');
button.style.fontFamily            = ('Raleway');
button.style.fontWeight            = ('bold');
button.style.cursor                = ('pointer');
button.style.background            = ('linear-gradient(259.81deg, #E8FF5A 5.72%, #70FFDD 83.31%)');
// when input foem is clicked change div background darker

//Add created Elemements to HTML, add created elements to section first.
container.appendChild(title);
container.appendChild(subHeading);
container.appendChild(firstParagraph);
container.appendChild(secondParagraph);
container.appendChild(thirdParagraph);
container.appendChild(formDiv);
mainSection.appendChild(container);
document.body.appendChild(mainSection);


//Selecting different elements once they have been generated by JS.
let span = document.querySelectorAll('span');

//change the property of: JavaScript.
span[1].style.color      = '#70FFDD';
span[1].style.fontSize   = '45px';

//change the property of: So what can you do with javaScript?.
span[2].style.color      = '#70FFDD';
span[2].style.fontSize   = '45px';

//change the property of: Animations.
span[3].style.fontSize   = '30px';
span[3].style.fontWeight = 'bold';
span[3].style.transition = 'all .3s ease';
span[3].style.cursor = 'pointer';

span[3].addEventListener('mouseenter', rotateRight);
span[3].addEventListener('mouseleave', rotateLeft);
span[3].style.display ='inline-block';

//change the property of: Hover.
span[4].style.fontSize   = '30px';
span[4].style.fontWeight = 'bold';
span[4].style.transition = 'all .3s ease';
span[4].style.cursor = 'pointer';
span[4].addEventListener('mouseenter', mouseEnter);
span[4].addEventListener('mouseleave', mouseLeave);

//change the property of: Clicks.
span[5].style.fontSize   = '30px';
span[5].style.fontWeight = 'bold';
span[5].style.cursor     = 'pointer';
span[5].style.transition = 'all .3s ease';
span[5].addEventListener('click', toggle);

//change the property of: Styling.
span[6].style.fontSize   = '30px';
span[6].style.fontWeight = 'bold';
span[6].style.fontFamily = 'Prata';

//change the property of: fade-in effects.
span[7].style.fontSize   = '26px';
span[7].style.cursor     = 'pointer';
span[7].style.fontWeight = 'bold';
span[7].addEventListener('mouseenter', fadeIn);

//change the property of: Awesome
span[8].style.color      = '#FF6E5A';
span[8].style.opacity    = '0';
span[8].style.fontSize   = '50px';
span[8].style.letterSpacing = '8px';
span[8].style.marginLeft = '70px';
span[8].style.transition = 'all .3s ease-in-out';
span[8].style.display = 'inline-block';
span[8].style.transform = 'translateX(-50px)';

//change the property of games.
span[9].style.color      = '#70FFDD';
span[9].style.fontSize   = '45px';


//Paragraph three functions
//animations function
function rotateRight() {
    span[3].style.transform = 'rotateY(180deg)';
}

function rotateLeft() {
    span[3].style.transform = 'rotateY(360deg)'
}

//functions for hover.
function mouseEnter() {
    span[4].style.boxShadow = '0 0 100px 30px'
    span[4].style.padding = '0 10px';
}

function mouseLeave() {
    span[4].style.boxShadow = '0 0 0 0';
    span[4].style.padding = '0';
}

//function for click event.
function toggle() {
    x = span[5];

    if (x.style.color === "white") {
        x.style.color = "yellow";
        x.style.fontSize = '50px';
      } else {
        x.style.color = "white";
        x.style.fontSize = '30px'
      }
}

//functions for fade-in effect.
function fadeIn() {
    span[8].style.opacity ='1';
    span[8].style.transform = 'translateX(0px)';
}


//form functionality
//change the form box when clicked
function formClear () {
    formInput.style.width  = ('400px');
    warning.style.opacity  = ('0');
    complete.style.opacity = ('0');
    formDiv.style.background    = ('#F5F5F5');
    button.style.background = 'linear-gradient(259.81deg, #E8FF5A 5.72%, #70FFDD 83.31%)';
    button.style.color = 'black';
}




