const passwordbox=document.querySelector('#password');
let length=16;
const massage=document.querySelector('#massage');
const audio=new Audio("gen.mp3");
const audiotwo=new Audio("copy.mp3")
/**
 * all clicked function
 * here are case to define all password
 */

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_+~\`|}{[]:;?><,./-=";
const allChar=upperCase+lowerCase+numbers+symbols;
/**
 * genarated password
 * audio play for genarated password
 * massage for genarated password
 */
function genPassword(){
 let password= "";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=numbers[Math.floor(Math.random()*numbers.length)];
    password +=symbols[Math.floor(Math.random()*symbols.length)];
while(length>password.length){
    password +=allChar[Math.floor(Math.random()*allChar.length)];
    }
passwordbox.value=password;
 
    audio.play();

  const showmsg=()=>{
    massage.innerHTML="password generated";
    massage.classList.add("active")
    
    
  setTimeout(()=>{
    massage.innerHTML="";
    massage.classList.remove("active")



            },2000);
        }

showmsg();
}

/**
 * here are the functions for copy password
 * audio play for copy password
 * massage for copy password
 * copy password
 */

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");

    audiotwo.play();

    massage.innerHTML="Password copied to clipboard";
    massage.classList.add("succes");

    setTimeout(()=>{
        massage.innerHTML="";
        massage.classList.remove("succes");
        
    
    },2000);
}









