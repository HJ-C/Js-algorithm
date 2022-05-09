    function solution(n){
        let answer;
        answer = Math.ceil(n/12);
        return answer;
    }

    console.log(solution(178));

Math.round(x)메서드 : 반올림 값 반환.
Math.ceil(x)메서드 : 가장 가까운 정수로 올림 된 x 값을 반환
Math.floor(x)메서드 : 가장 가까운 정수 로 내림 한 x 값을 반환
Math.trunc(x)메서드 : x의 정수 부분 반환.
Math.sign(x)메서드 : x가 음수, null 또는 양수이면 반환
Math.pow(x, y)메서드 : x의 값을 y의 거듭제곱으로 반환
Math.sqrt(x)메서드 : x의 제곱근을 반환
Math.abs(x)메서드 : x의 절대(양수) 값을 반환
Math.min()메서드 : 인수 목록에서 가장 낮은 값 찾음
Math.max()메서드 : 인수 목록에서 가장 높은 값 찾음
Math.random()메서드 : 0(포함)과 1(제외) 사이의 난수 반환