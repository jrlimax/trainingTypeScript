let valorAny: any;
valorAny = 1;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;

let valorString2: string = 'testado';
valorString2 = valorAny;

function somarString(string: string, string2:string){
	console.log(string + string2)
}

somarString(valorString, valorString2);
somarString('ola ', 'como vai ?');