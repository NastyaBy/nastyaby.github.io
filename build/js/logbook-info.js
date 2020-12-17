const logbookInfo = () => {
    const logbookInfo = document.querySelector('.js-logbookInfo')
    const openLogbookInfo = document.querySelectorAll('.js-openLogbookInfo')
    const closeLogbookInfo = logbookInfo.querySelector('.js-closeLogbookInfo')
    const show = 'logbook__info--show'

    openLogbookInfo.forEach(trigger => {
        trigger.addEventListener('click', (evt) => {
            evt.preventDefault()
            logbookInfo.classList.add(show)

            closeLogbookInfo.addEventListener('click', () => {
                logbookInfo.classList.remove(show)
            })

            window.addEventListener('keydown', (evt) => {
                if (evt.keyCode === 27) {
                    if (logbookInfo.classList.contains(show)) {
                        evt.preventDefault()
                        logbookInfo.classList.remove(show)
                    }
                }
            })
        })
    })

    const purposeOfTrip = document.querySelector('.js-purposeOfTrip')
    const playground = document.querySelector('.js-playground')

    const changeShroud = () => {
        if(purposeOfTrip.value !== 'Move') {
            playground.setAttribute('disabled', 'disabled')
        } else {
            playground.removeAttribute('disabled')
        }
    };

    purposeOfTrip.addEventListener('change', () => {
        changeShroud()
    })

    changeShroud()
}

logbookInfo()
