map : return 있어야하고 새 배열로 리턴함 즉, 새 배열을 반환
forEach : return이 있으면 안되고 원래의 값을 변경해서 리턴 즉, 콜백함수가 현재 배열을 변경
reduce : 누적 계산, reduce((이전값,현재값)=>{ return 이전값 + 현재값 })
-> [1,2,3,4,5] 라면
1+2 = 3 
3+3 = 6
6+4 = 10
10+ 5 = 15 즉 15가 나온다.

filter: 배열 요소 중에서 특정 값만 추출 filter((a,i)=> {return 필터할 조건})
    

