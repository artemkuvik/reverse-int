module.exports = function reverse (n) {
    let nPositive = Math.abs(n);
    let result = '';
     let nStr = String(nPositive); // '123'
     let i = nStr.length - 1; //2
     while (0 <= i) { //2 1 0
         result = result + nStr[i]; // i = 2, 3. i = 1, 2. i = 0, 1 ...3 2 1
         i = i - 1;
     }
     return Math.abs(result);
   }
  
