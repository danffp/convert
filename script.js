
function conversor(){
    var res = document.getElementById('resultado');
    var real = document.getElementById('txtn1').value;
    var moeda = document.getElementById('moeda').value;

        if(moeda == "dolar"){
            
            conversorDolar(real)

        }else if(moeda == "euro"){
            
            conversorEuro(real)

        }else if(moeda == "libra"){

            conversorLibra(real)

        }else{

            res.innerHTML = 'Selecione a moeda de conversão.'
        }
}

function conversorDolar(real){

    var ValorDolar = 0.19704;
    var res = document.getElementById('resultado');


        if(real == ""){
            
            res.innerHTML = "Insira um valor";
        } else{

            var ConvertDolar = real * ValorDolar;
            res.innerHTML = `<span>${ConvertDolar.toFixed(2)}</span> Dólar americano`;
        }
}

function conversorEuro(real){

    var ValorEuro = 0.1786;
    var res = document.getElementById('resultado');

        if(real == ""){
            
            res.innerHTML = "Insira um valor";

        } else{

            var ConvertEuro = real * ValorEuro;
            res.innerHTML = `<span>${ConvertEuro.toFixed(2)}</span> Euros`
        }
}

function conversorLibra(real){

    var ValorLibra = 0.149869;
    var res = document.getElementById('resultado');

        if(real == ""){

            res.innerHTML = "Insira um valor";
        } else{

            var ConvertLibra = real * ValorLibra;
            res.innerHTML = `<span>${ConvertLibra.toFixed(2)}</span> Libra esterlina`
        }
}