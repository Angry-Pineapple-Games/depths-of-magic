/*En este script se gestiona la carga de los archivos multimedia para dejarlo disponible siempre que sea necesario*/
var myPreload = {
  images: {},
  sources : {
    street: {
      src: 'Assets/streetfighter.jpg',
      width: 1920,
      height: 1440},
    grid: {
      src: 'Assets/grid.jpg',
      width: 1080,
      height: 1080},
    ropeV: {
      src: 'Assets/ropeV.png',
      width: 67,
      height: 270},
    ropeH: {
      src: 'Assets/ropeH.png',
      width: 270,
      height: 67},
  },
  loadImages: function(callback) {
    let loadedImages = 0;
    let numImages = 0;
    for(var src in this.sources) {
      numImages++;
      this.images[src] = new Image();
      this.images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback();
        }
      };
      this.images[src].src = this.sources[src].src;
      this.images[src].initWidth = this.sources[src].width;
      this.images[src].initHeight = this.sources[src].height;
    }
  }
}