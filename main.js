function solution(s){
    let answer ='Yes';
    s=s.toLowerCase();

    if(s.split('').reverse().join('') !== s){
        return 'No'
    }
    return answer;
}

let str="goooG";
console.log(solution(str));