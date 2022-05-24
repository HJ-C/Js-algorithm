function solution(s){
    let answer=0;
    let stack=[];
                
    for(let i=0; i<s.length; i++){
        if(s[i]==='('){
            stack.push(s[i])
        }else{
            stack.pop()
            // 레이저
            if(s[i-1] === '('){
                answer+=(stack.length);
            }else{
            //막대기
                 answer+=1;   
            }
        } 
    }
    return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));