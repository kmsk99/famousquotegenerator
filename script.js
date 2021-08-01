import quote from './quotes.js';

class Generator {
    constructor(quotes) {
        this.quotes = quotes;
    }

    randomPicker() {
        let pickedIdx = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[pickedIdx];
    }

    printQuote() {
        console.log(this.randomPicker());
    }
}

const famousQuote = new Generator(quote);
famousQuote.printQuote();