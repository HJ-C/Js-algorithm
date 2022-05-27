function solution(size, arr){
    let answer= Array.from({length:size}, ()=>0);
    
    arr.forEach(x=>{
        let pos= -1;
        for(let i=0; i<size; i++){
            // hit되면 pos라는 인덱스번호를 저장
            if(x === answer[i]){
                pos=i
            }
        }
        // 만약 miss나면 뒤에서부터 하나씩 땡기기
        if(pos === -1){
            for(let i=size-1; i>0; i--){
                answer[i] = answer[i-1];
            }
        // 만약 hit나면 pos만큼 뒤에서부터 하나씩 땡기기
        }else{
            for(let i=pos; i>0; i--){
                answer[i] = answer[i-1];
            }
        }
            answer[0]=x

    })
    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

//내장 메소드
function solution(size, arr){
    let answer= [];
    
    arr.forEach(x=>{
        let pos= -1;
        for(let i=0; i<size; i++){
            // hit되면 pos라는 인덱스번호를 저장
            if(x === answer[i]){
                pos=i
            }
        }
        // 만약 miss나면 뒤에서부터 하나씩 땡기기
        if(pos === -1){
            answer.unshift(x)
            if(answer.length>size) answer.pop()

        // 만약 hit나면 pos만큼 뒤에서부터 하나씩 땡기기
        }else{
            answer.splice(pos,1);
            answer.unshift(x);
        }
            answer[0]=x

    })
    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));