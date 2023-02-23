/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var temp , num , reverseNum = 0;
    temp = x;
    while(x>0){
    num = x%10;
    x = parseInt(x / 10);
    reverseNum = reverseNum*10 + num ;
    // console.log(num);
    }
    if(reverseNum == temp){return true;}
    else{return false;}
    
};