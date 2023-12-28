const $start = document.querySelector('#start')
const $hint = document.querySelector('#hint')
const $count = document.querySelector('#count')
const $currentTime = document.querySelector('#currentTime')

const $plus = document.querySelector('#plus')
const $minus = document.querySelector('#minus')
const $bar = document.querySelector('#bar')
const $types = document.querySelectorAll('.breath-type')

let breathType = 'triangle'
let interval = 4
let breathTypes = {
    line: {
        hints: ['inhale', 'exhale']
    },
    triangle: {
        hints: ['inhale', 'hold', 'exhale']
    },
    square: {
        hints: ['inhale', 'hold', 'exhale', 'hold']
    }
}

let hints = breathTypes[breathType].hints
let currentHintIndex = 0
let cycleTimer = null
let countDownTimer = null

for (let i = 0; i < $types.length; i++) {
    $types[i].addEventListener('click', (_data) => {
        breathType = _data.target.id
        activeBreathTypeName.innerHTML = breathType
        hints = breathTypes[breathType].hints
        currentHintIndex = 0
        countDown(interval)
    })
}


$start.addEventListener('click', () => {
    initBreathe()
})

$plus.addEventListener('click', () => {
    interval++
    $currentTime.innerHTML = interval
    countDown(interval)
})

$minus.addEventListener('click', () => {
    interval--
    $currentTime.innerHTML = interval
    countDown(interval)
})


//function to count down each cycle of breath, input is the duration of inhale and exhale in seconds
function countDown(_interval) {

    inhaleAni()

    clearInterval(countDownTimer)
    clearInterval(cycleTimer)

    let countDown = _interval

    countDownTimer = setInterval(() => {
        countDown--
        if (countDown < 1) countDown = _interval
        $count.innerHTML = countDown
    }, 1000)

    cycleTimer = setInterval(() => {
        currentHintIndex++
        if (currentHintIndex === hints.length) currentHintIndex = 0
        $hint.innerHTML = hints[currentHintIndex]
        inhaleAni()
    }, _interval * 1000)

}

function inhaleAni() {
    $bar.style.transition = "linear all " + interval + "s"
    if (hints[currentHintIndex] === 'inhale') {
        $bar.classList.add('inhale')
    } else if (hints[currentHintIndex] === 'exhale') {
        $bar.classList.remove('inhale')
    }
}

function initBreathe() {
    $hint.innerHTML = hints[currentHintIndex]
    $count.innerHTML = interval
    activeBreathTypeName.innerHTML = breathType
    countDown(interval)
    $start.classList.add('active')
}
