$(function(){

    setInterval(fnSlide, 1200);

    function fnSlide() {

        $("#toolTipTxt, #arrowMark").animate(
            {"margin-top": "6px"},
            500,
            function(){
                $(this).css({"margin-top": "0px"});
            }
        );

    }
    // .animate(A, B, C ); 
    // 매개변수(=파라미터)
    // A, B, C의 기능
    // A= CSS
    // B= 애니메이션이 구현되는 시간, 단위1/1000초
    // C=  콜백함수(애니메이션이 종료된 직후
    //                    실행되는 기능을 저장한 함수,
    //                    익명함수 형식으로 만듬)

});