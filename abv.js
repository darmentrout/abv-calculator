/*
Calculate the Alcohol by Volume (ABV) of your
homebrewed beer using the following formula:
ABV = ((((OG-FG)*1.05)/FG)/0.79)*100
1.05 g — the amount of CO2 per gram of ethanol produced
0.79 g/mL  – the density of ethanol alcohol
Original Code Gist: https://gist.github.com/darmentrout/9e6e67ecf5af9e54f6494c2311e85338

--- TEST ---
OG: 1.050
FG: 1.010
ABV: 5.25%
https://www.brewersfriend.com/abv-calculator/
*/

function calculateABV(e){
    e.preventDefault();

    OG = parseFloat( document.getElementById('OG').value );
    Otemp = parseFloat( document.getElementById('Otemp').value );

    switch (Otemp) {
        case Otemp < 60:
            OG = OG - 0.001;
            break;
        case Otemp > 80:
            OG = OG + 0.002;
            break;
        default:
            OG = OG + 0.001
    }

    FG = parseFloat( document.getElementById('FG').value );
    Ftemp = parseFloat( document.getElementById('Ftemp').value );

    switch(Ftemp){
        case Ftemp < 60:
            FG = FG - 0.001;
            break;
        case Ftemp > 80:
            FG = FG + 0.002;
            break;
        default:
            FG = FG + 0.001;
    }

    document.getElementById('result').innerHTML = (((((OG-FG)*1.05)/FG)/0.79)*100).toPrecision(3);

}
document.getElementById('compute').addEventListener('click', calculateABV);


document.getElementsByTagName('form')[0].addEventListener('reset', () => {
    document.getElementById('result').innerHTML = 0.00;
});


var inputs = document.querySelectorAll('input[type=number]');
function validityCheck(){
    for( var [index, input] of inputs.entries() ){
        if( !input.validity.valid ){
            document.getElementById('compute').setAttribute('disabled', true);
            return false;
        }
        else{
            document.getElementById('compute').removeAttribute('disabled');
        }
    }
}
inputs.forEach( (v,k) => {
    v.addEventListener('keyup', validityCheck);
});


var currentYear = new Date();
    currentYear = currentYear.getFullYear();
document.getElementById('copyrightYear').innerHTML = currentYear;
