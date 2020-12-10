const inlineDatePicker = document.getElementById('inlineDatePicker');
const rangeDatePicker = document.getElementById('rangeDatePicker');

const main = new Datepicker(inlineDatePicker, {
    language: 'ru',
    format: 'dd.mm.yyyy',
    daysOfWeekHighlighted: [0, 6],
    todayHighlight: true
});

const rangepicker = new DateRangePicker(rangeDatePicker, {
    language: 'ru',
    format: 'dd.mm.yy',
    daysOfWeekHighlighted: [0, 6],
    todayHighlight: true,
    allowOneSidedRange: true,
    autohide: true
});
