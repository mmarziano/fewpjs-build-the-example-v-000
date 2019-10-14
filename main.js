// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
window.addEventListener('load', function(){
  createListeners();
});

function createListeners() {
  let posts = document.getElementsByTagName('article');
  for (let i = 0; i < posts.length; i++) {
        let id = posts[i].id;
        let glyph = document.getElementById(`${id}`).querySelector('li.like')
        glyph.addEventListener('click', function() {
          let heart = glyph.querySelector('.like-glyph');
          mimicServerCall()
          .then(function(response) {
            if(response == "Pretend remote server notified of action!") {
            heart.innerText = FULL_HEART;
            heart.className = 'activated-heart'
          } else {
            .catch((response) => {
                // document.querySelector('#modal').className('hidden').remove
                alert(response)
              
            })
          };
          });
          
        });
  }
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
