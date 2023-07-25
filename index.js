
const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

const currentYear=new Date().getFullYear();
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
// console.log(newYear);
function UpdateTime(){
  const currentDate=new Date();
  const diff=newYear-currentDate;
  const d=Math.floor((diff/1000/60/60)/24);
  const h=Math.floor((diff/1000/60/60)%24);
  const m=Math.floor((diff/1000/60)%60);
  const s=Math.floor((diff/1000)%60);
  const ms=Math.floor(diff%1000);

  days.innerHTML=d
  hours.innerHTML=h
  minutes.innerHTML=m
  seconds.innerHTML=s
  
  
}
setInterval(UpdateTime,1000);