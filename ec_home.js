var sidenavbarvar=document.querySelector(".side_navbar")


function shownavbar(){
    sidenavbarvar.style.left="0"
    
}

function closenavbar(){
    sidenavbarvar.style.left="-70%"
}

//pop code js
var overlayvar=document.querySelector(".overlay")
var poploginvar=document.querySelector(".poplogin")


function submitfunction(){
 
//  get the element of overlay and poplogin
    var name=document.getElementById("popin1")
    var age=document.getElementById("popin2")
    var msg=document.getElementById("popin3")

    var nameinp=name.value
    var ageinp=age.value
    var msginp=msg.value

    if(!nameinp || !ageinp || !msginp){
        alert("Fill all the details")
        return;
    }

    overlayvar.style.display="none"
    poploginvar.style.display="none"

    alert("Thank you for contact us 🙏!")

    name.value=""
    age.value=""
    msg.value=""


}

//for x to close the popup
function closepopup(){
     
    //  get the element of overlay and poplogin
    var name=document.getElementById("popin1")
    var age=document.getElementById("popin2")
    var msg=document.getElementById("popin3")

    var nameinp=name.value
    var ageinp=age.value
    var msginp=msg.value
    
    overlayvar.style.display="none"
    poploginvar.style.display="none"

    name.value=""
    age.value=""
    msg.value=""


    


}

//when click the link pop will shown
var contactvar=document.getElementById("contactid")
contactvar.addEventListener("click",function(){
    overlayvar.style.display="block"
    poploginvar.style.display="block"
})

//when click the link pop will shown 
var contactvar=document.getElementById("contactid2")
contactvar.addEventListener("click",function(){
    overlayvar.style.display="block"
    poploginvar.style.display="block"

    
})

