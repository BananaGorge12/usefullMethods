export default String.prototype.forEach = function(callBack) {
    for(let index = 0; index < this.length; index++){
        callBack(this[index])
    }
}