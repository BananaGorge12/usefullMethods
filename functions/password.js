//password strength
const passwordStrength = (password, options = {
    //default options
    minChar: 0,//if 0 then none
    capitalLetter: false,
    lowercaseLetter: false,
    twoIdenticalCharacterInRow: false,
    specialChar: false,
    numbers: false,
    stopRisingNumbers:false,

}) => {
    //checks for min chars
    if (options.minChar > 0 && password.length < options.minChar) {
        return { valid: false, message: `Password must be longer then ${options.minChar} Characters.` }
    }
    
    if (options.capitalLetter && password === password.toLowerCase()) {
        return { valid: false, message: 'Password must contain capital letters.' }
    }
    
    if (options.lowercaseLetter && password === password.toUpperCase()) {
        return { valid: false, message: 'Password must contain lowercase letters.' }
    }
    
    if (options.numbers && !checkForNumbers(password)) {
        return { valid: false, message: 'Password must contain numbers.' }
    }
    
    if (options.specialChar && !checkForSpecialCharacters(password)){
        return { valid: false, message: 'Password must contain special characters.' }
    }
    
    if(options.stopTwoIdenticalCharacterInRow && checkForTwoIdenticalCharacterInRow(password)){
        return { valid: false, message: 'Password must not contain two identical characters in a row.' }
    }
    
    if(options.stopRisingNumbers && checkForRisingNumbers(password)){
     
        return { valid: false, message: 'Password must not contain rising numbers.' }
    }
    return { valid:true, message: 'Password is vaild' }
}





//helper functions

//checks for numbers in password
const checkForNumbers = password => {
    for(let letter = 0; letter < password.length; letter++){
        if(password[letter] === '1' || password[letter] === '2' || password[letter] === '3' || password[letter] === '4' || password[letter] === '5' || password[letter] === '6' || password[letter] === '7' || password[letter] === '8' || password[letter] === '0'){
            return true
        }
    }
    return false
}


//checks for special characters in the password
const checkForSpecialCharacters = password => {
    for(let letter = 0; letter < password.length; letter++){
        if(password[letter] === '!' || password[letter] === '@' || password[letter] === '#' || password[letter] === '$' || password[letter] === '%' || password[letter] === '^' || password[letter] === '&' || password[letter] === '*'){
            return true
        }
    }
    return false
}


//check for two identical character in a row
const checkForTwoIdenticalCharacterInRow = password => {
    password = password.toLowerCase()
    let previousLetter = ''

    for(let letter = 0; letter < password.length; letter++){
        if(password[letter] === previousLetter){
            return true
        }else{
            previousLetter = password[letter]
        }
    }
    
    return false
}


//checks for rising numbers
const checkForRisingNumbers = password => {
    let twoPreviousNumber = undefined
    let previousNumber = undefined
    
    for(let letter = 0; letter < password.length; letter++){
        //index is a number
        if(password[letter] === '1' || password[letter] === '2' || password[letter] === '3' || password[letter] === '4' || password[letter] === '5' || password[letter] === '6' || password[letter] === '7' || password[letter] === '8' || password[letter] === '0'){
            const number = parseInt(password[letter])
            if(number === previousNumber + 1 && number === twoPreviousNumber + 2){
                return true
            }else{
                twoPreviousNumber = previousNumber
                previousNumber = number
            }
        }else{
            previousNumber = undefined
            twoPreviousNumber = undefined
        }
    }

    return false
}


export default passwordStrength