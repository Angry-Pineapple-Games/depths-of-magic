var myPreload = {
  images: {},
  sources : {
    street: {
      src: 'Assets/streetfighter.jpg',
      width: 992,
      height: 558},
    grid: {
      src: 'Assets/grid.png',
      width: 270,
      height: 246},
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