// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var arr = JSON.parse(localStorage.getItem("amount"))

 let out = arr.reduce(function(sum,ele){
     return sum+=Number(ele)
 },0)
 document.getElementById("wallet").innerText = out




 var arr1 = JSON.parse(localStorage.getItem("movie")) 
let movies = document.getElementById("movie")
 arr1.forEach(function(ele){
 movies.innerHTML = null
  let div = document.createElement("div")

  let title = document.createElement("h3")
  title.innerHTML = ele.Title

  let poster = document.createElement("img")
  poster.src =ele.Poster

  div.append(title,poster)

  movies.append(div)
 })

function confirm(){
  let user_name = document.getElementById("user_name").value

  let seats = document.getElementById("number_of_seats").value

  var no  = seats * 100

 if(no>out){
   alert("Insufficient Balance !")
 }
 else{
  var nos = out - no
  document.getElementById("wallet").innerText = nos
   alert("Booking Successful!")
  
 }

}