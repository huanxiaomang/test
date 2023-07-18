
function $(val) {
    return document.querySelectorAll(val);
}

let keyItemDiv = $('.key .item');
let cpsText = $('.cps')[0];

let keyList = JSON.parse(localStorage.getItem('keyList')) ?? ['x', 'c', 'm', ','];
let keyNum = 0;
let cps = 0;

const init = () => {
    setKeyList(keyList);
    bind();
    speedMonitor();


}
function speedMonitor() {
    setInterval(() => {
        cps = keyNum * 1;
        cpsRender(cps);
        keyNum = 0;
        cps = 0;
    }, 1000)
    // setInterval(() => {
    //     if (cps === 0) {
    //         cpsRender(cps);
    //         setInterval(() => {
    //             if (cps === 0) {
    //                 cpsRender(true);
    //             }
    //         }, 4000)
    //     }
    // }, 4000)

}

function cpsRender(exp) {
    let expressions = [`(●'◡'●)`, '(✧∇✧)', '(ˊᗜˋ*)', '(￢_￢)', '_(:з」∠)_',];
    if (exp === true) {
        cpsText.style.color = 'black';
        cpsText.innerHTML = expressions[Math.floor(Math.random() * expressions.length)];
    } else if (cps === 0) {
        cpsText.style.color = 'black';
    }else if(cps !== 0){
        if (cps < 4) {
            cpsText.style.color = '#01da71';
        } else if (cps < 8) {
            cpsText.style.color = '#4ebbfd';
        } else if (cps < 14) {
            cpsText.style.color = '#f73892';
        } else if (cps < 20) {
            cpsText.style.color = '#fe5ded';
        } else if (cps < 50) {
            cpsText.style.color = '#ff00a0';
        }
        cpsText.innerHTML = '<span style="color:black;">CPS: </span>' + cps;
    }
}


function keyDownHandler(key) {
    keyList.map((k, i) => {
        if (key.toLowerCase() === k) {
            keyNum++;
            keyItemDiv[i].style.backgroundColor = '3a3a3a';
            keyItemDiv[i].style.color = 'white';
            setTimeout(() => {
                keyItemDiv[i].style.backgroundColor = 'e6e6e6';
                keyItemDiv[i].style.color = 'black';
            }, 100)
        }
    })
}


function bind() {

    [...keyItemDiv].map((div, i) => {
        div.addEventListener('click', bindDiv(i), false);
    })

    function bindDiv(i) {
        return (i, ev) => {

        }
    }
}


function setKeyList(keyList) {
    keyList.map((key, i) => {
        keyItemDiv[i].innerHTML = key;
    })
    if (JSON.parse(localStorage.getItem('keyList')) !== JSON.stringify(keyList)) {
        localStorage.setItem('keyList', JSON.stringify(keyList));
    }
}

init();

// ipcRender.on('counter-value', (event, value) => {
//     console.log(value);
// })


window.electronAPI.handleCounter(keyDownHandler);