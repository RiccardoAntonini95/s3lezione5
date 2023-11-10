/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.random() * 21 //Math.floor(Math.random()) se volessimo un numero intero

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: 'riccardo',
  surname: 'antonini',
  age: 28,
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Javascript", "Java", "Python"]



/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("C#")


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice (){
  let numeroCasuale = Math.floor(Math.random()*6) + 1
  return numeroCasuale
}

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1,num2){
  if(num1 > num2){
    return num1
  } else if(num1 < num2){
    return num2
  } else {
    alert("I due numeri sono uguali")
  }
}


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa){
  return stringa.split(" ")
}

const dividiStringa = splitMe("I love coding")


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(string, valoreB){
  if(valoreB === true){
    return string.slice(1)
  } else if (valoreB === false){
    return string.slice(0, -1)
  } else {
    console.log("Valore booleano indefinito")
  }
}

const cancellaPrimoCarattere = deleteOne("Ciao come stai", true)
const cancellaUltimoCarattere = deleteOne("Ciao come stai", false)


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa){
  return stringa.split(" ").filter(carattere => isNaN(carattere)).join(" ")
}
//ho diviso la stringa in array di caratteri, ho filtrato quelli che non sono numeri ed ho ricreato la stringa con le parole spaziate
const togliNumeri = onlyLetters("I have 4 dogs")
console.log(togliNumeri)

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

/*volevo usare il metodo includes() per cercare la chiocciola e il punto e vedere con indexof se il punto era successivo ma 
sarebbe stato troppo generico quindi ho inserito un input all'html ed ho usato quello per validare  */

const emailControlla = document.getElementById("emailCheck")
function isThisAnEmail(stringa){
  if(stringa.checkValidity()){
    return true
  } else{
    return false
  }
} 
isThisAnEmail(emailControlla)


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt(){
  const oggi = new Date()
  const giorniSettimana = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"]
  const giornoOdierno = oggi.getDay()
  return giorniSettimana[giornoOdierno]
}

console.log(whatDayIsIt())



/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/


function rollTheDices(num){
  let numeriEstratti = {
    values : [],            //dichiaro values come array vuoto e sum come zero quando dichiaro l'oggetto
    sum : 0,
  }

  for(let i = 0; i < num; i++){
    let risultatoLancio = dice()
    numeriEstratti.values.push(risultatoLancio)   //posso pushare senza indice perchè values è gia un array vuoto
    numeriEstratti.sum += risultatoLancio    
  }
  return numeriEstratti
} 
let lanciaIDadi = rollTheDices(5)
console.log(lanciaIDadi)

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data){
  const dataParametro = new Date(data)
  const dataCorrente = new Date ()
  const giorniTrascorsi = dataCorrente - dataParametro  //le date sono in millisecondi quindi oggi va sottratto a "ieri"
  const millisecondiInUnGiorno = 1000*60*60*24  //1 secondo per 60 secondi per 60 minuti per 24 ore
  const differenzaInGiorni = giorniTrascorsi / millisecondiInUnGiorno //millisecondi dei giorni trascorsi diviso un giorno ritorna i giorni
  return parseInt(differenzaInGiorni)
}
const dataDaInserire = "November 8, 2023 11:30:00"  //
console.log(howManyDays(dataDaInserire))


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const compleanno = new Date("2023-04-12")
const today = new Date()

function isTodayMyBirthday(){
  if(compleanno.getDay() === today.getDay() && compleanno.getMonth() === today.getMonth()){
    return true
  } else {
    return false
  }
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const oggettoBase = {
  nome : "Mario",
  cognome : "Rossi",
}

function deleteProp(oggetto, stringa){
  if(stringa in oggetto){     // se la stringa passata è una proprietà diretta o ereditata dall'oggetto
    delete oggetto[stringa]   
  }
}

deleteProp(oggettoBase, "nome")
console.log(oggettoBase)

// array per gli esercizi

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const copiaFilm = [...movies]  //uso lo spread operator per precauzione così non modifico mai l'array movies
function newestMovie (array){
  let annoRecente = 0
  for (i = 0; i < copiaFilm.length; i++){
    const annoCorrente = copiaFilm[i].Year   //inserisco le proprietà year ciclate in una costante
    annoRecente = Math.max(annoRecente,annoCorrente)  //sovrascrive il valore ogni volta con quello più grande
  } return annoRecente
}

console.log(newestMovie(copiaFilm))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies (array){
  return array.length
}


console.log(countMovies(movies))


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears (array){
  const anniUscita = []
  for (i = 0; i < copiaFilm.length; i++){
    anniUscita.push(copiaFilm[i].Year)
} return anniUscita
}

console.log(onlyTheYears(movies))


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/ 
const copiaMoviesFilter = [...movies]
function onlyInLastMillennium(array){
  return array.filter(film => film.Year < 2000)
}

console.log(onlyInLastMillennium(copiaMoviesFilter))


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const copiaMoviesReduce = [...movies]
function sumAllTheYears(array){
  const anniUscita = []
  for (i = 0; i < movies.length; i++){
    anniUscita.push(copiaFilm[i].Year)
}                                          //reduce somma ciascun elemento dell'array all'accumulatore
  const anniSommati = anniUscita.reduce((acc, numero) => acc + parseInt(numero),0) // l'argomento iniziale è 0
  return anniSommati
}

console.log(sumAllTheYears(copiaMoviesReduce))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle (stringa){
  const arrayTitoli = [...movies]
  return arrayTitoli.filter(film => film.Title.includes(stringa))
}

console.log(searchByTitle("Avengers"))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide (stringa){
   const arrayTitoli = [...movies]
   let match = []
   let unmatch = []
   let oggettoFinale = {}
   for(let i = 0; i < arrayTitoli.length; i++){
    if(arrayTitoli[i].Title.includes(stringa)){
      match.push(arrayTitoli[i])
    } else {
      unmatch.push(arrayTitoli[i])
    }
   }
   oggettoFinale.match = match
   oggettoFinale.unmatch = unmatch
   return oggettoFinale
}

console.log(searchAndDivide("Avengers"))


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(num){
  const rimuoviIndiceArray = [...movies]
  rimuoviIndiceArray.splice(num, 1)
  return rimuoviIndiceArray
}

console.log(removeIndex(2))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selezionaContainer(){
  const containerScelto = document.getElementById("container")
  return containerScelto
}

selezionaContainer()

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selezionaTableData(){
  const celleSelezionate = document.getElementsByTagName("td")
  return celleSelezionate
}

selezionaTableData()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaDatiCelle(){
  const celleSelezionate = document.getElementsByTagName("td")
  for(let i = 0; i < celleSelezionate.length; i++){
    console.log(celleSelezionate[i].innerText)
  }
}

stampaDatiCelle()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function linkRedAll(){
  const allLinks = document.querySelectorAll("a")
  allLinks.style.backgroundColor = "red"
}

linkRedAll()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiLista (){
  const ulList = document.querySelector("#myList")
  const nuovoElemento = document.createElement("li")
  ulList.appendChild(nuovoElemento)
}

aggiungiLista()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLista(){
  const ulList = document.querySelector("#myList")
  ulList.innerHTML = ""                            //innerHTML sovrascrive tutto il contenuto con una stringa vuota, quindi la svuota
}

svuotaLista()  //altrimenti si poteva ciclare con while il metodo .removeChild

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasse(){
  const righeTabella = document.getElementsByTagName("tr")
  for(let i = 0; i < righeTabella.length; i++){
    righeTabella[i].classList.add("test")
  }
}

aggiungiClasse()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

