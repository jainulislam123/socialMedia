let friendStatus = document.querySelector("#friendStatus");
let add = document.querySelector("#add");
let card =document.querySelector("#card img")
let cardbody =document.querySelector("#card")
let cardContent =document.querySelector(".cardContent")
let fs = 0
add.addEventListener("click",()=>{
   fs==0? change():change1();
   friendStatus.classList.toggle("fStatus");
   add.classList.toggle("add");
});
 function change(){
    add.innerText="Undo";
    friendStatus.innerHTML="<h4>Request Sent</h4>";
    fs =1
 }
 function change1(){
    add.innerText="Add Request";
    friendStatus.innerHTML="<h4>Stranger</h4>";
    fs=0;

 }
//  ----------------------------------------------------------------
 var vid = document.createElement('video');
 var close = document.createElement('span');
 close.setAttribute("class" ,"close")
 close.innerHTML='<i class="fa-solid fa-xmark"></i>';
 vid.src = 'vdo.mp4';
 vid.autoPlay = true;
 vid.controls = true;
  let cl=1;
 close.addEventListener("click",()=>{
 if(cl===1){
   close.style.display="none";
   vid.style.display="none";
   vid.pause();
   cardContent.style.display="block";
   card.style.border="4px solid rgba(221, 121, 191, 0.789)";
   cl=2
 }else{
   cl=1;
   close.style.display="none";
   vid.style.display="none";
   vid.pause();
   cardContent.style.display="block";
   card.style.border="4px solid rgba(121, 121, 191, 0.789)";

 }
   

 })
 card.addEventListener("click",()=>{
      cardbody.prepend(vid);
      cardbody.appendChild(close);
      vid.play();
      vid.style.display="block";
      close.style.display="block";
      cardContent.style.display="none";
 })
 // instagram script------------------------------------------------
 let icon = document.querySelector(".loveIcons span");
 let LikeStatus =document.querySelector("#LikeStatus");

  let flag=1;
 icon.addEventListener("click",()=>{
   if( flag===1){
      icon.innerHTML='<i class="fa-solid fa-heart"></i> ';
      flag=0;
      let likes = parseInt(LikeStatus.innerHTML);
      LikeStatus.innerHTML= likes+1
   }else{
      icon.innerHTML= '<i class="fa-regular fa-heart"></i>' ;
   flag=1;
   let likes = parseInt(LikeStatus.innerHTML);
   LikeStatus.innerHTML= likes-1
   }
   removelike.play();
 });

 // instagram2 script------------------------------------------------
 let like = new Audio('pop1.mp3');
 let removelike = new Audio('like.mp3');
 let card3 = document.querySelector("#card3");
 let loveIcons2 = document.querySelector(".loveIcons2 span");

 let liked = true;
 card3.addEventListener("dblclick",()=>{

   if(liked === true){
      loveIcons2.style.transform=" translate(-50%,-50%) scale(1.8)";
      loveIcons2.style.opacity=" 0.8";
      loveIcons2.style.color="#dadada";
      like.play();
      setTimeout(() => {
        loveIcons2.style.transform=" translate(-50%,-50%) scale(.4)";
        card3.style.backgroundColor="rgb(222, 114, 89)";
        loveIcons2.style.color="rgba(234, 71, 71, 0.935)"
        removelike.play();
      }, 1500);
      liked = false;
   }else{
      loveIcons2.style.transform=" translate(-50%,-50%) scale(0)";
      removelike.play();
      card3.style.backgroundColor="rgb(233, 238, 238)";
      liked = true;
   }

 })

