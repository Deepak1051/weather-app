const input = document.querySelector('input')
const loc = document.querySelector('.location')
const temp = document.querySelector('.temp')
const speed = document.querySelector('.speed')
const type = document.querySelector('.type')
const image = document.getElementById('random-img')
const btn = document.querySelector('.btn')
const magic = document.querySelector('.magic')

let backImgSrc


///unpsplash api

const apiKey = 'zUhA9581YBicP--l4q5inQdUimfJe8hXn9ZYqZ0mFbQ'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`

console.log(input)
console.log(magic)
// console.log(image.src)


// const weatherData=async()=>{
//     const res=await fetch(url)
//     const data=await res.json()
//     return data
// }
// weatherData()


btn.addEventListener('click', async () => {
    const url = `http://api.weatherstack.com/current?access_key=0dd029bca0e88896dfaf13835a1fa1e3&query=${input.value}`
    if (input.value.length === 0) {
        // return document.querySelector('div').textContent = `Type somthing`
        return console.log("type something...")
    }

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    loc.textContent = `${data.location.name}, ${data.location.region}, ${data.location.localtime}`
    temp.textContent = `temp ${data.current.temperature}°`
    type.textContent = `${data.current.weather_descriptions[0]}`
    speed.textContent = `wind ${data.current.wind_speed} km/h`
    // image.src = `${data.current.weather_icons[0]}`
    // image.setAttribute('src', `${data.current.weather_icons[0]}`)
    console.log(image)
})

magic.addEventListener(("click"), async () => {
    const res = await fetch(apiUrl)
    const data = await res.json()
    backImgSrc = data.urls.full
    image.setAttribute('src', backImgSrc)
    console.log(image)
})