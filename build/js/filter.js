const activateCheckbox = () => {
    const checkboxes = document.querySelectorAll('.js-checkbox-group')
    Array.prototype.forEach.call(checkboxes, function(item) {
        const count = item.getElementsByClassName('js-checkbox').length
        let currentCount = 0

        item.addEventListener('change', function(evt) {
            if (evt.target.classList.contains('js-checkbox-main')) {
                if (evt.target.checked) {
                    setAllCheckboxes(item, true)
                     currentCount = count
                } else {
                    setAllCheckboxes(item, false)
                     currentCount = 0
                }
            } else {
                evt.target.checked ? ++currentCount : --currentCount

                console.log(currentCount)
                if (currentCount === count) {
                    setAllCheckboxes(item, true)
                } else if (currentCount === count - 1){
                    if (!evt.target.checked) {
                        item.getElementsByClassName('js-checkbox-main')[0].checked = false
                    }
                }
            }
        }, false)
    })

    function setAllCheckboxes(where, value) {
        const checkboxes = where.querySelectorAll('input[type="checkbox"]')
        Array.prototype.forEach.call(checkboxes, function(item) {
            item.checked = !!value
        })
    }
}

activateCheckbox()
