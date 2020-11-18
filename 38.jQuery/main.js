// $('.test')//不返回元素，返回api对象
//     .addClass('red')
//     .addClass('blue')//this就是api
//     .addClass('green') //链式操作
$('.test1')
    .find('.child')
    .addClass('red')
    .addClass('blue')
    .end()
    .addClass('yellow')
const y = $('.test1')
const x = $('.test1').find('.child')
    // x.each((div) => console.log(div))
    // x.parent().print()
    // console.log($('.test2').index())
$('<div>新的div</div>').appendTo($('.test1'))
x.addClass('tt')
console.log(x.index())

$('#div1').on("click", "button", () => {
    console.log("按钮被点击");
});