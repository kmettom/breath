const interval = 4
const $hint = document.querySelector('#hint')
const $count = document.querySelector('#count')
const $shape = document.querySelector('#countShape')

let hints = ['inhale', 'exhale', 'hold']
let currentHintIndex = 0

let shapes = ['line', 'triangle', 'square']
let currentShape = 'line'

let cycleTimer = null
let countDownTimer = null

//function to count down each cycle of breath, input is the duration of inhale and exhale in seconds
function countDown(_interval) {

    let countDown = _interval

    setTimeout(() => {

        countDownTimer = setInterval(() => {
            $count.innerHTML = countDown
            countDown--
            if (countDown < 1) countDown = _interval
        }, 1000)

    }, 3000)


    cycleTimer = setInterval(() => {
        $hint.innerHTML = hints[currentHintIndex]
        currentHintIndex = currentHintIndex === 0 ? 1 : 0
    }, _interval * 1000)

}

function initBreathe() {
    // $hint.innerHTML = hints[currentHintIndex]
    // $shape.classList.add(currentShape)
    countDown(interval)
}

function initApp() {
    
}


// clearInterval(cycleTimer)
