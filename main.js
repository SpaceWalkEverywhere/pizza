menulist_array=["Farmers Fresh Veg Pizza","Double Cheeze margarita","Fiery Paneer Pizza","Cheezebomb Pizza","White & Black Chocolate Pizza"];

function getmenu(){
   var menu;
   menu='<ol class="a">';
   menulist_array.sort();
   for (var i=0;i<menulist_array.length;i++){
       b=i+1
       menu=menu+"<li>"+menulist_array[i]+"</li>";
   }
   menu=menu+"</ol>";
   document.getElementById("display_menu").innerHTML=menu;
   console.log(menu);
}
function add(){
    var item=document.getElementById("add_item").value;
    menulist_array.push(item);
    getmenu();
    additem();
    document.getElementById("add_item").value="";
}
function additem(){
    var menu;
    var items=document.getElementById("add_item").value;
    menulist_array.sort();
    menu="<section class='cards'>"
    for (var i=0;i<menulist_array.length;i++){
        menu=menu+"<div class='card' style='color:white;font-size:25px;'>"+"<img src='pizza.png'>"+menulist_array[i]+"</div>";
    }
    menu=menu="</section>";
    document.getElementById("display_addedmenu").innerHTML=menu;
    console.log(menu);
}
