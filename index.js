
// DOM Elements
const leftSec = document.querySelector('.sec_container')
const rightSec = document.querySelector('.left_sec-container')
const players = document.querySelector('#players')
const playerName = document.querySelector('#name')
const city = document.querySelector('#city')
const country = document.querySelector('#country')
const state = document.querySelector('#state')
const number = document.querySelector('#number')
const batside = document.querySelector('#batside')
const primary = document.querySelector('#primary')
const throwside = document.querySelector('#throwside')
const playerImg = document.querySelector('#img')
const divs = leftSec.children

//Value
let id = 642715
let id1
class App {
    data1 = {}
    data2 = []
    html
    html2

    constructor() {
        this.getData()
    }

    _renderPlayers() {
        for (let obj in this.data1) {
            this.data2.push(this.data1[obj])
        }
        this._showPlayerInfo()
        this.data2.forEach(data => {
            this.html = `<div id = 'players' class = 'players' data-id=${data.id}>
            <img class = 'playerImg' src = ${data.picture}>
            <h3 class = 'playName'>${data.lastName}, ${data.firstName}</h3>
            <h3 class = 'playID'>Player ID: ${data.id}</h3>
            <img class = 'logo2' src = 'https://cdn.freebiesupply.com/images/large/2x/milwaukee-brewers-logo-font.png'>
        </div>`
        leftSec.insertAdjacentHTML('afterbegin', this.html)
        })
        leftSec.addEventListener('click', (e) => {
            id = e.target.dataset.id
            if(e.target.parentElement.id === 'players') {
                id = e.target.parentElement.dataset.id //makes sure that if an image is clicked on the div that the person still changes
            }
            rightSec.classList.remove('hidden')
            rightSec.style.opacity = 1
            rightSec.style.marginLeft = '100px'
        })
        leftSec.addEventListener('click', this._showPlayerInfo.bind(this))
    }

    getData() {fetch('./data.json').then(data => { //for the data in the json, return it
        return data.json()
    }).then(data => {
        this.data1 = data // go a step down to grab the object itself
        this._renderPlayers()
        })
    }

    _showPlayerInfo() {
        
        id1 = this.data2.find(data => {
            return data.id === Number(id)
        })
playerName.innerHTML = `<strong>Name:</strong><div>${id1.firstName} ${id1.lastName}</div>`
city.innerHTML = `<strong>Birth City:</strong> ${id1.birthCity}`
country.innerHTML = `<strong>Birth Country:</strong> ${id1.birthCountry}`
state.innerHTML = `<strong>Birth State Province:</strong> ${!id1.birthStateProvince ? 'N/A' : id1.birthStateProvince}`
number.innerHTML = `<strong>No.</strong> ${id1.number}`
batside.innerHTML = `<strong>Batside:</strong> ${id1.batSide}`
primary.innerHTML = `<strong>Primary Position:</strong> ${id1.primaryPosition}`
throwside.innerHTML = `<strong>Throwside:</strong> ${id1.throwSide}`
playerImg.src = id1.picture
    }
}


const init = new App()