function solution(str1, str2){
    let answer="YES"; 
    let sH = new Map();

    for(let x of str1){
        if(sH.has(x)){
            sH.set(x,sH.get(x)+1)
        }else{
            sH.set(x,1)
        }
    }
    for(let x of str2){
        // key가 해야함 || 개수가 == 0 즉, 나는 있지만 상대방은 없다.
        if(!sH.has(x) || sH.get(x)==0) return "No";
        // 하나씩 감소하면서 비교
        sH.set(x,sH.get(x)-1)
    }
    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));