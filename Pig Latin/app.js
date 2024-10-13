function pigLatin(sentence) {
    // Split the sentence into words and remove punctuation
    const words = sentence.split(' ').map(word => word.replace(/[.,!?]/g, ''));

    // Process each word
    const transformedWords = words.map(word => {
        const arr = [...word]; // Convert the word to an array
        const firstLetter = arr.shift(); // Remove the first letter
        arr.push(firstLetter.toLowerCase()); // Move the first letter to the end
        
        // Check for vowels
        if ('AEIOU'.includes(firstLetter)) {
            arr.push('way'); // Add 'way' for vowels
        } else {
            arr.push('ay'); // Add 'ay' for consonants
        }

        // Join the modified word back into a string
        return arr.join('');
    });

    // Join the transformed words back into a single string
    const newSentence = transformedWords.join(' ');

    // Capitalize the first letter of the result and keep punctuation
    return newSentence.charAt(0).toUpperCase() + newSentence.slice(1) + '.';
}

// Test the function
const result = pigLatin("Tom got a small piece of pie.");
console.log(result); // Outputs: "Atscay areway reatgay etspay."