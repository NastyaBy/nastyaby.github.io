const inputTimepicker = document.querySelectorAll('.js-openTimepicker');
const blackoutTimepicker = document.querySelector('.js-closeTimepicker')
const openTimepickerClass = 'fieldset__dropdown--show';
const openBlackoutTimepicker = 'fieldset__blackout--show';

inputTimepicker.forEach(trigger => {
    const dropdown = trigger.nextElementSibling
    const selectTimeStart = dropdown.querySelector('.js-timeStart')
    const selectTimeEnd = dropdown.querySelector('.js-timeEnd')

    trigger.addEventListener('click', (evt) => {
        evt.preventDefault();
        dropdown.classList.toggle(openTimepickerClass)
        blackoutTimepicker.classList.toggle(openBlackoutTimepicker)
    })

    selectTimeStart.addEventListener('change', (evt) => {
        changeTimePicker(trigger, selectTimeStart.value, selectTimeEnd.value)
    })
    selectTimeEnd.addEventListener('change', (evt) => {
        changeTimePicker(trigger, selectTimeStart.value, selectTimeEnd.value)
    })

    blackoutTimepicker.addEventListener('click', () => {
        dropdown.classList.toggle(openTimepickerClass)
        blackoutTimepicker.classList.toggle(openBlackoutTimepicker)
    })

    window.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27) {
            if (dropdown.classList.contains(openTimepickerClass)) {
                evt.preventDefault();
                dropdown.classList.remove(openTimepickerClass)
                blackoutTimepicker.classList.remove(openBlackoutTimepicker)
            }
        }
    })
});

const changeTimePicker = (element, timeStart, timeEnd) => {
    element.value = `c ${timeStart} по ${timeEnd}`
}



