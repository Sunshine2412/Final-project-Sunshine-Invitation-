const preloader=document.getElementById("preloader");
const main=document.getElementById("mainContent");
const openBtn=document.getElementById("openInvitation");
const music=document.getElementById("weddingMusic");
const musicBtn=document.getElementById("musicBtn");

window.addEventListener("load",()=>setTimeout(()=>preloader.classList.add("hidden"),700));

openBtn.addEventListener("click",async()=>{
  main.classList.remove("hidden");
  document.body.classList.add("opened");
  window.scrollTo({top:window.innerHeight,behavior:"smooth"});
  try{await music.play();musicBtn.textContent="♫";}catch(e){}
});

musicBtn.addEventListener("click",async()=>{
  if(music.paused){try{await music.play();musicBtn.textContent="♫";}catch(e){}}
  else{music.pause();musicBtn.textContent="♪";}
});

const target=new Date("2026-12-12T08:00:00+07:00").getTime();
const boxes=document.querySelectorAll("#countdown strong");
function countdown(){
  let diff=Math.max(0,target-Date.now());
  let d=Math.floor(diff/86400000);diff%=86400000;
  let h=Math.floor(diff/3600000);diff%=3600000;
  let m=Math.floor(diff/60000);diff%=60000;
  let s=Math.floor(diff/1000);
  [d,h,m,s].forEach((v,i)=>boxes[i].textContent=String(v).padStart(2,"0"));
}
countdown();setInterval(countdown,1000);

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
document.querySelectorAll(".photo").forEach(p=>p.addEventListener("click",()=>{
  lightboxImg.src=p.dataset.full;lightbox.classList.add("show");
}));
document.getElementById("closeLightbox").addEventListener("click",()=>lightbox.classList.remove("show"));
lightbox.addEventListener("click",e=>{if(e.target===lightbox)lightbox.classList.remove("show")});

document.getElementById("rsvpForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("guestName").value.trim();
  const attendance=document.getElementById("attendance").value;
  const guests=document.getElementById("guests").value;
  const message=document.getElementById("message").value.trim();
  const text=`Halo Raka & Alya,%0A%0ASaya *${encodeURIComponent(name)}* mengonfirmasi:%0AKehadiran: ${encodeURIComponent(attendance)}%0AJumlah tamu: ${encodeURIComponent(guests)}%0AUcapan: ${encodeURIComponent(message||"-")}`;
  window.open(`https://wa.me/6282262522346?text=${text}`,"_blank");
});
