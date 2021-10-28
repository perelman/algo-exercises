//A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

const calculateWays = n => {
  //We need to step from 0 to n-1 
  //In each step we can use 1,2,3 if curStep + x < n-1
  //1
  //[1] = 1
  //2
  //[1,1], [2] = 2 
  //3
  //[1,1,1], [1+2], [2+1], [3] = 4
  //4
  //[1,1,1,1], [1+1+2], [1+2+1], [2+1+1],[2+2], [3+1], [1+3] = 7
 
  //P(n,r) = n!/(n - r)!
  
}

const calcFib3 = n => {
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  else {
    return(calcFib3(n-1) + calcFib3(n -2) + calcFib3(n-3))
  }
}


const calc = n => {
  if (n === 0) {
    return n;
  }
  let answer = 1;
  for (let i =1; i <= n; i++) {
    answer = answer * i;
  }
  return answer;
}

const calcP = (n,r) => {
  return calc(n)/(calc(n-r));
}

console.log(calcFib3(1));
console.log(calcFib3(2));
console.log(calcFib3(3));
console.log(calcFib3(4));
console.log(calcFib3(5));
console.log(calcFib3(6));
console.log(calcFib3(7));
//console.log(calcP(2,3));

//calculateWays(1);
//calculateWays(2);
