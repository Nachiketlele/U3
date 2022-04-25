// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var arr = JSON.parse(localStorage.getItem("amount")) || []

let out = arr.reduce(function(sum,el){
   return sum+=Number(el)
 },0)
 document.getElementById("wallet").innerText = out








let movies = document.getElementById("movies")
let id;
 async function searchMovies(){
   try{
     const search = document.getElementById("search").value

     const res = await fetch(`https://www.omdbapi.com/?apikey=d08d2738&s=${search}`)

     const data = await res.json()

     const movies = data.Search
    return movies
     console.log(movies)
   }
   catch(err){
     console.log(err)
   }
 }

 function append(data){
   movies.innerHTML =null
    
     data.forEach(function(el){
       let div = document.createElement("div")

       div.id = "container"

        let poster = document.createElement("img")

        poster.src = el.Poster

        poster.id = "poster"

        let title = document.createElement("h3")

        title.innerText = el.Title

        title.id = "title"


        let Book =  document.createElement("button")
        Book.innerText = "book now"

        Book.class = "book_now"

        Book.addEventListener("click",function(){
          addMovies(el)
        })



          div.append(poster,title,Book)

          movies.append(div)
     })
}

  function addMovies(data){
    var arr = JSON.parse(localStorage.getItem("movie")) || []

    arr.push(data)
    localStorage.setItem("movie",JSON.stringify(arr))
    window.location.href = "checkout.html"
  }


 async function main(){
   let data = await searchMovies()

   if(data == undefined){
     return false
   }
   append(data)
 }

 function debounce(func,delay){
       if(id){
         clearTimeout(id)
       }
       id = setTimeout(function(){
         func()
       },delay)
 }