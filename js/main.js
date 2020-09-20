const idBtn = document.getElementById('id-btn');
let order = {
    pizza:'',
    sosy: [],
    name:'',
    adress: '',
    email:'',
    tel:'',
    text: '',

}


idBtn.addEventListener("click", takeOrder)

function takeOrder() {
    sprawdzanieSosow("sosy")
    const pomidorowy = document.getElementById('pomidorowy')
    const czosnkowy = document.getElementById('czosnkowy')
    const ostryPomidorowy = document.getElementById('ostryPomidorowy')
    console.log(pomidorowy.checked)

    //pobieram imie i nazwisko z input
const nameC = document.getElementById('nameC').value
order.name = nameC
console.log("takeOrder -> nameC", order)
}

function sprawdzanieSosow(nazwaKlasy) {
    const pobraneWszytkieSosyZinputu = document.getElementsByClassName(nazwaKlasy)
    for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
        // console.log(pobraneWszytkieSosyZinputu[i])
        if (pobraneWszytkieSosyZinputu[i].checked === true) {
            console.log(pobraneWszytkieSosyZinputu[i].attributes)
        }
    }
}



order.name
idBtn.addEventListener("click", takeOrder)




// function dodawanie(a, b) {
//     let wynik = a + b
//     console.log(wynik)
// }
// dodawanie(5, 15)

// dodawanie(2, 15)
// dodawanie(7, 1885)
// dodawanie(5, 88)
// dodawanie(7, 7)