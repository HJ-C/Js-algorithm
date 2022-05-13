function solution(s){
    let answer = 'Yes';
    s=s.toLowerCase().replace(/[^a-z]/g,'')
    
    if(s.split('').reverse().join('')!==s){
        return 'No'
    }
    
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));