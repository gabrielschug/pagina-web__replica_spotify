document.addEventListener('DOMContentLoaded', () => {

    const artistData = [
        {name: 'Henrique e Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Jorge e Mateus', image: './img/artista-jorge-mateus.jpg'},
        {name: 'The Weeknd', image: './img/the-weekend.jpg'},
        {name: 'Matue', image: './img/matue.jpg'},
        {name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg'},
        {name: 'Eminem', image: './img/eminem.jpg'},
        {name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg'},
        {name: 'Luan Santana', image: './img/artista-luan-santana.jpg'},
        {name: 'Grupo Menos é Mais', image: './img/menos.jpg'},

        {name: 'Matheus e Kauan', image: './img/artista-mateus-kauan.jpg'},
    ]
    
    const albumsData = [
        { name:'White Noise(Sleep & Relaxation Sounds',artist:'Sleppy John', image:'./img/album-white-noise.jpg'},
        { name: 'YES OR NO', artist: 'TETO', image: './img/teto.jpg'},
        { name: 'O céu Explica Tudo (Ao Vivo)', artist: 'Henrique e Juliano', image: './img/album-ceu-explica.jpg'},
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: `img/vida-loka.jpg`},
        { name: 'Decretos Reais', artist: 'Marília Mendonça', image: `img/marilia.jpg`},
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'img/hit-me.jpg'},
        { name: 'CAJU', artist: 'Liniker', image: 'img/album-caju.jpg'},
        { name: 'MAYHEM', artist: 'Lady Gaga', image: 'img/gaga.jpg'},
        { name: 'Escândalo Intimo', artist: 'Luísa Sonza', image: 'img/escandalo.jpg'},
        { name: 'Check-in', artist: 'Jorge e Mateus', image: 'img/jorge.jpg'},
    ]

    const artistsGrid = document.querySelector('.artists__grid')
    const albumsGrid = document.querySelector('.albums__grid')
    
    artistData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist__card')
        
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
            <h3>${artist.name}</h3>
            <p>Artista</p>
            </div>
        `
        artistsGrid.appendChild(artistCard)
    });

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album__card')
        
        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
            </div>
        `
        albumsGrid.appendChild(albumCard)
    });

})
