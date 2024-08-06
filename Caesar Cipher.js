function rot13(str) {
    let arr = []
    for(let i = 0;i<str.length;i++){
      if((str[i]+'').match(/[^A-Z]/)){arr.push(str[i]+'')}
      else {
      let num = ((str.charCodeAt(i) - 65))
      arr.push(String.fromCharCode((num+13)%26+65))
      }
    }
    console.log(arr);
    return arr.join('')
  }
  
  
  
  rot13("SERR YBIR?");