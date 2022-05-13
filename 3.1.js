(1)
function solution(s){
    let answer = 'YES';

    s=s.toLowerCase();
    let len=s.length;

    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i]!== s[len-i-1]){
            return "No"
        }
    }

    return answer;
}

let str="goooG";
console.log(solution(str));

(2)
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

//문자열 s를 split(배열로 변경)해서 reverse(반대로)한 후 join(배열로 변경)
//문자열 자체는 reverse를 못 쓰기때문에 배열로 변경해야한다.
