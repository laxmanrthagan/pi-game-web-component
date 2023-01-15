const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/pi-game-web-component/runtime.js',
        './dist/pi-game-web-component/polyfills.js',
        './dist/pi-game-web-component/styles.css',
        './dist/pi-game-web-component/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/pi-game-widget.js');
}
build();