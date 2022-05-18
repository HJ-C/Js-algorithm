function solution(n, k, card){
    // n= arr개수
    // k= 뽑는 카드
    // card = arr
    let answer;

    let tmp = new Set();

    for(let i=0; i<n; i++){
        for(let j=0; j<i; j++){
            for(let k=0; k<j; k++){
                tmp.add(card[i]+card[j]+card[k]);
            }
        }
    }
    let a = Array.from(tmp).sort((a,b)=>b-a)
    answer=a[k-1]
    

    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));