function solution(arr){
    let answer=arr; //얉은 복사
    let sum = arr.reduce((a,b)=> {
        return a+b;
    })

    for(i=0; i<8; i++){
        for(j=i+1; j<9; j++){
            if(( sum-( arr[i]+arr[j] )) === 100){ //총 합 -(난쟁이1,난쟁이2) === 100이여야함
                answer.splice(j,1) // j값부터 선언하면 i를 먼저 선언한 거와 달리 배열에서 삭제되질 않음
                answer.splice(i,1)
            }
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));