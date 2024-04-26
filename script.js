const input= document.querySelector("input");

function palindromeChecker(){

     const str= input.value.trim();

     const rev= str.split("").reverse().join("");

     if(str === rev){
        alert("Palindrome")
     }
     else {
        alert("Sorrry! Not")
     }


}