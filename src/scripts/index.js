//引入swiper

var Swiper = require('./components/swiper/swiper-3.3.1.min.js')

//引入swiper animate
var SwiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');

//js的入口文件
//引入zepto
var $ =  require('./components/zepto-modules/_custom');

//引入iscroll
var IScroll = require('./components/iscroll/iscroll.js');
    //console.log(IScroll);



//设置iscroll对象默认为hide
$('#mainContent').hide();
$('.swiper-container').show();

$('#enter').tap(function(){
	console.log(tap);
	$
})




$('#enter').on('tap',function(){
	alert('1');
})


var mySwiper = new Swiper('.swiper-container',{
	effect:'cube',
	loop:'loop',
	onInit:function(swiper){//Swiper2.x的初始化是onFirstInit
		SwiperAnimate.swiperAnimateCache(swiper);//隐藏动画元素
		SwiperAnimate.swiperAnimate(swiper);//初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper){ 
        SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    } 
});

//请调用IScroll
myScroll = new IScroll('#wrapper',{ mouseWheel:true});
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

$('#footer div').tap(function(){
	var apiTarget = $(this).attr('id');
	$.post('/api/' + apiTarget,{},function(response){
		var html = '';
		for(var i=0;i<response.length;i++){
             html += "<li>" + response[i].category + "</li>";
		}
		$("#scroller ul").html(html);
	})
})
//loading
var interval = setInterval(function(){
	if(document.readyState === 'complete'){
		clearInterval(interval);
		$('#preload').hide();
		$('.swiper-container').show();
		mySwiper.updateContainerSize();
		mySwiper.updateSlidesSize();
	}else{
		$('#preload').show();
	}
},100);