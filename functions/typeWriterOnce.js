const typeWriterOnce = (word, domRef, speed = 160) => {
    let textIndex = 0
    const loop = setInterval(() => {
        //add a letter
        domRef.textContent += word[textIndex]
        textIndex++
        //checks for end of word
        if (textIndex >= word.length) {
            clearInterval(loop)
        }
    }, speed)
}

export default typeWriterOnce