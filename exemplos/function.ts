function somarValoresNum(num1: number, num2:number, expoente:number, callback: (num:number, expoente:number) => number):number {
	//let resultado =  num1 + num2;
	return callback(num1 + num2, expoente);
}

function printaValoresNum(num: number, num2:number):void{
	console.log(num+num2);
}

function multiplicaExpoente(num:number, expoente:number):number{
	return num ** expoente; 
}

function dividirPorEleMesmo(num:number):number{
	return num / num
}

console.log(somarValoresNum(1,1, 1, multiplicaExpoente));
console.log(somarValoresNum(2, 2, 10, multiplicaExpoente));
console.log(somarValoresNum(2, 5, 5, dividirPorEleMesmo));