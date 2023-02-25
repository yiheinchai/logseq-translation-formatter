function format_data(textString) {
    return textString.split('\n').map(word => word.trim())
}

function format_into_cards(textString1, textString2) {
    return textString1.map((word, i) => {
        `- ${word} #card\n\t- ${textString2[1]}`
    }).join('\n')
}

document.querySelector('.format').addEventListener('click', () => {
    const chineseWord = format_data(document.querySelector('.chinese').value)
    const englishWord = format_data(document.querySelector('.english').value)
    const result = format_into_cards(englishWord, chineseWord)
    document.querySelector('.result').textContent = result
})