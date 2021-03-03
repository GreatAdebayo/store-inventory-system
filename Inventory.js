
var store = [];

var btn1 = () =>{
   var itm = {item:"", price:"", qty: "", dat: "", seller: "", total:""};
    
    var a = item1.value;
    var b = price1.value;
    var c = qty1.value;
    var d = dat1.value;
    var e = seller1.value;
    var f = b * c;
   

  
    itm.item = a;
    itm.price = b;
    itm.qty = c;
    itm.dat = d;
    itm.seller = e;
    itm.total = f;
   

      store.push(itm);
      var myJSON = JSON.stringify(store);
      localStorage.setItem("myStore", myJSON);
      confirm("Item Details Successfully Saved!") 
           
      document.getElementById("cont").style.visibility = "hidden";


};


var viewStore =()=>{
     tab.innerHTML = "";

    var mystore = JSON.parse(localStorage.getItem("myStore"));
  
    var grandTot = 0
     mystore.forEach(function(each, i){
     
        var i;
        var item2 = mystore[i].item;
        var price2 = mystore[i].price;
        var qty2 = mystore[i].qty;
        var dat2 = mystore[i].dat;
        var seller2 = mystore[i].seller;
        var total2 = mystore[i].total;

       grandTot += total2
   
  tab.innerHTML += `<tr><td>${i+1}</td><td>${item2}</td><td>${price2}</td><td>${qty2}</td><td>${dat2}</td><td>${seller2}</td><td>${total2}</td></tr>`
          
     });
     
     document.getElementById("grand1").innerHTML = "Grand Total:" + " " + "$"+ grandTot 
      
    };

   

    var printIt = () =>{
       window.print()
    };


    var clos = () => {
       
       document.getElementById("cont").style.visibility = "hidden";
    };


    var prev = () => {
      var g= item1.value;
      var h = price1.value;
      var i = qty1.value;
      var j = dat1.value;
      var k = seller1.value;
      var l = h * i;

      if(g == "" ){
         confirm("Please Fill In all Input")

      }else{
         document.getElementById("cont1").innerHTML = "ITEM NAME:" + " " + g + "<br>" + "<br>" + "PRICE:" + " " + h + "<br>" + "<br>" + "QUANTITY:" + " " + i + "<br>" + "<br>" + "DATE:" + " " + j + "<br>" + "<br>" + "SELLER\'S NAME:" + " " + k + "<br>" + "<br>"
         document.getElementById("cont").style.visibility = "visible";
      }
      
    };

   