function XO(str) {
    str = str.toLowerCase()
      function counter(str, letter){
        let count = 0
        for(let i = 0; i < str.split('').length; i++){
          if(str.split('')[i] == letter){
            count = count + 1
          }
        }
        return count
      }
    if( counter(str,"x") == counter(str,"o") ){
      return true
    }else{
      return false
    }
  }



  /*

7kyu Exes and Ohs


  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

BEST SOLUTİONS

---------------------------------------------------------------------------------------------------

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

---------------------------------------------------------------------------------------------------


const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}