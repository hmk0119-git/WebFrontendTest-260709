let a = ''
let b = 0
const c = []

c.push(1, 2)
a = 'ABC'
b = 123
console.log(a, b)

//타입추론
// 추론 0: 원시형(문자, 숫자, boolean, null, undefined, )
// 추론 x: 참조형(배열, 객체, 함수 ...)
