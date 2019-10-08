/*En este script se gestiona la carga de los archivos multimedia para dejarlo disponible siempre que sea necesario*/
var myLoading = {
  images: [],
  numImages: 16,
  source: {
    firstFrame: {
      src: 'Assets/preload/DepthsOfMagic',
      width: 2100,
      height: 1500
    }
  },
  loadImages: function (callback) {
    let loadedImages = 0;
    for (var i = 0; i < this.numImages; i++) {
      this.images[i] = new Image();
      this.images[i].onload = function () {
        if (++loadedImages >= myLoading.numImages) {
          myPreload.loadImages(callback);
        }
      };
      this.images[i].src = this.source.firstFrame.src + String(i) + ".png";
      this.images[i].initWidth = this.source.firstFrame.width;
      this.images[i].initHeight = this.source.firstFrame.height;
    }
  }
}

var myPreload = {
  images: {},
  sources: {
    grid: {
      src: 'Assets/combat/grid.png',
      width: 640,
      height: 640
    },
    gridBlocked: {
      src: 'Assets/combat/gridBlocked.png',
      width: 640,
      height: 640
    },
    gridNodes: {
      src: 'Assets/combat/gridNodes.png',
      width: 640,
      height: 640
    },
    ropeCounterV: {
      src: 'Assets/combat/ropeCounterV.png',
      width: 40,
      height: 160
    },
    ropeCounterH: {
      src: 'Assets/combat/ropeCounterH.png',
      width: 160,
      height: 40
    },
    enemy0: {
      src: 'Assets/spritesheet_test.png',
      width: 366,
      height: 688
    },
    enemy1: {
      src: 'Assets/spritesheet_test.png',
      width: 366,
      height: 688
    },
    enemy2: {
      src: 'Assets/spritesheet_test1.png',
      width: 366,
      height: 688
    },
    enemy3: {
      src: 'Assets/spritesheet_test.png',
      width: 366,
      height: 688
    },
    enemy4: {
      src: 'Assets/spritesheet_test1.png',
      width: 366,
      height: 688
    },
    enemy5: {
      src: 'Assets/spritesheet_test.png',
      width: 366,
      height: 688
    },
    enemy6: {
      src: 'Assets/spritesheet_test1.png',
      width: 366,
      height: 688
    },
    enemy7: {
      src: 'Assets/spritesheet_test.png',
      width: 366,
      height: 688
    },
    enemy8: {
      src: 'Assets/spritesheet_test1.png',
      width: 366,
      height: 688
    },
    enemy9: {
      src: 'Assets/spritesheet_test.png',
      width: 366,
      height: 688
    },
    room0: {
      src: 'Assets/fondo1.jpg',
      width: 1920,
      height: 1440
    },
    room1: {
      src: 'Assets/fondo2.jpg',
      width: 1920,
      height: 1440
    },
    room2: {
      src: 'Assets/fondo3.jpg',
      width: 1920,
      height: 1440
    },
    room3: {
      src: 'Assets/fondo4.jpg',
      width: 1920,
      height: 1440
    },
    room4: {
      src: 'Assets/fondo5.jpg',
      width: 1920,
      height: 1440
    },
    room5: {
      src: 'Assets/fondo6.jpg',
      width: 1920,
      height: 1440
    },
    room6: {
      src: 'Assets/fondo7.jpg',
      width: 1920,
      height: 1440
    },
    room7: {
      src: 'Assets/fondo8.jpg',
      width: 1920,
      height: 1440
    },
    room8: {
      src: 'Assets/fondo9.jpg',
      width: 1920,
      height: 1440
    },
    gameover: {
      src: 'Assets/gameover.jpg',
      width: 1920,
      height: 1440
    },
    hero: {
      src: 'Assets/spritesheet_hero.png',
      width: 1024,
      height: 2048
    }
  },
  spritesInfo: {
    hero: {
      src: 'Assets/spritesheet_hero.png',
      json: spritesheet_hero,
      frames: []
    },
    //enemies
    0: {
      src: 'Assets/spritesheet_test.png',
      json: spritesheet_test,
      frames: []
    },
    1: {
      src: 'Assets/spritesheet_test.png',
      json: spritesheet_test,
      frames: []
    },
    2: {
      src: 'Assets/spritesheet_test1.png',
      json: spritesheet_test,
      frames: []
    },
    3: {
      src: 'Assets/spritesheet_test.png',
      json: spritesheet_test,
      frames: []
    },
    4: {
      src: 'Assets/spritesheet_test1.png',
      json: spritesheet_test,
      frames: []
    },
    5: {
      src: 'Assets/spritesheet_test.png',
      json: spritesheet_test,
      frames: []
    },
    6: {
      src: 'Assets/spritesheet_test1.png',
      json: spritesheet_test,
      frames: []
    },
    7: {
      src: 'Assets/spritesheet_test.png',
      json: spritesheet_test,
      frames: []
    },
    8: {
      src: 'Assets/spritesheet_test1.png',
      json: spritesheet_test,
      frames: []
    },
    9: {
      src: 'Assets/spritesheet_test.png',
      json: spritesheet_test,
      frames: []

    }
  },
  loadImages: function (callback) {
    let loadedImages = 0;
    let numImages = 0;
    for (var src in this.sources) {
      numImages++;
    }
    for (var src in this.sources) {
      this.images[src] = new Image();
      this.images[src].onload = function () {
        myGameArea.resizeBackground(myLoading.images[Math.trunc((loadedImages / numImages) * myLoading.numImages)], 1);
        if (++loadedImages >= numImages) {
          callback();
        }
      };
      this.images[src].src = this.sources[src].src;
      this.images[src].initWidth = this.sources[src].width;
      this.images[src].initHeight = this.sources[src].height;
    }
    for (var spr in this.spritesInfo) {
      this.spritesInfo[spr].frames = myAnimManager.getFrameInfoFromJSON(this.spritesInfo[spr].json);
    }
  }
}