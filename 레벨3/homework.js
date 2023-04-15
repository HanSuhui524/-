//---------array, for 반복문 실력향상 과제
//Q. Array에서 철수라는 자료를 찾고 싶습니다
var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(name){
  for (var i = 0; i < 4; i++) {
    if ( name == 출석부[i]) {
      console.log('있어요')
    }
    return 이름찾기 //이거 없으면 있어요 2번반복함.
  }

}
이름찾기('철수');

//---------array, for 반복문 실력향상 과제
// Q. 갑자기 구구단을 콘솔창에 출력하고 싶습니다.
for (let k = 2; k < 10; k++) {
    for (let i = 1; i < 10; i++) {
        console.log(`${k}` + 'x' +`${i}`+ '=' + (k*i));
    }
  }

//---------array, for 반복문 실력향상 과제
// Q. 평균점수 계산기 만들기 

function 함수(arr, b){
    var result = 0;
  
    for ( let i = 0; i < arr.length; i++ ) {
      result = result + arr[i]
    }
    console.log(result);
    
    if (result/arr.length < b) {
      console.log('올랐네요');
    } else {
      console.log('같거나 떨어졌네요 재수추천')
    }
  }
  
  함수([2,3,4], 10);  //올랐네요 