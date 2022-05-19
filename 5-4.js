function solution(m, arr){
    let answer=0;
    let lt=sum=0;

    for(let rt=0; rt<arr.length; rt++){
        sum += arr[rt];
        while(sum > m ){
            sum-=arr[lt++]
        }
        // 끝자리 숫자구한 후 개수구하기
        answer+=(rt-lt+1)
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));