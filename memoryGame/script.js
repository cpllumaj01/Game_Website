//given an images query, it will fade on true, and unfade on false
function fade(bool, num) {
    var i = 0;
    var element = document.getElementsByTagName("img")[num];
    var k = window.setInterval(function() {
      if (i > 10) {
        clearInterval(k);
      } else {
        element.style.opacity = (bool)? (10 - i) / 10: (i) / 10;
        i++;
      }
    }, 50);
};

let score = 1;
const level = document.createElement('div');
level.textContent = 'Level : ' + score;
level.style.width = '310px';
level.style.marginLeft = 'auto';
level.style.marginRight = 'auto';
level.style.fontSize = '20px';
level.style.marginTop = '2px';


const body = document.getElementsByTagName("body")[0];
body.appendChild(level);

function play(score){
  let arr = [];
  let imageIndex = 0;
  for(let i = 0; i < score; i++){
      imageIndex = Math.floor(Math.random() * 9) + 1;
      setTimeout(()=> {
        fade(false, imageIndex);
      }, 1000*i);
      setTimeout(()=> {
        fade(true, imageIndex);
      }, 1000*i + 500);

      arr.push(imageIndex);
  }
}
 
play(6);
