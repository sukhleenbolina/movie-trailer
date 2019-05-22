const player = new Plyr( 'video' , {
  
  controls : ['play', 'progress', 'fullscreen', 'volume', 'current-time',],
  muted: false,
  clickToPlay : ['true'],
});


window.player = player;

let date = new Date();
let currentYear = date.getFullYear(); 

console.log( currentYear );
console.log( date);

$('footer p span').text(  currentYear );