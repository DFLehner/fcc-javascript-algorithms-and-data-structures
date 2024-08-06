function telephoneCheck(num){
    num = num.replace(/^1\s{0,1}/,'');
    console.log(num)  
    let regex1 = /^\d{3}-\d{3}-\d{4}$/
    let regex2 = /^\(\d{3}\)\d{3}-\d{4}$/
    let regex3 = /^\(\d{3}\)\s\d{3}-\d{4}$/
    let regex4 = /^\d{3}\s\d{3}\s\d{4}$/
    let regex5 = /^\d{10}$/
    //let regex6 = /^1\s\d{3}\s\d{3}\s\d{4}$/
    if(regex1.test(num)||regex2.test(num)||regex3.test(num)||regex4.test(num)||regex5.test(num)) return true;
    return false;
    
    
    }
    