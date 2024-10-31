const text1=document.getElementById("text");
const speed1=document.getElementById("speed");
const str="We Love Programming!!!";
let idx=1;
let speed=200/speed1.value;
writeText()
function writeText()
{
    text1.innerText=str.slice(0,idx);
    idx++;
    if(idx>str.length)
    {
        idx=1;
    }
    setTimeout(writeText,speed);
}
speed1.addEventListener("input",(e)=>{
    speed=200/e.target.value;
})