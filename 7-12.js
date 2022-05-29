// dist : 가장 가까운 말의 거리
function count(stable, dist){
    let cnt=1, ep=stable[0]
    for(let i=1; i<stable.length; i++){
        if(stable[i]-ep >= dist){
            cnt++;
            ep=stable[i];
        }
    }
    return cnt;
 }


 function solution(c, stable){
     let answer;
     stable.sort((a,b)=>a-b);
     let lt = 1;
     let rt = stable[stable.length-1]
     
     while(lt<=rt){ 
         let mid = parseInt((lt+rt)/2)
         if(count(stable,mid)>= c ){
            answer=mid;
            // mid도 되지만 더 짧은것도 가능하기때문에
            lt = mid +1;
         }else{
             rt = mid-1;
         }
     }
     return answer;
 }

 let arr=[1, 2, 8, 4, 9];
 console.log(solution(3, arr));