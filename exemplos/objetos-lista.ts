const person = {
	name: 'Mariana',
	age: 28,
	profession: 'Desenvolvedora',
}

person.age = 29;

enum Profession{
	Teacher,
	Actor,
	Developer,
	FootballPlayer,
}

interface Person {
	name: string,
	age: number,
	profession?: Profession,

}

interface Estudant extends Person{
	grade: string[];
}

const julia: Person = {
	name: 'Julia',
	age: 50,
	profession:Profession.Developer,
}

const jessica:Estudant = {
	name: 'Jessica',
	age:18,
	profession:Profession.FootballPlayer,
	grade:['ALP', 'PMO'],
}

const debora:Estudant = {
	name:'Debora',
	age:25,
	grade:['ALP', 'PHP']
}

function listar(name: string, age:number, lista: string[]){
	console.log(name);
	console.log(age);
	for(const item of lista){
		console.log('- ',item);
	}
}

listar(debora.name,debora.age,debora.grade);