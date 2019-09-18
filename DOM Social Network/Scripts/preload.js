var images = {};
var sources = {
    street: 'Assets/streetfighter.jpg',
    grid: 'Assets/grid.png'
};
function loadImages(sources, callback) {
    let loadedImages = 0;
    let numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback();
        }
      };
      images[src].src = sources[src];
    }
};