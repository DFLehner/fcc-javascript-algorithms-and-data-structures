function palindrome(str) {
    str = str.replace(/[^\w\d]/g,"")
    str = str.replace(/_/g,"")
    str = str.toLowerCase()
    console.log(str)
    for(let i=0;i<str.length;i++){
      if(!(str[i]==str[str.length-i-1])){
        return false;
      }
  
    }
    return true;
  }
  
  palindrome("0_0 (: /-\ :) 0-0");