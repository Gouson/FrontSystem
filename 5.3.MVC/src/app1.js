import $ from "jquery";
import "./app1.css";
import Model from "./base/Model.js";
import View from "./base/View.js"
//数据相关 都放到m
const m = new Model({
    data: {
        n: parseFloat(localStorage.getItem("n"))
    },
    update(data) {
        Object.assign(m.data, data);
        m.trigger("m:updated");
        localStorage.setItem("n", m.data.n);
    }
});
//试图相关 都放到v
const v = {
    el: null,
    html: `
        <div>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button id="add1">+1</button>
                <button id="minus1"> -1</button>
                <button id="mul2">*2</button>
                <button id="divide2">/2</button>
            </div>
        </div>
        `,
}
//其他相关都放到c
const init = (el) => {
    new View({
        el: el,
        data: m.data,
        html: `
        <div>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button id="add1">+1</button>
                <button id="minus1"> -1</button>
                <button id="mul2">*2</button>
                <button id="divide2">/2</button>
            </div>
        </div>
        `,
        render(data) {
            const n = data.n
            if (this.el.children.length !== 0) this.el.empty();
            $(this.html.replace("{{n}}", n)).appendTo(this.el);
        },
        events: {
            "click #add1": "add",
            "click #minus1": "minus",
            "click #mul2": "mul",
            "click #divide2": "divide",
        },
        add() {
            m.data.n += 1;
            m.update({
                n: m.data.n + 1,
            });
        },
        minus() {
            m.update({
                n: m.data.n - 1,
            });
        },
        mul() {
            m.update({
                n: m.data.n * 2,
            });
        },
        divide() {
            m.update({
                n: m.data.n / 2,
            });
        }
    })
}

// 初始化Html

export default init;