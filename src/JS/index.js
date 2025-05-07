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
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTl3dW4zMHl0cnc1MTM5bGg5ZDd4YXR0YWVzc2FrcXg4Y3Fkbm1sZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yAlINXLuIerBX8LuHM/giphy.gif',
    'https://media1.giphy.com/media/3s6inaVnOnO6L3vbwR/200.webp?cid=ecf05e472rc3cp0s03vu6rc2il0hl79lqdl8qsf8mlsz2kam&ep=v1_gifs_search&rid=200.webp&ct=g',
    'https://media0.giphy.com/media/84SFZf1BKgzeny1WxQ/giphy.webp?cid=ecf05e47q8uyh4oc9pml309vf6meo3jnsgqhjha31ywc2fq0&ep=v1_gifs_search&rid=giphy.webp&ct=g',
    'https://media3.giphy.com/media/l3vR6qtfmMd8NZfP2/giphy.webp?cid=ecf05e475c3j6hx09eiozf1wb5ze97cnouh1dzjzkq0qe8gq&ep=v1_gifs_search&rid=giphy.webp&ct=g'

]

setInterval(() => {
    const banner = document.getElementById('banner')
    const randomIndex = Math.floor(Math.random() * banners.length)
    banner.style.background = `url(${banners[randomIndex]}) no-repeat center center / cover`
}, 10000)

const fundoModal = document.getElementById('fundoModal')
const modalConfiguracao = document.querySelector('.modalConfiguracao')
const modalAddTarefa = document.querySelector('.modalAddTarefa')


document.querySelectorAll('.navMenuItem').forEach((item) => {
    item.addEventListener('click', (event) => {
        if (item.id == 'configuracao') {
            fundoModal.style.display = 'flex'
            modalConfiguracao.style.display = 'flex'
        } else if (item.id == 'addTarefa') {
            fundoModal.style.display = 'flex'
            modalAddTarefa.style.display = 'flex'
        }
    })
})

document.querySelectorAll('.btnModalClose').forEach((item) => {
    item.addEventListener('click', (event) => {
        fundoModal.style.display = 'none'
        modalConfiguracao.style.display = 'none'
        modalAddTarefa.style.display = 'none'
    })
})
