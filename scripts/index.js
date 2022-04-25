// Store the wallet amount to your local storage with key "amount"
  var arr = JSON.parse(localStorage.getItem("amount"))
 let addAmount = () => {
  
      let amount = document.getElementById("amount").value
      
      arr.push(amount)
    let out = arr.reduce(function(sum,el){
       return sum+=Number(el)
     },0)
     document.getElementById("wallet").innerText = out

      localStorage.setItem("amount",JSON.stringify(arr))
      
      
 }