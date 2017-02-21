var input = document.getElementById("userInput");
var output1 = document.getElementById("output");
var rev = "";

function reversal() {
	rev = input.value.split('').reverse().join('');
	console.log(rev);
}

function alphabits() {
	var alpha = input.value.split('').sort().join('');
	console.log(alpha);	
	// getElementByID.input.sort();
}

function palindrome() {
	if (rev === input.value) {
		output1.innerHTML = "Your string is a palidrome";
	} 
}

submit.addEventListener("click", function(){
	reversal();
	alphabits();
	palindrome();
});
input.addEventListener("keypress", function(e){
	// console.log(e);
	if (e.charCode === 13) {
		reversal();
		alphabits();
		palindrome();
	}
});
