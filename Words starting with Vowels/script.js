function countVowels(sentence) {
    let words = sentence.split(/\s+/);

    const vowels = /^[aeiou]/i;

    let count = 0;

    for(let word of words) {
        if(vowels.test(word)) {
            count++;
        }
    }
    return count
}
function acceptSentence() {
    const sentence = document.getElementById("sentence").value;
    const count = countVowels(sentence);
    document.getElementById("sentence").innerHTML = `Sentence: ${sentence}`;
    document.getElementById("vowels").innerHTML = `Number of words starting with vowels: ${count}`;
}