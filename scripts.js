document.addEventListener('DOMContentLoaded', () => {

    const artistData = [
        {name: 'Henrique e Juliano', image: './assets/artista-henrique-juliano.jpg', link:'https://open.spotify.com/intl-pt/artist/3p7PcrEHaaKLJnPUGOtRlT'},
        {name: 'Jorge e Mateus', image: './assets/artista-jorge-mateus.jpg',link:'https://open.spotify.com/intl-pt/artist/1elUiq4X7pxej6FRlrEzjM'},
        {name: 'The Weeknd', image: './assets/the-weekend.jpg', link: 'https://open.spotify.com/intl-pt/artist/1Xyo4u8uXC1ZmMpatF05PJ'},
        {name: 'Matue', image: './assets/matue.jpg',link: 'https://open.spotify.com/intl-pt/artist/5nP8x4uEFjAAmDzwOEc9b8'},
        {name: 'Zé Neto & Cristiano', image: './assets/artista-ze-neto.jpg', link: 'https://open.spotify.com/intl-pt/artist/487N2T9nIPEHrlTZLL3SQs'}, 
        {name: 'Eminem', image: './assets/eminem.jpg', link: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR'},
        {name: 'Gusttavo Lima', image: './assets/artista-gustavo-limma.jpg', link: 'https://open.spotify.com/artist/7MiDcPa6UiV3In7lIM71IN'},
        {name: 'Luan Santana', image: './assets/artista-luan-santana.jpg', link: 'https://open.spotify.com/artist/3qvcCP2J0fWi0m0uQDUf6r'},
        {name: 'Grupo Menos é Mais', image: './assets/menos.jpg', link: 'https://open.spotify.com/artist/6vTqEFbTtTRJsuIpzZgjxi'},
        {name: 'Matheus e Kauan', image: './assets/artista-mateus-kauan.jpg', link: 'https://open.spotify.com/artist/2Z0lRIqr997lIUiPtrpKCr'},
    ]
    
    const albumsData = [
        { name:'White Noise(Sleep & Relaxation Sounds',artist:'Sleppy John', image:'./assets/album-white-noise.jpg', link: 'https://open.spotify.com/album/0XyeA6udE98G42ZRUxOmOK'},
        { name: 'YES OR NO', artist: 'TETO', image: './assets/teto.jpg', link: 'https://open.spotify.com/album/3Cjn6aliQrVp6MPiU4oAdw'},
        { name: 'O céu Explica Tudo (Ao Vivo)', artist: 'Henrique e Juliano', image: './assets/album-ceu-explica.jpg', link: 'https://open.spotify.com/album/6UuPk9eKMZBEr0HizvV2Wy'},
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: `assets/vida-loka.jpg`, link: 'https://open.spotify.com/album/4HcPzKyKVtcZCwJgesoZWn'},
        { name: 'Decretos Reais', artist: 'Marília Mendonça', image: `assets/marilia.jpg`, link: 'https://open.spotify.com/album/6ncYffPA8uomCY8DJ0EXL9'},
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'assets/hit-me.jpg', link: 'https://open.spotify.com/album/7aJuG4TFXa2hmE4z1yxc3n'},
        { name: 'CAJU', artist: 'Liniker', image: 'assets/album-caju.jpg', link: 'https://open.spotify.com/album/1HRONdLhKvok05NgMKtKpj'},
        { name: 'MAYHEM', artist: 'Lady Gaga', image: 'assets/gaga.jpg', link: 'https://open.spotify.com/album/2MHUaRi9OCyTN02SoyRRBJ'},
        { name: 'Escândalo Intimo', artist: 'Luísa Sonza', image: 'assets/escandalo.jpg', link: 'https://open.spotify.com/album/5MGR1iBTBfsb28mHFSM5KV'},
        { name: 'Check-in', artist: 'Jorge e Mateus', image: 'assets/jorge.jpg', link: 'https://open.spotify.com/album/5Cs1VjhgG8FmA5rv5iXe3r'},
    ]

    const artistsGrid = document.querySelector('.artists__grid')
    const albumsGrid = document.querySelector('.albums__grid')
    
    artistData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist__card')
        
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
            <a target="_blank" href="${artist.link}">${artist.name}</a>
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
            <a target="_blank" href="${album.link}">${album.name}</a>
            <p>${album.artist}</p>
            </div>
        `
        albumsGrid.appendChild(albumCard)
    });

})