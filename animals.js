var djurLista = ['panda.jpg', 'cat.jpg', 'emur.jpg', 'bear.jpg', 'penguin.jpg', 'sparv.jpg']; // Skapa en lista med djur-bilder
var djurLista_length = djurLista.length - 1;	// Listans längd (-1 pga att en array börjar på 0)
var djur = 0;									// Variabel för att spara undan framslumpat djur innan djuret tas bort från listan

var div1 = document.getElementById("yta1"),		// Skapa en "referens" till de tre ytorna som bilderna ska ligga i
	div2 = document.getElementById("yta2"),
	div3 = document.getElementById("yta3");
var img1 = document.createElement("img"),		// Tre nya image-objekt skapas	[Funkar ej i gammla IE (questions/226847)]
	img2 = document.createElement("img"),
	img3 = document.createElement("img");
var	p1 = document.createElement("p"),			// Tre nya image-objekt skapas	[Funkar ej i gammla IE (questions/226847)]
	p2 = document.createElement("p"),
	p3 = document.createElement("p");

function chooseAnimal(obj){
	var n = djurLista_length; 					// Hur många djur finns det att slumpa utifrån i listan
	var slumpTal = Math.round(Math.random()*n);	// Slumpa fram djur
	var djur = djurLista[slumpTal];				// Vald djurfil (djur.jpg)
	var o = obj;
	o.alt = djur;							// Images ska alltid ha alt-attribut, så vi sätter det (bildfil: "djur.jpg)
	djurLista.splice(slumpTal, 1);			// Ta bort det framslumpade djuret från listan så det inte kan väljas igen (questions/500606)
	djurLista_length = djurLista.length-1;	// Ett djurborttaget = Listans nya längd är ett djur kortare
	return djur;							// Returnera valt djur.jpg
}

img1.src = "img/" + chooseAnimal(img1);		// Tilldela bildobjekten en url genom att köra igång funktionen som returnerar en slupad bild
img2.src = "img/" + chooseAnimal(img2);
img3.src = "img/" + chooseAnimal(img3);
p1.innerHTML = img1.src.slice(img1.src.lastIndexOf("/")+1, img1.src.length-4); // Spara undan bildtext = img.alt men utan sökväg och ".jpg"
p2.innerHTML = img2.src.slice(img2.src.lastIndexOf("/")+1, img2.src.length-4);
p3.innerHTML = img3.src.slice(img3.src.lastIndexOf("/")+1, img3.src.length-4);

div1.appendChild(p1);						// Skriv ut de tre bildtexterna på siten
div2.appendChild(p2);
div3.appendChild(p3);
div1.appendChild(img1);						// Skriv ut de tre bilderna på siten
div2.appendChild(img2);
div3.appendChild(img3);