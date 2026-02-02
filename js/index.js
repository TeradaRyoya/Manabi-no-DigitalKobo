// スライダー
$(function(){
    $('#cards-slide').slick ({
        autoplay:true, // 自動再生を設定
        infinite: true, // スライドのループを有効にするか
        autoplaySpeed:3000, // スライド切り替えの時間を設定
        speed: 1000, // スライド/フェードアニメーションの速度を設定
        arrows: false,
        dots:true, // インジケーターを表示
        centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
        variableWidth: true, // 可変幅のスライド（スライドの幅をバラバラにするか）
        customPaging: function () {
            return '<span class="custom-dot"></span>';
        }

    });
});

// ヘッダーを隠す
const header = document.querySelector("#header");
    let headroom = new Headroom(header, {
        tolerance: 5,
        offset: 80
    });
    headroom.init();

// モーダル 
$(function (){
    $('.ja-modaal').modaal({
	type: 'inline',
	width: 1280
});
});

// AOS.js
AOS.init();
window.addEventListener('load', () => {
    AOS.refresh();
});
