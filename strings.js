var input = getElementByID.input;


function reversal() {
	return getElementByID.input.reverse();
}

function alphabits() {
	getElementByID.input.sort();
}

function palindrome(string) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);

