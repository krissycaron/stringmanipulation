var input = document.getElementById("userInput");


function reversal() {
	return input.split('').reverse().join('');
	input.value.innerHTML;
	// console.log(input.value);
}

function alphabits() {
	// getElementByID.input.sort();
}

function palindrome(string) {
    var len = string.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var testString = "";
reversal(testString);
// alphabits(testString);
// palindrome(testString);


submit.addEventListener("click", reversal);
input.addEventListener("keypress", function(e){
	// console.log(e);
	if (e.charCode === 13) {
		reversal();
	}
});
