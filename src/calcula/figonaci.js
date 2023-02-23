//1,1,2,3,5,8,13,21

export function figonacci(numero) {
  let num = 0;
  let num2 = 1;
  let res;
  for (let index = 0; index < numero; index++) {
    res = num + num2;
    num2 = num;
    num = res;
  }
  return res;
}