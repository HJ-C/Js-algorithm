function solution(s){  
    let answer = '';

    answer = s.filter((a,i)=>{
        console.log(i,s.indexOf(a))
        return s.indexOf(a) === i
    })

    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));