


 



// задание 1
   for( let number = '*'; number.length <= 7; number += '*' ){
     console.log(number);
   }
// задание 1




// задание 2
for(let number2 = 1; number2 <= 100; number2++){
      if (number2 % 3 === 0 && number2 % 5 === 0){
        console.log('FizzBuzz');
      } else if(number2 % 3 === 0){
        console.log('Fizz');
      } else if (number2 % 5 === 0){
         console.log('Buzz');
      } else {
         console.log(number2)
      }
}
// задание 2





// задание 3
const size = 8;
let chessboard = '';

for (let row = 0; row < size; row++) {

  for (let col = 0; col < size; col++) {

    if ((row + col) % 2 === 0) {
      chessboard += ' ';
    } else {
      chessboard += '#';
    }
    
  }
  chessboard += '\n';
}

console.log(chessboard);
// задание 3





// задание 4
const friend = true;
const online = true;
const doNotDisturb = false;


if(friend === true && online === true && doNotDisturb === false){
   console.log('Можно открыть чат с пользователем');
} else {
   console.log('Нельзя открыть чат с пользователем');
}
// задание 4




// задание 5
const subscription = 'pro';

if (subscription === 'pro' || subscription === 'vip'){
   console.log('доступ к контенту разрешен');
} else {
   console.log('доступ к контенту запрещен');
}
// задание 5







































































































