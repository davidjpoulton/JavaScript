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
firstParagraph.innerHTML = '<span>JavaScript </span>is a client side, high level programming language. It is used in conjucture with HTML & CSS to make dynamic websites. It may sound simular but it has nothing to do with Java, which is a completly different language. Think of it like this: Java is to JavaScript like Car is to Carpet.';
//second paragraph
let secondParagraph      = document.createElement('p');
secondParagraph.innerHTML= '<span>DOM Manipulation </span> stands for Document Object Model and is a main feature of javascript, with the ability to change and create HTML elements and css styles. <span>Animations</span> can be implemented using event listeners and by using using different interaction such as when somthing is <span>Hovered</span>. Or whenever the user <span>Clicks</span> on something. <span>Styling</span> can also be changed using JavaScript. You can change different colours, or Font Styles. Also you can make really sweet   <span>fade-in effects.</span> <span>Sweet! </span>';

let thirdParagraph       = document.createElement('p');
thirdParagraph.innerHTML = '<span>Form validation </span> can also be done using JavaScript. This is useful to make sure that a user has entered the correct information to be submitted.  Below is a very simple example, have a go!';

let fourthParagraph      = document.createElement('p');
fourthParagraph.innerHTML= '<span>Games </span>can also be made using pure JavaScript. It is often best practice to use a framework such as Phaser, hovever you can use vanilla JavaScipt to create simple games. I have created a simple game of pong below which is made purely of vanilla JavaScript.';

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
warning.innerHTML        = ('Nope, try again.');
//no numbers messsage
let numberError= document.createElement('p');
numberError.innerHTML = 'No numbers please!';
//form complete message
let complete = document.createElement('p');
complete.innerHTML = 'Very Clever!';
//form text appears when not enough has been typed yet in the input field
let almostThereText = document.createElement('p');
almostThereText.innerHTML = 'Almost there...';
//form text appears when perfect amount of characters has been entered
let justRight = document.createElement('p');
justRight.innerHTML = 'Just Right!';
//form text that appears when too many characters are entered
let tooLong = document.createElement('p');
tooLong.innerHTML = 'Too Long.'

//form element
let form = document.createElement('form');
//form input
let formInput = document.createElement('input');
formInput.required = true;
formInput.addEventListener('keydown', formClear);
formInput.placeholder = 'Enter word'

//form button
let button = document.createElement('input');
button.type = 'submit';

let star = document.createElement('img')
star.src = 'imgs/star.png';




//game cavnas
let canvas = document.createElement('canvas');
ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 400;
ctx.beginPath();
ctx.font = '50px raleway';
ctx.fillStyle = 'white';
ctx.fillText('Pure javaScript Pong', 205, 100);
ctx.font = '40px raleway';
ctx.fillText('Click to start', 325, 230);
ctx.font = '20px raleway';
ctx.fillText('Controls: Mouse move or Left and Right Keys', 230, 350);
ctx.font = '12px raleway';
ctx.fillText('Made by David Wilson', 760, 380);
ctx.closePath();

let score = 0;
let lives = 3;
 
let restartWidth = 170;
let restartHeight = 70;

//ball 
var ballX = canvas.width/2;
var ballY = canvas.height - 30;
var ballRadius = 8;
var dx = 3;
var dy = -3;

//paddle 
var paddleHeight = 7;
var paddleWidth = 140;
var paddleDx = 4;
//track mouse movements and assign value to paddleX
canvas.addEventListener('mousemove', mouseMoveHandler, false);
function mouseMoveHandler(e) {

    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth;
    }
}

//bricks 
var brickRowCount = 4;
var brickColumnCount = 8;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 120;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}


function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (ballX > b.ballX && ballX < b.ballX + brickWidth && ballY > b.ballY && ballY < b.ballY + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score += 100
                }
            }
        }
    }
}

function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].ballX = brickX;
                bricks[c][r].ballY = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#70FFDD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight - 5, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

