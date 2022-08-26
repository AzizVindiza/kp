let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let text3 = document.querySelector(".text3")
let text4 = document.querySelector(".text4")
let text5 = document.querySelector(".text5")
let text6 = document.querySelector(".text6")
let scheme__layer = document.querySelector(".scheme__layer")
let scheme__layer1 = document.querySelector(".scheme__layer1")
let scheme__layer2 = document.querySelector(".scheme__layer2")
let scheme__layer3 = document.querySelector(".scheme__layer3")
let scheme__layer4 = document.querySelector(".scheme__layer4")
let scheme__layer5 = document.querySelector(".scheme__layer5")
let scheme__layer6 = document.querySelector(".scheme__layer6")

text1.addEventListener('mouseover', handle1);
text1.addEventListener('mouseleave', handle2);

function handle1() {
    scheme__layer1.classList.add('active')
    scheme__layer.classList.remove('active')
}

function handle2() {
    scheme__layer1.classList.remove('active')
    scheme__layer.classList.add('active')
}

text2.addEventListener('mouseover', handle3);
text2.addEventListener('mouseleave', handle4);

function handle3() {
    scheme__layer2.classList.add('active')
    scheme__layer.classList.remove('active')
}

function handle4() {
    scheme__layer2.classList.remove('active')
    scheme__layer.classList.add('active')
}


text3.addEventListener('mouseover', handle5);
text3.addEventListener('mouseleave', handle6);

function handle5() {
    scheme__layer3.classList.add('active')
    scheme__layer.classList.remove('active')
}

function handle6() {
    scheme__layer3.classList.remove('active')
    scheme__layer.classList.add('active')
}

text4.addEventListener('mouseover', handle7);
text4.addEventListener('mouseleave', handle8);

function handle7() {
    scheme__layer4.classList.add('active')
    scheme__layer.classList.remove('active')
}

function handle8() {
    scheme__layer4.classList.remove('active')
    scheme__layer.classList.add('active')
}

text5.addEventListener('mouseover', handle11);
text5.addEventListener('mouseleave', handle12);

function handle11() {
    scheme__layer5.classList.add('active')
    scheme__layer.classList.remove('active')
}

function handle12() {
    scheme__layer5.classList.remove('active')
    scheme__layer.classList.add('active')
}

text6.addEventListener('mouseover', handle9);
text6.addEventListener('mouseleave', handle10);

function handle9() {
    scheme__layer6.classList.add('active')
    scheme__layer.classList.remove('active')
}

function handle10() {
    scheme__layer6.classList.remove('active')
    scheme__layer.classList.add('active')
}
