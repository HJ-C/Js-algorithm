function solution(m, arr){
    // m = 지정 값
    let answer=0;
    let n = arr.length;
    let lt=sum=0;
    
    for(let rt=0; rt<n; rt++){
        sum += arr[rt]
        if(sum == m){
            answer++
        }
        while(sum > m ){
            sum -= arr[lt++]
            if(sum == m) answer++;
        }
    }
    

    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

// rt는 for문으로 시작해서 먼저 가는 포인터
// lt는 rt가 6이 됐을때 뒤따라오는 포인터

// rt가 6이되면 answer++하기.
// rt가 6이 초과하면 lt를 ++해서 sum에서 lt를 뺀다.

// sum에서 lt를 뺀 값이 지정 값이 된다면 그것도 answer++
