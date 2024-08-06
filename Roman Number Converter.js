function convertToRoman(num) {
    let numstr = ''
    while(num>=1000){
      num-=1000;
      numstr += 'M';
      if(num==0){break};
    }
    if(num >= 900){num-=900;numstr += 'CM'}
    if(num >= 500){num-=500;numstr += 'D'}
    if(num >= 400){num-=400;numstr += 'CD'}
    while(num >= 100){num-=100;numstr += 'C'}
    if(num >= 90){num-=90;numstr += 'XC'}
    if(num >= 50){num-=50;numstr += 'L'}
    if(num >= 40){num-=40;numstr += 'XL'}
    while(num >= 10){num-=10;numstr += 'X'}
    if(num == 9){num-=9;numstr += 'IX'}
    if(num >= 5){num-=5;numstr += 'V'}
    if(num == 4){numstr += 'IV'; return numstr;}
    if(num == 0) return numstr;
    while(num!=0){
      num--;
      numstr += 'I';
    }
    return numstr
   }