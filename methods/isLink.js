export default String.prototype.isLink = function() {
    let strCheck = ''
    for(let index = 0; index < this.length; index++){
        if(strCheck === 'http://' || strCheck === 'https://'){
            return true
        }else{
            strCheck += this[index]
        }
    }
    return false
}