const datePicker = () => {
    const inlineDatePicker1 = document.getElementById('inlineDatePicker1')
    const inlineDatePicker2 = document.getElementById('inlineDatePicker2')
    const inlineDatePicker3 = document.getElementById('inlineDatePicker3')
    const rangeDatePicker = document.getElementById('rangeDatePicker')

    let currentMonth = dayjs()
    let prevMonth = dayjs().subtract(1, 'month')
    let nextMonth = dayjs().add(1, 'month')

    const calendar1 = new Datepicker(inlineDatePicker1, {
        language: 'ru',
        format: 'dd.mm.yyyy',
        //todayHighlight: true,
        defaultViewDate: prevMonth.format('DD.MM.YYYY')
    })

    const calendar2 = new Datepicker(inlineDatePicker2, {
        language: 'ru',
        format: 'dd.mm.yyyy',
        todayHighlight: true,
        defaultViewDate: currentMonth.format('DD.MM.YYYY')
    })

    const calendar3 = new Datepicker(inlineDatePicker3, {
        language: 'ru',
        format: 'dd.mm.yyyy',
        //todayHighlight: true,
        defaultViewDate: nextMonth.format('DD.MM.YYYY')
    })

    const rangepicker = new DateRangePicker(rangeDatePicker, {
        language: 'ru',
        format: 'dd.mm.yy',
        todayHighlight: true,
        allowOneSidedRange: true,
        autohide: true
    })


    const prevDataBtn = inlineDatePicker1.querySelector('.prev-btn')
    const nextDataBtn = inlineDatePicker3.querySelector('.next-btn')

    prevDataBtn.addEventListener('click', (evt) => {
        currentMonth = currentMonth.subtract(1, 'month')
        prevMonth = prevMonth.subtract(1, 'month')
        nextMonth = nextMonth.subtract(1, 'month')

        calendar1.setDate(prevMonth.format('DD.MM.YYYY'))
        calendar2.setDate(currentMonth.format('DD.MM.YYYY'))
        calendar3.setDate(nextMonth.format('DD.MM.YYYY'))
    });

    nextDataBtn.addEventListener('click', (evt) => {

        currentMonth = currentMonth.add(1, 'month')
        prevMonth = prevMonth.add(1, 'month')
        nextMonth = nextMonth.add(1, 'month')

        calendar1.setDate(prevMonth.format('DD.MM.YYYY'))
        calendar2.setDate(currentMonth.format('DD.MM.YYYY'))
        calendar3.setDate(nextMonth.format('DD.MM.YYYY'))
    })


    inlineDatePicker1.addEventListener('changeDate', (evt) => {
        changeDataPicker(calendar1.getDate('dd.mm.yyyy'))
    })

    inlineDatePicker2.addEventListener('changeDate', (evt) => {
        changeDataPicker(calendar2.getDate('dd.mm.yyyy'))
    })

    inlineDatePicker3.addEventListener('changeDate', (evt) => {
        changeDataPicker(calendar3.getDate('dd.mm.yyyy'))
    })

    const changeDataPicker = (date) => {
        console.log(date)
    }
}

datePicker()
