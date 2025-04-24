const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config()
const { URL_API } = process.env

async function getUsuario() {
    const response = await axios.get(`${URL_API}`)
    return await response.data
}
function maxXp(nivel) {
    return 100 * Math.pow(1.5, nivel - 1)
}

getUsuario().then((data) => {
   document.getElementById('imgUsuario').src = data.foto
   document.getElementById('userName').innerHTML = `<b>${data.username}</b>`
   document.getElementById('nivel').innerHTML = `<b>Nível: ${data.nivel}</b>`

   let maximoXp = maxXp(data.nivel)
   maximoXp = Math.round(maximoXp)
   const porcentagem = data.xp / maximoXp

   document.querySelector('.xpContent').style.width = `${porcentagem * 100}%` 
//    document.querySelector('.xpContent').innerHTML = `${data.xp}/${maximoXp}`
})

const banners = [
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2t5OWVzNWRlbnRpN3NudHo4amp6bzRkZmc2aW9oOGJtdXZoazVvMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ckr4W2ppxPBeIF8dx4/giphy.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHlwbjIxdHpxc3g5NDFyMHd3cmxhcWs4MHFvcWo3c25jeDJlczc5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QSj3oTAph5ZdKSfvfp/giphy.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHdveTNuZXloZmpnbTQ4bXZweWNuZHkyenZpYWhpaHBvNnprN29iZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KHh7jLrG6gIXBTnxsp/giphy.gif',
    'https://media4.giphy.com/media/10Y4hHRwOdps1a/200.webp?cid=ecf05e478lf5v97gzchlkasfu2o384zjpkusu3hw6m15z8gp&ep=v1_gifs_related&rid=200.webp&ct=g',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTl3dW4zMHl0cnc1MTM5bGg5ZDd4YXR0YWVzc2FrcXg4Y3Fkbm1sZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yAlINXLuIerBX8LuHM/giphy.gif'
]

const banner = document.getElementById('banner')
const randomIndex = Math.floor(Math.random() * banners.length)
banner.style.background = `url(${banners[randomIndex]}) no-repeat center center / cover`



