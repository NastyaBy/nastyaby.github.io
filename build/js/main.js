const inlineDatePicker = document.getElementById('inlineDatePicker');
const rangeDatePicker = document.getElementById('rangeDatePicker');

const today = new Date()
const today2 = new Date()

const currentMonth = new Date()
const prevMonth = today.setMonth(today.getMonth() - 1)
const nextMonth = today2.setMonth(today2.getMonth() + 1)

const main1 = new Datepicker(inlineDatePicker1, {
    language: 'ru',
    format: 'dd.mm.yyyy',
    todayHighlight: true,
    defaultViewDate: prevMonth
});

const main2 = new Datepicker(inlineDatePicker2, {
    language: 'ru',
    format: 'dd.mm.yyyy',
    todayHighlight: true,
    defaultViewDate: currentMonth
});

const main3 = new Datepicker(inlineDatePicker3, {
    language: 'ru',
    format: 'dd.mm.yyyy',
    todayHighlight: true,
    defaultViewDate: nextMonth
});

const rangepicker = new DateRangePicker(rangeDatePicker, {
    language: 'ru',
    format: 'dd.mm.yy',
    todayHighlight: true,
    allowOneSidedRange: true,
    autohide: true
});

const calendar1 = inlineDatePicker1;
const calendar2 = inlineDatePicker2;
const calendar3 = inlineDatePicker3;

const prevDataBtn = calendar1.querySelector('.prev-btn');
const nextDataBtn = calendar3.querySelector('.next-btn');

prevDataBtn.addEventListener('click', (evt) => {

});

nextDataBtn.addEventListener('click', (evt) => {
    console.info('next');
});


