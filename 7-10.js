function solution(target, arr){
    let answer;
    arr.sort((a,b)=> a-b);
    console.log(arr)
    let lt=0;
    let rt=arr.length-1;

    while(lt<=rt){
        let mid = parseInt((lt+rt)/2)
        if(arr[mid] === target){
            answer= mid+1;
            break;
        }else if(arr[mid]>target){
            rt = mid-1;
        }else{
            lt= mid+1
        }
        
    }
    return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr))

// 이진탐색은 반씩 계속 쪼개야함 
// 인덱스 번호기 때문에 +1 해줘야함
// mid의 값을 변경 시켜야함