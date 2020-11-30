import $ from "jquery"
import './app4.css'
const html = `
<section id="app4">
    <div class="circle"></div>
</section>
`
const $element = $(html)
$('.page').append(html)
const $circle = $('#app4 .circle')
$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseout', () => {
    $circle.removeClass('active')
})