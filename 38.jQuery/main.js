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
const x = $('.test1').find('.child')
    // x.each((div) => console.log(div))
    // x.parent().print()
    // console.log($('.test2').index())
$('.test2').prev().print()