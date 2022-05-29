function solution(times){
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line=[];
    for(let x of times){
        T_line.push([x[0],'s'])
        T_line.push([x[1],'e'])
    }
    T_line.sort((a,b)=>{
        if(a[0] === b[0]){
            // a[1]-b[1]하면 같은 시간대 s,s,s가 나오기 때문에 정렬 조건 걸어야 함 
            return a[1].charCodeAt()-b[1].charCodeAt();
        }else{
            return a[0]-b[0]
        }
    })
    
    let cnt = 0;
    for(let x of T_line){
        if(x[1] === 's') cnt ++;
        else cnt--;
        answer=Math.max(answer,cnt)
    }
    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));