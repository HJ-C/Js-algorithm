(1)
function solution(s, t){
    let answer=0;
    
    for(let x of str){
        if(x === t){
            answer+=1; //answer++
        }
    }

    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'C'));

(2)

function solution(s, t){
    let answer= s.split(t)
    // ['COMPUTE','P','OG','AMING']
    return answer-1;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
