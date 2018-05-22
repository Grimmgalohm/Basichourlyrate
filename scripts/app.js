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
  var form = document.querySelector('form');
  var totales = document.querySelector('.totales');
  var mim = document.querySelector('.mim');
  var cph = document.querySelector('.cph');
  */

  currentSection = 12;

  var horas = document.querySelector("horas");
  var diassemanales = document.querySelector("ds");
  var gastosdevivienda = document.querySelector("gvivienda");
  var gastosdeluz = document.querySelector("gluz");
  var gastosteleinter = document.querySelector("gtei");
  var gastoscomida = document.querySelector("gc");
  var gastostelefcel = document.querySelector("gtc");
  var gastostransporte = document.querySelector("gt");
  var gastosentretenimiento = document.querySelector("ge");
  var porcentajeganancia = document.querySelector("porcentajeganancia")/100;
  var porcentajejubilacion = document.querySelector("porcentajejubil")/100;

  var totalgastosmensuales = gastosdevivienda+gastosdeluz+gastosteleinter+gastoscomida+gastostelefcel+gastostransporte+gastosentretenimiento;
  var gastosmasganancia = totalgastosmensuales + (totalgastosmensuales*porcentajeganancia);
  var mim = gastosmasganancia + (gastosmasganancia*porcentajejubilacion);
  var totaldehoras = horas * (diassemanales * 4);
  var costoporhora = mim/totaldehoras;

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