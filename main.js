var form = document.querySelectorAll('form')[0]
 var baseUrl = 'https://itunes.apple.com/search?term='
 // const container =document.querySelector('.container');
 var results

 form.addEventListener('submit', function (event) {
   event.preventDefault()
  //  console.log(this)
   const nameInputValue = event.target.querySelector('input').value
  // const searchInput = document.querySelector('input[name="search"]').vaule

  getSearchResults(nameInputValue).then(function (results) {
      console.log(results)
        

            let songs = results
              console.log(results);
              var template = "<div class=row>"
              for(i=0; i < songs.results.length; i++) {
                console.log(songs.results[i])
                 template +=   `<p>${songs.results[i].artistName}</p>
                  <audio play="false" controls="controls" src= "${songs.results[i].previewUrl}" onclick="play()" onclick="pause()"></audio>
                  <p>${songs.results[i].trackName}</p>
                  <img src ="${songs.results[i].artworkUrl100}">
                  `;
                  }
                  form.innerHTML = template;



              return songs
  })
})

 function getSearchResults (artist) {
   var template =`<li>${artistName}${trackViewUrl}${trackName}</li>`;


   template += "</ul>";
   container.innerHTML = template;
 }

 function getSearchResults (searchTerms) {
   return fetch(`${baseUrl}${searchTerms}`).then(function (data) {
     return data.json()
   })

}
var searchInput = document.querySelector('#search-btn')
searchInput.addEventListener('submit', function (event) {
    // console.log(event.target.value)
  })
// document.getElementById('myAudio').play();

// function on clicking play button
function playsong (url){
  var player = document.querySelector('audio')
  player.setAttribute('src', url )
}
