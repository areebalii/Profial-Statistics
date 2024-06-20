const countersEl = document.querySelectorAll(".counter")

countersEl.forEach(counterEl => {
    counterEl.innerHTML = "0";
    incrementCounter()

    function incrementCounter() {
        let currentNum = +counterEl.innerText;
        let dataCell = counterEl.getAttribute("data-ceil");
        let increment = dataCell / 15

        currentNum = Math.ceil(currentNum + increment)
        if (currentNum < dataCell) {
            counterEl.innerText = currentNum
            setTimeout(incrementCounter, 50)
        } else {
            counterEl.innerText = currentNum
        }


    }
})