function drawBall(){
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

function restart(){
    ctx.beginPath();
    ctx.rect(100, 200, restartWidth, restartHeight);
    ctx.fillStyle = '#00FFC2';
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.font = '26px raleway';
    ctx.fillText('Start Again', 122, 245);
    ctx.closePath();
    canvas.addEventListener('click', reload);
}

function reload(){
    location.reload();
}

function ScoreLives(){
    ctx.font = '20px raleway';
    ctx.fillStyle = 'white';
    ctx.fillText("Score: "+score, 10, 30);  
    ctx.fillText("Lives: "+lives, 10, 60);  
}

// if right of left key is pressed
var leftPressed;
var rightPressed;
function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = true;
    } else if (event.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = false;
    } else if (event.keyCode == 37){
        leftPressed = false;
    }
}
//function to randomise ball position when player loses a life
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
function run() {
    ctx.clearRect(0 ,0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    collisionDetection();
    ScoreLives(); 
    
    if (ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius){
        dx = -dx
    }

    if (ballY + dy < ballRadius || 
    (
        ballY + dy > canvas.height - paddleHeight - ballRadius &&
        ballX + dx > paddleX &&
        ballX + dx < paddleX + paddleWidth
    )) {
        dy = -dy;
    } else if (ballY - dy > canvas.height - ballRadius) {
        ballY = canvas.height - 40;
        ballX = canvas.width/2;
        dy = -3;
        dx = getRandomArbitrary(-4, 4);
        lives--;
    } else if (lives == 0 || score == 3200) {
        ballY = canvas.height - 30;
        dy = -3;
        dx = 3;
        paddleX = (canvas.width-paddleWidth)/2;
        ctx.font = '50px raleway';
        ctx.fillText('Game Over', 320, 220);
        ctx.fillText('Score: ' + score, 320, 270);
        restart();
        cancelAnimationFrame();
    }

    if(rightPressed && (paddleX + paddleWidth) < canvas.width) {
        paddleX += paddleDx;
    } else if(leftPressed && paddleX > 0) {
        paddleX -= paddleDx;
    }

    ballX += dx;
    ballY += dy;
 
    requestAnimationFrame(run);
}
canvas.addEventListener('click', run);


//add the form elements to the form tag
form.appendChild(formInput);
form.appendChild(button);
//then add the form to the div
formDiv.appendChild(formH1);
formDiv.appendChild(formTitle);
formDiv.appendChild(form);
formDiv.appendChild(warning);
formDiv.appendChild(complete);
formDiv.appendChild(numberError);
formDiv.appendChild(almostThereText);
formDiv.appendChild(justRight);
formDiv.appendChild(tooLong);
formDiv.appendChild(star);


// STYLING

//General styling

document.body.style.fontFamily     = 'Raleway';
document.body.style.color          = 'white';
document.body.style.background     = 'linear-gradient(259.81deg, #E8FF5A 5.72%, #70FFDD 83.31%)';
document.body.style.fontSize       = '1.1em';
//section styling
mainSection.style.width            = '90%';
mainSection.style.height           = '2500px';
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
firstParagraph.style.marginTop     = '110px';
firstParagraph.style.lineHeight    = '45px';
firstParagraph.style.letterSpacing = '.5px';
//Second paragraph styling      
secondParagraph.style.lineHeight   = '45px';
secondParagraph.style.marginTop    = '100px';
secondParagraph.style.letterSpacing= '.5px';
//Third paragraph styling      
thirdParagraph.style.lineHeight    = '45px';
thirdParagraph.style.marginTop     = '80px';
thirdParagraph.style.letterSpacing = '.5px';
//Forth paragraph styling
fourthParagraph.style.lineHeight    = '45px';
fourthParagraph.style.marginTop     = '140px';
fourthParagraph.style.letterSpacing = '.5px';
//Form styling
formDiv.style.width                = ('900px');
formDiv.style.height               = ('300px');
formDiv.style.background           = ('#F5F5F5');
formDiv.style.marginTop            = ('30px');
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
numberError.style.color            = ('black');
numberError.style.fontWeight       = ('bold');
numberError.style.marginTop        = ('15px');
numberError.style.opacity          = ('0');
numberError.style.transition       = ('all .3s ease');
numberError.style.position         = ('relative');
numberError.style.bottom           = ('110px');
almostThereText.style.color        = ('black');
almostThereText.style.fontWeight   = ('bold');
almostThereText.style.marginTop    = ('15px');
almostThereText.style.opacity      = ('0');
almostThereText.style.transition   = ('all .3s ease');
almostThereText.style.position     = ('relative');
almostThereText.style.bottom       = ('160px');
justRight.style.color              = ('black');
justRight.style.fontWeight         = ('bold');
justRight.style.marginTop          = ('15px');
justRight.style.opacity            = ('0');
justRight.style.transition         = ('all .3s ease');
justRight.style.position           = ('relative')
justRight.style.bottom             = ('215px')
tooLong.style.color                = ('black');
tooLong.style.fontWeight           = ('bold');
tooLong.style.marginTop            = ('15px');
tooLong.style.opacity              = ('0');
tooLong.style.transition           = ('all .3s ease');
tooLong.style.position             = ('relative');
tooLong.style.bottom               = ('270px');
complete.style.transition          = ('all .3s ease');
complete.style.opacity             = ('0');
complete.style.color               = ('white')
complete.style.fontWeight          = ('bold');
complete.style.position            = ('relative')
complete.style.bottom              = ('55px')
star.style.position                = 'relative';
star.style.top                     = '-600px';
star.style.left                    = '350px';
star.style.transition              = 'all .1s ease';
star.style.opacity                 = '0';
star.style.height                  = '200px';
star.style.width                   = 'auto';
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

//game canvas
canvas.style.width                 = ('900px');
canvas.style.height                = ('400px');
canvas.style.background            = ('black');
canvas.style.marginTop             = ('50px');

//Add created Elemements to HTML, add created elements to section first.
container.appendChild(title);
container.appendChild(subHeading);
container.appendChild(firstParagraph);
container.appendChild(secondParagraph);
container.appendChild(thirdParagraph);
container.appendChild(formDiv);
container.appendChild(fourthParagraph);
container.appendChild(canvas);
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

//change the property of form.
span[9].style.color      = '#70FFDD';
span[9].style.fontSize   = '45px';
//change the property of games.
span[10].style.color      = '#70FFDD';
span[10].style.fontSize   = '45px';



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
    numberError.style.opacity ='0';
    button.style.border = ('3px solid #7AFFD2');
    star.style.opacity ='0';
}

