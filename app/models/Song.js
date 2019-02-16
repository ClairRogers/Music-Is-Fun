export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    getTemplate() {
        return `
        <div class="col-12 col-md-3 py-2">
                <div class="card">
                    <img src="${this.albumArt}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4>${this.artist}</h4>
                        <h5 class="title"><a onclick="app.controllers.itunesCtrl.playSong('${this.preview}')">${this.title}</a></h5>
                        <p>${this.collection}<p>
                        <h5><b>$${this.price}</b></h5>
                        <button type="button" class="btn btn-warning w-100" onclick="app.controllers.itunesCtrl.playSong('${this.preview}')">PLAY</button>
                    </div>
                </div>
            </div>
        `
    }
}