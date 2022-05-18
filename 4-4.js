function solution(m, product){
    let answer=0;
    // m= 예산
    let n = product.length;
    //product 정렬
    product.sort((a,b)=> (a[0]+a[1])-(b[0]+b[1]))

    for(let i=0; i<n; i++){
        //for문 돌면서 할인된 가격=i
        let restMoney = m - (product[i][0]/2 + product[i][1]);
        //살 수 있는 count
        let cnt =1;

        //for문 돌면서 그냥 가격=j
        for(let j=0; j<n; j++){

            //0원이 됐을때 조건
            if(j!==i && (product[j][0]+product[j][1]) > restMoney ) break;
            if(j!==i && (product[j][0]+product[j][1]) <= restMoney ){
                restMoney-= (product[j][0]+product[j][1])
                cnt++;
            }
        }
        answer = Math.max(answer,cnt)
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));