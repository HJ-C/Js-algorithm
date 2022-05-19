function solution(k, arr){
    let answer;
    let sum =0;
    
    for(let i=0; i<k; i++){
        sum+=arr[i]
    }
    answer=sum;
    
    // 4번째 인덱스부터 쭉 나열
    // arr[i]-arr[i-k]는 첫번째 인덱스를 빼기위한 식
    // sum - (뒤에 인덱스 - 첫번째 인덱스)
    for(let i=k; i<arr.length; i++){
        sum+=arr[i]-arr[i-k]
        answer=Math.max(answer,sum)
    }
    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));