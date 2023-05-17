/**
 * @params {array} arrayData
 * @params {string} insertData 삽일 할 데이터입니다. 값은 문자열입니다.
 * @params {array} 문자열로 된 배열입니다.
 *
 * 대건씨 미안해
 */
function first(arrayData) {
  //첫번째 배열 인덱스의 변환하는 함수를 만들고싶다.
  var result = arrayData[0];
  result = "강지민";
  var arr = [];
  arr.unshift(result);
  return arr;
}
var data = ["최대건", "정성철", "허진", "이세민"];
console.log(first(data));
first();
