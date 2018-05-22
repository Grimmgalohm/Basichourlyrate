var sections = document.querySelectorAll('section');
var comenzar = document.querySelector('.comenzar');
var siguiente = document.querySelectorAll('.siguiente');
var reiniciar = document.querySelector('.reiniciar');
var calcular = document.querySelector('.calcular');
var currentSection = 0;

TweenMax.set('section',{display: 'none'});
TweenMax.set(sections[currentSection],{display: 'flex'});
TweenMax.from(sections[currentSection], 0.5, {opacity: 0});

comenzar.addEventListener('click', function(e){
  e.preventDefault();
  currentSection = 1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});

siguiente.forEach(btn => btn.addEventListener('click', function(e){
  e.preventDefault();
  currentSection = currentSection + 1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
}));

calcular.addEventListener('click', function(e){
  e.preventDefault();
  /*
  var totales = document.querySelector('.totales');
  var mim = document.querySelector('.mim');
  var cph = document.querySelector('.cph');
  */

  currentSection = 12;

  var form = document.querySelector('form');

  var horas = form.horas.value;
  var diassemanales = form.ds.value;
  var gastosdevivienda = form.gvivienda.value;
  var gastosdeluz = form.gluz.value;
  var gastosteleinter = form.gtei.value;
  var gastoscomida = form.gc.value;
  var gastostelefcel = form.gtc.value;
  var gastostransporte = form.gt.value;
  var gastosentretenimiento = form.ge.value;
  var porcentajeganancia = form.porcentajeganan.value;
  var porcentajejubilacion = form.porcentajejubil.value;

  var totalgastosmensuales = (gastosdevivienda + gastosdeluz + gastosteleinter + gastoscomida + gastostelefcel + gastostransporte + gastosentretenimiento);
  var gastosmasganancia = (totalgastosmensuales + (totalgastosmensuales*(porcentajeganancia / 100)));
  var mim = (gastosmasganancia + (gastosmasganancia*(porcentajejubilacion / 100)));
  var totaldehoras = (horas * (diassemanales * 4));
  var costoporhora = (mim / totaldehoras);

  console.log(totalgastosmensuales, gastosmasganancia, mim, totaldehoras, costoporhora);

  document.querySelector(".cph").innerHTML=costoporhora;
  document.querySelector(".mim").innerHTML=mim;
  document.querySelector(".totales").innerHTML=totalgastosmensuales;

  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});

reiniciar.addEventListener('click', function(e){
  e.preventDefault();
  currentSection = 0;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});