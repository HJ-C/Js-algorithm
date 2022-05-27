function solution(arr){
    let answer=[];
    // deep copy
    let sor = arr.slice();
    sor.sort((a,b)=>a-b);
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== sor[i]){
            // 문제의 번호는 1번부터 시작하기때문에 i+1
            answer.push(i+1)
        }
    }
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));