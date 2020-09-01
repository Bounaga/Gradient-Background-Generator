let body    =   document.getElementById('body');
let color1  =   document.getElementById('color1');
let color2  =   document.getElementById('color2');
let css   =   document.getElementById('css');

function    changeColor()   
    {
        body.style.background =   'linear-gradient(to right,'  
        +   color1.value   
        +   ','  
        +   color2.value 
        +   ')';

    }

function    CssSyntax()   
    {
        css.innerHTML  =   body.style.background;

    }


function    changeColorAndWriteCssSyntax()  {
    changeColor();
    CssSyntax();
}



color1.addEventListener('input',    changeColorAndWriteCssSyntax);
color2.addEventListener('input',    changeColorAndWriteCssSyntax);




