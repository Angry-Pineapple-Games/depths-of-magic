/*En este script se gestiona la carga de los archivos multimedia para dejarlo disponible siempre que sea necesario*/
var myPreload = {
  images: {},
  sources : {
    street: {
      src: 'Assets/streetfighter.jpg',
      width: 1920,
      height: 1440},
    grid: {
      src: 'Assets/grid.png',
      width: 640,
      height: 640},
    ropeV: {
      src: 'Assets/ropeV.png',
      width: 40,
      height: 160},
    ropeH: {
      src: 'Assets/ropeH.png',
      width: 160,
      height: 40}
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