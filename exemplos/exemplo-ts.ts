let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function plusNumber(num1:number, num2:number, shouldPrint:boolean, sentence: string){
	let resultado = num1 + num2
	if(shouldPrint){
		console.log(sentence + resultado)
	}
	return num1 + num2;
}

let shouldPrint = true
let sentence = "The sum is: ";


if (button){
	button.addEventListener('click', () => {
		if(input1 && input2){
			console.log(plusNumber(Number(input1.value), Number(input2.value), shouldPrint, sentence));
		}
	})

}