/*En este script se gestiona la carga de los archivos multimedia para dejarlo disponible siempre que sea necesario*/
var myPreload = {
  images: {},
  sources : {
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
    //hero: {
      //src: 'Assets/hero.jpg',
      //width: 366,
      //height: 688},
    enemy0: {
      src: 'Assets/enemy1.jpg',
      width: 366,
      height: 688},
    enemy1: {
      src: 'Assets/enemy2.jpg',
      width: 366,
      height: 688},
    enemy2: {
      src: 'Assets/enemy3.jpg',
      width: 366,
      height: 688},
    enemy3: {
      src: 'Assets/enemy4.jpg',
      width: 366,
      height: 688},
    enemy4: {
      src: 'Assets/enemy5.jpg',
      width: 366,
      height: 688},
    enemy5: {
      src: 'Assets/enemy6.jpg',
      width: 366,
      height: 688},
    enemy6: {
      src: 'Assets/enemy7.jpg',
      width: 366,
      height: 688},
    enemy7: {
      src: 'Assets/enemy8.jpg',
      width: 366,
      height: 688},
    enemy8: {
      src: 'Assets/enemy9.jpg',
      width: 366,
      height: 688},
    enemy9: {
      src: 'Assets/enemy10.jpg',
      width: 366,
      height: 688},
    room0: {
      src: 'Assets/fondo1.jpg',
      width: 1920,
      height: 1440},
    room1: {
      src: 'Assets/fondo2.jpg',
      width: 1920,
      height: 1440},
    room2: {
      src: 'Assets/fondo3.jpg',
      width: 1920,
      height: 1440},
    room3: {
      src: 'Assets/fondo4.jpg',
      width: 1920,
      height: 1440},
    room4: {
      src: 'Assets/fondo5.jpg',
      width: 1920,
      height: 1440},
    room5: {
      src: 'Assets/fondo6.jpg',
      width: 1920,
      height: 1440},
    room6: {
      src: 'Assets/fondo7.jpg',
      width: 1920,
      height: 1440},
    room7: {
      src: 'Assets/fondo8.jpg',
      width: 1920,
      height: 1440},
    room8: {
      src: 'Assets/fondo9.jpg',
      width: 1920,
      height: 1440},
    gameover: {
      src: 'Assets/gameover.jpg',
      width: 1920,
      height: 1440},
    hero:{
      src:'Assets/spritesheet_hero.png',
      width: 1024,
      height: 2048}
  },
  spritesInfo:{
    spritesHero:{
      src:'Assets/spritesheet_hero.png',
      json:'Assets/spritesheet_hero.json',
      frames:[]
    }
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
    for(var spr in this.spritesInfo){
      this.spritesInfo[spr].frames = myAnimManager.getFrameInfoFromJSON(this.spritesInfo[spr].json);
    }
    
    //this.spritesInfo.spritesHero.frames = myAnimManager.getFrameInfoFromJSON(this.spritesInfo.spritesHero.json);
    console.log(this.spritesInfo.spritesHero.frames);
  }
}