function reverseWordsInSentence(sentence) {
    // Split the sentence into words using a regular expression to handle spaces and punctuation.
    const words = sentence.split(/\b/);

    // Iterate through the words, reversing each word and pushing it into a new array.
    const reversedWords = words.map(word => {
        // Use a regular expression to match word characters (letters) in the word.
        const reversed = word.match(/\w/g);
        return reversed ? reversed.reverse().join('') : word;
    });

    // Join the reversed words back into a sentence.
    const reversedSentence = reversedWords.join('');

    return reversedSentence;
}

// Example usage:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
