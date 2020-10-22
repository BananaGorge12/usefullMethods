//should recive an array of strings, a ref to the dom and optional speed
const typeWriterArr = (wordsArray, domRef, speed = 160) => {
    let arrIndex = 0
    let textIndex = 0
    let deleting = false
    setInterval(() => {
        if (!deleting) {
            domRef.textContent += wordsArray[arrIndex][textIndex]
            textIndex++
        }
        if (deleting) {
            domRef.textContent = domRef.textContent.slice(0, domRef.textContent.length - 1)
            if (domRef.textContent.length <= 0) {
                //stops deleting
                deleting = false
                textIndex = 0
                //chacks for end of placeholder array
                if (arrIndex >= wordsArray.length - 1) {
                    arrIndex = 0
                }
                else {
                    arrIndex++
                    return;
                }
            }
        }
        //checks for end of word
        if (textIndex > wordsArray[arrIndex].length - 1) {
            deleting = true
        }
    }, speed)
}



export default typeWriterArr