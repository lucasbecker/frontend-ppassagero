var dateControl1 = document.getElementById('dataout');
var dateControl2 = document.getElementById('datain');

// Criando variavel com data atual completa
var data = new Date();

// Criando variavel com string da data
var now = data.getFullYear() + '-' + ('00' + (data.getMonth() + 01) ).slice(-2) + '-' + data.getDate();

var forward = data.getFullYear() + '-' + ('00' + (data.getMonth() + 01) ).slice(-2) + '-' + (data.getDate()+1);

// Passando string para o min e value dos date-input
dateControl1.min = now;
dateControl2.min = now;
dateControl1.value = now;
dateControl2.value = forward;

function formataReal(real){
  
  return real.toFixed(2).replace(".",",");
  
}

function calcular(){
  
  var carro = document.getElementById('inputcarro').value;
  var dataInicial = document.getElementById('dataout').value;
  var horaInicial = document.getElementById('horaout').value;
  var dataFinal = document.getElementById('datain').value;
  var horaFinal = document.getElementById('horain').value;
  
  var retirada = new Date(dataInicial+" "+horaInicial);
  var devolucao = new Date(dataFinal+" "+horaFinal);
  var diff = Math.abs(devolucao.getTime() - retirada.getTime());

  //Tempo em minutos
  var tempo = Math.ceil(diff / (1000*60));

  // TESTES
  //console.log(dataInicial+" "+horaInicial);
  //console.log(dataFinal+" "+horaFinal);
  
  // Formula
  var valor = (carro/1440) * tempo;
  
  document.getElementById('btnsimula').value = `Valor R$` + formataReal(valor);

}




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