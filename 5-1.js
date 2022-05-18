(1) 그냥 내장메서드
function solution(arr1, arr2){
    let answer=[];

    let newArr = answer.concat(arr1,arr2)
    newArr.sort((a,b)=>a-b)

    answer = newArr;
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));

(2) 투포인터
function solution(arr1, arr2){
    let answer=[];
    let n=arr1.length;
    let m=arr2.length;

    p1=p2=0
    //포인터끼리 비교해서 작은수를 answer에 push
    while(p1<n && p2<m){
        if(arr1[p1]<arr2[p2]){
            answer.push(arr1[p1++])
        }else{
            answer.push(arr2[p2++])
        }
        
        //한쪽 포인터가 종료됐을때 나머지 출력
        while(p1<n){
            answer.push(arr1[p1++])
        }
        while(p2<m){
            answer.push(arr2[p2++])
        }
    }

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));