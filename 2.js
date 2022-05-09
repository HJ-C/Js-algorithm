
//2 삼각형 판별하기
    // a+b+c
    // (a+b+c)-가장 큰 길이 < 가장 큰 길이  -> No
    // (a+b+c)-가장 큰 길이 > 가장 큰 길이  -> Yes

-- 방법1

function solution(a, b, c){
    let answer="YES";
    let long = Math.max(a,b,c);
    let total = a + b + c;
    let oper = total-long;
    if(oper < long ){
        return "No" 
    }else{
        return 'Yes'
    }
}

console.log(solution(13, 10, 17));

-- 방법2

function solution(a, b, c){
    let answer="YES",max;
    let tot = a+b+c;

    if(a>b) max=a;
    else max=b;
    if(c>max) max=c;
    
    if(tot-max < max) answer ='no';
    return answer

}
