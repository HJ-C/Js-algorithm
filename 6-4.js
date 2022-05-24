function solution(s){  
    let answer;
    let stack=[];

    for (let x of s){
        // 숫자
        if(!isNaN(x)){
            stack.push(Number(x)) //3,5,2,9
        
        // 연산자
        }else{
            let rt = stack.pop()          
            let lt = stack.pop()          
            if(x === '+') stack.push(lt + rt)
            else if(x === '*') stack.push(lt * rt)
            else if(x === '-') stack.push(lt - rt)
        }
    }
    answer =stack[0]
    return answer;
}

let str="352+*9-";
console.log(solution(str));