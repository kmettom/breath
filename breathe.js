const $hint = document.querySelector('#hint')
const $count = document.querySelector('#count')
const $currentTime = document.querySelector('#currentTime')

const $plus = document.querySelector('#plus')
const $minus = document.querySelector('#minus')
const $types = document.querySelectorAll('.breath-type')

const $activeBreathTypeName = document.querySelector('#activeBreathTypeName')

let breathType = 'line'
let interval = 4

for (let i = 0; i < $types.length; i++) {
    $types[i].addEventListener('click', (_data) => {
        breathType = _data.target.id
        activeBreathTypeName.innerHTML = breathType
    })
}

$plus.addEventListener('click', () => {
    interval++
    $currentTime.innerHTML = interval
})

$minus.addEventListener('click', () => {
    interval--
    $currentTime.innerHTML = interval
})

let hints = ['inhale', 'exhale', 'hold']
let currentHintIndex = 0

let breathTypes = {
    line: {},
    triangle: {},
    square: {}
}
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
    countDown(interval)
}

initBreathe()

function initApp() {

}


// clearInterval(cycleTimer)
