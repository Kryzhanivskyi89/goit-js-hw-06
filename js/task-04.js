const counter = {
    counterValue: 0,
    decrement() {
        console.log(`decrement -> this`, this);
        this.counterValue -= 1;
    },
    increment() {
        console.log(`increment -> this`, this);
        this.counterValue += 1;
    },    
};


const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value')
// console.log(valueEl);

buttonDec.addEventListener("click", function() {
    console.log("- was clicked");
    counter.decrement();
    valueEl.textContent = counter.counterValue;
});
buttonInc.addEventListener("click", function() {
    console.log("+ was clicked");
    counter.increment();
    valueEl.textContent = counter.counterValue;
});



// const updateCounter = function (value, operation) {
//     // operation(value);
// };

// updateCounter();
// console.log(counter);

