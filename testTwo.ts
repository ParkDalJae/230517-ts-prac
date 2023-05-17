//* 매개변수를 배열로 받을 예정
//* typeof(arrayData)==='string'
function second(arrayData: string[], stuName: string): string[] {
  //첫번째 배열 인덱스의 변환하는 함수를 만들고싶다.

  let arr: string[] = [...arrayData];
  //*기존 배열의 0번째를 최종적으로 바꿔주는 형태
  //*바꾼다 라는 조건 하에 써야하는 것은
  //* ...전개연산자
  //* splice()
  //* reduce()
  //* map()
  //* push()

  let tmpArray: string[] = [...arrayData];
  //  arr.splice(0, 0, stuName); // * 스플라이스
  // arr.unshift(stuName); //* 언시프트
  return arr;
}

let dataTwo = ["최대건", "정성철", "허진", "이세민"];

console.log(second(dataTwo, "박달재"));
