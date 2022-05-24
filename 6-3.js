function solution(board, moves){
    let answer=0;
    let stack=[];

    moves.forEach(pos=>{
        // 행
        for(let i=0; i<board.length; i++){
            //0이아니라 인형을 만남
            if(board[i][pos-1] !== 0){
                let tmp = board[i][pos-1];
                //꺼냈으면 0으로 변경
                board[i][pos-1]=0;
                //터지는 인형 제거
                if(tmp === stack[stack.length-1]){
                    stack.pop();
                    answer+=2;
            }
            else stack.push(tmp);
            break;
            }
        }
    });             
    return answer;
}

let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));