function solution(arr){         
    let answer,min=arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]<min) min=arr[i];
    }


    return answer;
}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// arr[0]=5 이기 때문에 다음 배열 탐색으로 7은 false가 되고 1은 true이므로
// 1이 남는다.


다른 방법
function solution(arr){         
    let answer = Math.min(1,2,3,4,5,6)
    // let answer = Math.min(arr) => arr는 인자로 받아올 수 없다.
    // let answer = Math.min(...arr) => spread operator 사용시 불러 올 수 있다.
    // let answer = MAth.min.apply(null,arr) => null은 객체, 두번째 인자에 넣어야 함
    return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

방법1 : 인자로 하나하나 넣는다.
방법2 : spread operator 사용한다.
방법3 : apply(null, arr)를 사용한다 