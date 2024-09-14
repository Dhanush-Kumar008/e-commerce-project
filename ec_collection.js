//collection concept js script
var productcontainer=document.querySelector(".product")
var productList=productcontainer.querySelectorall("div")//array of div


function searchfunction(){
    var enteredvalue=document.querySelector("#searchinp").value

    for(var count=0;count<productList.length;count=count+1){
        var productname=productList[count].querySelector("p").textcontent.toUpperCase()
        if(productname.indexOf(enteredvalue)<0){
            productList[count].style.display="none"
        }

        else{
            productList[count].style.display="block"
        }
    }
})
