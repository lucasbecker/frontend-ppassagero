var dateControl1 = document.getElementById('dataout');
var dateControl2 = document.getElementById('datain');

// Criando variavel com data atual completa
var data = new Date();

// Criando variavel com string da data
var now = data.getFullYear() + '-' + ('00' + (data.getMonth() + 01) ).slice(-2) + '-' + ('00' + data.getDate()).slice(-2);

var forward = data.getFullYear() + '-' + ('00' + (data.getMonth() + 01) ).slice(-2) + '-' + ('00' + (data.getDate()+1)).slice(-2);

// Passando string para o min e value dos date-input
dateControl1.min = now;
dateControl2.min = forward;
dateControl1.value = now;
dateControl2.value = forward;

function formataReal(real){
  return real.toFixed(2).replace(".",",");
}

function calcular(){
  var carro = document.getElementById('inputcarro').value;
  var myString = carro;
  var splits = myString.split('/');
    if(document.getElementById('inputcarro2')){
      var carro2 = document.getElementById('inputcarro2').value;
      var myString2 = carro2;
      var splits2 = myString2.split('/');
    }
    if(document.getElementById('inputcarro3')){
      var carro3 = document.getElementById('inputcarro3').value;
      var myString3 = carro3;
      var splits3 = myString3.split('/');
    }
    if(document.getElementById('inputcarro4')){
      var carro4 = document.getElementById('inputcarro4').value;
      var myString4 = carro4;
      var splits4 = myString4.split('/');
    }

  var dataInicial = document.getElementById('dataout').value;
  var dataFinal = document.getElementById('datain').value;
  
  var retirada = new Date(dataInicial);
  var devolucao = new Date(dataFinal);
  var diff = Math.abs(devolucao.getTime() - retirada.getTime());

  //Tempo: 1440 = 1 dia
  var tempo = Math.ceil(diff / (1000*60));

  if(tempo<=1440) {
    var x = 0;
  }else if (tempo > 1440 && tempo <= 2880) {
    var x = 1;
  }else if (tempo > 2880 && tempo <= 5760) {
    var x = 2;
  }else if (tempo > 5760 && tempo <= 20160) {
    var x = 3;
  }else if (tempo > 20160 && tempo <= 41760) {
    var x = 4;
  }else if(tempo >= 41760) {
    var x = 5;
  }

  var valor = ((splits[x]/1440) * tempo);
    if(splits2){
      valor = valor + ((splits2[x]/1440) * tempo);
    }
    if(splits3){
      valor = valor + ((splits3[x]/1440) * tempo);
    }
    if(splits4){
      valor = valor + ((splits4[x]/1440) * tempo);
    }

  document.getElementById('btnsimula').value = `Valor R$` + formataReal(valor);

}


$(document).ready(function() {
  var max_fields = 4; //maximum input boxes allowed
  var wrapper = $(".seletor"); //Fields wrapper
  var add_button = $(".addbutton"); //Add button ID

  var x = 1; //initlal text box count
  $(add_button).click(function(e) { //on add input button click
    e.preventDefault();
    var length = wrapper.find("select").length;

    if (x < max_fields) { //max input box allowed
      x++; //text box increment
      $(wrapper).append('<div><select name="carro" id="inputcarro' + (length+1) + '"><option value="0" selected>Selecione Um Carro</option> <option value="110/100/90/70.60/57.05/43.50" >Fiat Mob 1.0 LIKE</option><option value="200/180/160/100/80/76">Captur 1.6 ZEN</option><option value="120/110/100/75/61/45.25" >Onix 1.0 JOY</option><option value="155/140/130/120/65/57">Montana 1.4 SL</option></select><button class="removebutton">-</button></div>'); //add input box
    }
  });

  $(wrapper).on("click", ".removebutton", function(e) { //user click on remove text
    e.preventDefault();
    $(this).parent('div').remove();
    x--;
  })

});

$('.slider-frota').slick({
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


$('.slider-promocoes').slick({
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-parceiros').slick({
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


