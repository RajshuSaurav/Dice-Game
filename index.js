function myfunction(){
        var random=Math.floor(Math.random()*6)+1;
        var imageAdd="dice"+random+".png";
        var images=document.querySelectorAll("img")[0];
        images.setAttribute("src","images/"+imageAdd);
        var random2=Math.floor(Math.random()*6)+1;
        var imageAdd2="dice"+random2+".png";
        var images2=document.querySelectorAll("img")[1];
        images2.setAttribute("src","images/"+imageAdd2);
        if(random>random2){
            document.querySelector("h1").innerHTML="Winner:- player-1";
        }
        else if(random<random2){
            document.querySelector("h1").innerHTML="Winner:- player-2";
        }
        else{
            document.querySelector("h1").innerHTML="Draw...!";
        }
   
       
}


