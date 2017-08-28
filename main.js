const form = document.querySelectorAll('form')[0]
 const baseUrl = 'https://itunes.apple.com/search?term='
 let results
 form.addEventListener('submit', function (event) {
   event.preventDefault()
   console.log(this)
   const nameInputValue = event.target.querySelector('Prince').value



   getSearchResults(nameInputValue).then(function (results) {
     results = event.target.querySelector('input[name="name"]').value
     console.log(results)
     })


 function getSearchResults (searchTerms) {
   return fetch(`${baseUrl}?q=${searchTerms}`).then(function (response) {
     return response.json()
   })
 }

 const searchInput = document.querySelector('input[name="search"]')

 searchInput.addEventListener('search', function (event) {
   console.log(event.target.value)
 })
 })



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
