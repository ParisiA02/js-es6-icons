/*
	1. creo una funzione che mi permeta di stampare per ogni elemento dell'array l'icona all'interno della pagina
	2. aggiungo un listener che mi permetta di gestire il selector dell'html
	3. gestisco il filtro all'interno della pagina con delle condizioni 
		3.1 per ogni filtro stampo le icone appartenenti al gruppo di icone selezionato
*/

const iconArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let container = document.querySelector(".container");

stampaIcone(iconArray);

document.addEventListener("change", function(){
	if (selector.value == "vegetable"){
		const vegetableArray = iconArray.filter((element)=>{
			return element.type === "vegetable";
		});

		container.innerHTML="";
		stampaIcone(vegetableArray);

	}else if(selector.value == "user"){
		const userArray = iconArray.filter((element)=>{
			return element.type === "user"
		});

		container.innerHTML="";
		stampaIcone(userArray);

	}else if(selector.value == "animal"){
		const animalArray = iconArray.filter((element)=>{
			return element.type === "animal";
		});

		container.innerHTML="";
		stampaIcone(animalArray);

	}else if (selector.value == "all"){
		container.innerHTML="";
		stampaIcone(iconArray);
	}
});

function stampaIcone(element){
	element.forEach(element => {
		let elemento = `<div class="box">
							<i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color};"></i>
							<div class="text">${element.name.toUpperCase()}</div>
						</div>`;
		container.innerHTML += elemento;
	});
}