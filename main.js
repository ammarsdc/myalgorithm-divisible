for (i=0; i <= 100; i++) {
    isDivisibleBy3 = i%3 === 0;
    isDivisibleBy5 = i%5 === 0;
    
    if (isDivisibleBy3 && isDivisibleBy5) {
        document.write("FizzBuzz<br />");
    } else if (isDivisibleBy3) {
        document.write("Fizz<br />");
    } else if (isDivisibleBy5){
        document.write("Buzz<br />");
    } else {
        document.write(i + "<br />");
    }
}
