document.addEventListener('DOMContentLoaded', () => {

    const artistData = [
        {name: 'Henrique e Juliano', image: './assets/artista-henrique-juliano.jpg'},
        {name: 'Jorge e Mateus', image: './assets/artista-jorge-mateus.jpg'},
        {name: 'The Weeknd', image: './assets/the-weekend.jpg', link: 'https://open.spotify.com/intl-pt/artist/1Xyo4u8uXC1ZmMpatF05PJ'},
        {name: 'Matue', image: './assets/matue.jpg'},
        {name: 'Zé Neto & Cristiano', image: './assets/artista-ze-neto.jpg'},
        {name: 'Eminem', image: './assets/eminem.jpg'},
        {name: 'Gusttavo Lima', image: './assets/artista-gustavo-limma.jpg'},
        {name: 'Luan Santana', image: './assets/artista-luan-santana.jpg'},
        {name: 'Grupo Menos é Mais', image: './assets/menos.jpg'},
        {name: 'Matheus e Kauan', image: './assets/artista-mateus-kauan.jpg'},
    ]
    
    const albumsData = [
        { name:'White Noise(Sleep & Relaxation Sounds',artist:'Sleppy John', image:'./assets/album-white-noise.jpg'},
        { name: 'YES OR NO', artist: 'TETO', image: './assets/teto.jpg'},
        { name: 'O céu Explica Tudo (Ao Vivo)', artist: 'Henrique e Juliano', image: './assets/album-ceu-explica.jpg'},
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: `assets/vida-loka.jpg`},
        { name: 'Decretos Reais', artist: 'Marília Mendonça', image: `assets/marilia.jpg`},
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'assets/hit-me.jpg'},
        { name: 'CAJU', artist: 'Liniker', image: 'assets/album-caju.jpg'},
        { name: 'MAYHEM', artist: 'Lady Gaga', image: 'assets/gaga.jpg'},
        { name: 'Escândalo Intimo', artist: 'Luísa Sonza', image: 'assets/escandalo.jpg'},
        { name: 'Check-in', artist: 'Jorge e Mateus', image: 'assets/jorge.jpg'},
    ]

    const artistsGrid = document.querySelector('.artists__grid')
    const albumsGrid = document.querySelector('.albums__grid')
    
    artistData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist__card')
        
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
            <a href="${artist.link}">${artist.name}</a>
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
