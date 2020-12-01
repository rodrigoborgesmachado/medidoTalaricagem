function topo(){
	parent.scroll(0,0);
}

$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#ClinicaJonasGabriela']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

function CalculaTalaricagem(tempoRelacionamento, casados, nivelGostar, nivelBrotheragem){
    var retorno = 100;

    if(!Number.isInteger(parseInt(tempoRelacionamento)) ||
       !Number.isInteger(parseInt(nivelGostar)) || 
       !Number.isInteger(parseInt(nivelBrotheragem))){
        retorno = -1;
    }
    else{
        if(parseInt(tempoRelacionamento) == 0){
            retorno -= 100;
        }
        if(parseInt(tempoRelacionamento) < 2  && retorno > 0){
            retorno -= 50;
        }
        if(parseInt(nivelGostar) < 7  && retorno > 0){
            retorno -= 50;
        }
        if(parseInt(nivelBrotheragem) < 7 && retorno > 0){
            retorno -= 50;
        }
    }

    return retorno;
}

function MontaResultado(nivelTalaricagem, retorno){
    var texto = `<h1>O nível de talaricagem é ${nivelTalaricagem}%.`;

    if(nivelTalaricagem == -1){
        texto+= `PREENCHE ESSA KACETA DIREITO POHA</h1>`;
        alert('PREENCHE ESSA KACETA DIREITO POHA');
    }
    else if(nivelTalaricagem < 20){
        texto+= `Logo, não é talarico porra nenhuma!</h1><br><br><img src="images/compreensivel.jpg" width="100%" height="100%">`;
    }
    else if(nivelTalaricagem >=20 && nivelTalaricagem < 50){
        texto+= `Logo, é um pouco talarico, vai te fuder!</h1><br><br><img src="images/talarico.png" width="100%" height="100%">`;
    }
    else if(nivelTalaricagem >=50){
        texto+= `TALARICO PRA CARALHO, PREFERE MULHER QUE AMIZADE!</h1><br><br><img src="images/talaricoMorto.jpg" width="100%" height="100%">`;
    }
    else{
        texto += `</h1>`;
    }
 
    return texto;
}