//form vaildation function


formInput.addEventListener('keyup', update);
    

function update() {
    var press = formInput.value;

    if (event.which == 8){
        almostThereText.style.opacity = '0';
        justRight.style.opacity = '0';
        tooLong.style.opacity = '0';
    }
    else if (event.which == 13) {
        almostThereText.style.opacity = '0';
        justRight.style.opacity = '0';
        tooLong.style.opacity = '0';
    }
    else if(isNaN(press) && press.length >= 1 && press.length < 5) {
        justRight.style.opacity = '0';
        tooLong.style.opacity ='0';
        almostThereText.style.opacity = '1';
    } 
    else if (isNaN(press) && press.length >= 5 && press.length <= 10) {
        almostThereText.style.opacity = '0';
        tooLong.style.opacity = '0';
        justRight.style.opacity = '1';
    } 
    else if (isNaN(press) && press.length > 10) {
        justRight.style.opacity = '0';
        tooLong.style.opacity = '1';
    }
    
}

form.addEventListener('submit', function(e){

    var word = formInput.value;
    if (!isNaN(word)) {
        numberError.style.opacity = ('1');
        formDiv.style.background = '#FF725F';
        button.style.background = '#3E3E3E';
        button.style.color = 'white';
        button.style.border = 'none'
        e.preventDefault();
    }
    else if (isNaN(word) && word.length >= 5 && word.length <= 10) {
        complete.style.opacity   = ('1');
        formDiv.style.background = '#5EB567';
        justRight.style.opacity = '0';
        star.style.opacity = '1';
        e.preventDefault();
        
    } 
    else if (word.length < 5 || word.length > 10){
        warning.style.opacity = ('1');
        formDiv.style.background = '#FF725F';
        button.style.background = '#3E3E3E';
        button.style.color = 'white';
        button.style.border = 'none'
        almostThereText.style.opacity = '0';
        tooLong.style.opacity = '0';
        e.preventDefault();
    }
});




