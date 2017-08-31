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
        event.target.querySelector('input[name="artist"]').value = ''
        fetch("https://itunes.apple.com/search?term=").then(function(response) {
            let songs = results
              console.log(results);
              var template = "<div>"
             for(i=0; i < songs.results.length; i++) {
               console.log(songs.results[i])
               template +=   `<a>${songs.results[i].artistName}</a>
                <a>${songs.results[i].trackViewUrl}</a>
                <a>${songs.results[i].trackName}</a>
                <a>${songs.results[i].artworkUrl100}</a>
                `;
                }
                form.innerHTML = template;



             return songs
           })
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












// const form = document.querySelector('form')
  //const baseUrl = 'https://itunes.apple.com/search?term='
  //let results;
  //form.addEventListener('submit', function (event) {
  //  event.preventDefault()
    //console.log(this)
    //const nameInputValue = event.target.querySelector('input').value


    //getSearchResults(nameInputValue).then(function (results) {

      //results = event.target.querySelector('input[name="name"]').value
      //console.log(results)
    //  })
  //})
      //console.log(results);
//  function getSearchResults (searchTerms) {
  //  return fetch(`${baseUrl}?q=${searchTerms}`).then(function (response) {
  //    return response.json()
  //  })
  //}

//fetch("https://itunes.apple.com/search?term=")
//.then(function(response) {
  //if (response.status !==15) {
  //  console.log(response.status);
  //  return;
  //}
  //response.json().then(function(data) {
  //  console.log("Here is the songs:", data);
  //});
//}
//)
//.catch(function(err) {
  //  console.log("Fetch Error :-S", err);
//});
//function getArtist (artistName) {
//  let chosenArtist = {}
//  for (let i = 0; i < artist.length; i++) {
//        if (artist[i].Name === artistName) {
            //chosenArtist = artist[i]
  //      }
  //}
//  return chosenArtist
//}
//   .then(function(data) {
//     let songs = data.results
//     console.log(songs);
//     // for(i=0; i < songs.length; i++)
//     {
//
//     }
//     return songs
//   })
// })
//songs.forEach(function (artistName) {
  //  template += `<li>${artistName}</li>`;
//});//

//template += "</ul>";
//container.innerHTML = template;

  //const searchInput = document.querySelector('input')

  //searchInput.addEventListener('search', function (event) {
//    console.log(event.target.value)
//  })
