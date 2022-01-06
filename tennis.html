
window.snake.scheme = function(settings = {}) {
  if(settings.scoreBar === undefined)
    settings.scoreBar = '#4A752C';
  if(settings.borders === undefined)
    settings.borders = '#578A34';
  if(settings.walls === undefined)
    settings.walls = settings.borders;
  if(settings.shadows === undefined)
    settings.shadows = '#94BD46';
  if(settings.lightSquares === undefined)
    settings.lightSquares = '#AAD751';
  if(settings.darkSquares === undefined)
    settings.darkSquares = '#A2D149';
  if(settings.sky === undefined)
    settings.sky = '#4DC1F9';
  if(settings.separators === undefined)
    settings.separators = '#87CEFA';
  if(settings.buttons === undefined)
    settings.buttons = '#1155CC';
  if(settings.lightGoal === undefined) {
    let f = settings.lightSquares;
    f = f.replace('#', '');
    let { h, s, v, } = RGBtoHSV(parseInt(f.substring(0, 2), 16), parseInt(f.substring(2, 4), 16), parseInt(f.substring(4, 6), 16));
    s += 0.03;
    v += 0.07;
    s = s > 1 ? 1 : s;
    v = v > 1 ? 1 : v;

    let { r, g, b, } = HSVtoRGB(h, s, v);
    settings.lightGoal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);
  }
  if(settings.darkGoal === undefined) {
    let f = settings.darkSquares;
    f = f.replace('#', '');
    let { h, s, v, } = RGBtoHSV(parseInt(f.substring(0, 2), 16), parseInt(f.substring(2, 4), 16), parseInt(f.substring(4, 6), 16));
    s += 0.03;
    v -= 0.08;
    s = s > 1 ? 1 : s;
    v = v > 1 ? 1 : v < 0 ? 0 : v;

    let { r, g, b, } = HSVtoRGB(h, s, v);
    settings.darkGoal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);
  }
  let f = settings.darkGoal;
  f = f.replace('#', '');
  let { h, s, v, } = RGBtoHSV(parseInt(f.substring(0, 2), 16), parseInt(f.substring(2, 4), 16), parseInt(f.substring(4, 6), 16));
  v -= .11;
  v = v < 0 ? 0 : v;
  let { r, g, b, } = HSVtoRGB(h, s, v);
  settings.darkerGoal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);

  
  document.body.bgColor = settings.background || settings.scoreBar;
  document.getElementsByClassName('sEOCsb')[0].style.backgroundColor = settings.scoreBar;
  let bacon = document.getElementsByClassName('T7SB3d');
  for(let b of bacon)
    b.style.background = settings.sky;
  let pork = document.getElementsByClassName('e1XC2b');
  for(let p of pork)
    p.style.borderBottomColor = settings.separators;
  let ham = document.getElementsByClassName('FL0z2d');
  for(let h of ham)
    h.style.background = settings.buttons;



  const standard = document.createElement('canvas');
  standard.width = 128;
  standard.height = 128;
  const mctx = standard.getContext('2d');
  mctx.fillStyle = settings.borders;
  roundRect(mctx, 16, 16, 95, 95, 5, true);
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++){
      if(i % 2 == 0 ^ j % 2 == 0)
        mctx.fillStyle = settings.lightSquares;
      else
        mctx.fillStyle = settings.darkSquares;
      mctx.fillRect(20 + i * 29, 20 + j * 29, 29, 29);
    }
  }
  
  
  const url_m = standard.toDataURL();
  document.getElementsByClassName('iLZj5e')[4].children[0].src = url_m;



  const small = document.createElement('canvas');
  small.width = 128;
  small.height = 128;
  const sctx = small.getContext('2d');
  sctx.fillStyle = settings.borders;
  roundRect(sctx, 26, 26, 75, 75, 5, true);

  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 2; j++) {
      if(i % 2 == 0 ^ j % 2 == 0)
        sctx.fillStyle = settings.lightSquares;
      else
        sctx.fillStyle = settings.darkSquares;

      sctx.fillRect(30 + 34 * i, 30 + 34 * j, 34, 34);
    }
  }

  const url_s = small.toDataURL();
  document.getElementsByClassName('iLZj5e')[4].children[1].src = url_s;



  const large = document.createElement('canvas');
  large.width = 128;
  large.height = 128;
  const lctx = large.getContext('2d');
  lctx.fillStyle = settings.borders;
  roundRect(lctx, 6, 6, 115, 115, 5, true);

  for(let i = 0; i < 4; i++) 
    for(let j = 0; j < 4; j++) {
      if(i % 2 === 0 ^ j % 2 === 0)
        lctx.fillStyle = settings.lightSquares;
      else
        lctx.fillStyle = settings.darkSquares;
      
      lctx.fillRect(10 + 27 * i, 10 + 27 * j, 27, 27);
    }
  
  const url_l = large.toDataURL();
  document.getElementsByClassName('iLZj5e')[4].children[2].src = url_l;


  const wall_img = new Image();
  wall_img.src = 'https://i.postimg.cc/XN8CGSPy/trophy-01.png';
  wall_img.crossOrigin = 'Anonymous';
  setTimeout(function() {
    const wall_mode = document.createElement('canvas');
    wall_mode.width = 128;
    wall_mode.height = 128;
    const wctx = wall_mode.getContext('2d');
    wctx.drawImage(wall_img, 0, 0);

    let wall_data = wctx.getImageData(0, 0, 128, 128);
    let pix = wall_data.data;

    let w_f = settings.walls;
    w_f = w_f.replace('#', '');
    let w_r = parseInt(w_f.substring(0, 2), 16);
    let w_g = parseInt(w_f.substring(2, 4), 16);
    let w_b = parseInt(w_f.substring(4, 6), 16);

    let l_f = settings.lightSquares;
    l_f = l_f.replace('#', '');
    let l_r = parseInt(l_f.substring(0, 2), 16);
    let l_g = parseInt(l_f.substring(2, 4), 16);
    let l_b = parseInt(l_f.substring(4, 6), 16);

    for(let y = 0; y < 128; y++)
      for(let x = 0; x < 128; x++) {
        let index = 4 * (x + y * 128);
        let { h, s, v, } = RGBtoHSV(
          pix[index],
          pix[1 + index],
          pix[2 + index]
        );


        

        if(Math.abs(h - 95) < 2) {
          pix[index] = w_r;
          pix[1 + index] = w_g;
          pix[2 + index] = w_b;
        } else {
          pix[index] = l_r;
          pix[1 + index] = l_g;
          pix[2 + index] = l_b;
        }

      }
    
    wctx.putImageData(wall_data, 0, 0);

    const url_w = wall_mode.toDataURL();
    document.getElementsByClassName('e1XC2b')[1].children[0].children[1].src = url_w;
    document.getElementsByClassName('vuOknd')[1].children[0].src = url_w;


    let key_img = new Image();
    key_img.src = 'https://i.postimg.cc/nzkFstB8/key-types-dark.png';
    key_img.crossOrigin = 'Anonymous';
    setTimeout(_ => {
      const key_types = document.createElement('canvas');
      key_types.width = 640;
      key_types.height = 128;
      const kctx = key_types.getContext('2d');
      kctx.drawImage(key_img, 0, 0);

      const kdata = kctx.getImageData(0, 0, 640, 128);
      pix = kdata.data;

      const wrgb = hex_to_rgb(settings.walls);
      const whsv = RGBtoHSV(wrgb.r, wrgb.g, wrgb.b);
      let new_hsv;
      if(settings.keyBlockMarks) {
        const kbm_rgb = hex_to_rgb(settings.keyBlockMarks);
        new_hsv = RGBtoHSV(kbm_rgb.r, kbm_rgb.g, kbm_rgb.b);
      } else if(whsv.s > .1)
        new_hsv = {
          h: Math.max(whsv.h - 5, 0),
          s: Math.min(whsv.s + .24, 1),
          v: Math.max(whsv.v - .16, 0),
        };
      else 
        new_hsv = {
          h: Math.max(whsv.h - 5, 0),
          s: Math.max(whsv.s - .24, 0),
          v: Math.min(whsv.v + .16, 1),
        };
      const new_rgb = HSVtoRGB(new_hsv.h, new_hsv.s, new_hsv.v);

      for(let y = 0; y < key_img.height; y++) {
        for(let x = 0; x < key_img.width; x++) {
          let index = 4 * (x + y * key_img.width);
          let { h, s, v, } = RGBtoHSV(
            pix[index],
            pix[1 + index],
            pix[2 + index]
          );

          if(Math.abs(h - 90) < 2) {
            pix[index] = new_rgb.r;
            pix[1 + index] = new_rgb.g;
            pix[2 + index] = new_rgb.b;
          }
        }
      }
      kctx.putImageData(kdata, 0, 0);

      const url_k = key_types.toDataURL();
      



      const scripts = document.body.getElementsByTagName('script');
      for(let script of scripts) {
        const req = new XMLHttpRequest();
        req.open('GET', script.src);
        req.onload = function() {
          if(this.responseText.indexOf('#A2') !== -1)
            processCode(this.responseText);
        };
        req.send();
      }

      function processCode(code) {
    


          let ball = new Image();
          ball.src = 'https://i.ibb.co/QHDbWrn/ezgif-3-5122a424f32f.png';
          ball.width = ball.height = 47;
          ball.className = 'DqMRee SsAred';
        

          if(document.querySelector('#apple').childElementCount > 21)
            for(let i = document.querySelector('#apple').childElementCount - 1; i >= 22; i--)
              document.querySelector('#apple').removeChild(document.querySelector('#apple').children[i]);

          settings.ball        && document.querySelector('#apple').appendChild(ball);



          eval(`var eg_ = new Image(); eg_.src = 'https://i.ibb.co/QHDbWrn/ezgif-3-5122a424f32f.png';`);
          eval(
            code.match(
              /[a-zA-Z0-9_$]{1,8}=function\(a\){return a\.[a-zA-Z0-9_$]{1,8}\.canvas}/
            )[0].replace(
              '{',
              `{
                if(a.path && a.path.includes('apple') && [...document.querySelector('#apple').children].indexOf(document.getElementsByClassName('DqMRee tuJOWd')[0]) > 21)
                  return document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('porga') 
                    ? bu_ 
                  : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('index') 
                    ? ca_ 
                  : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('dog')
                    ? do_ 
                  : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('lime')
                    ? li_
                  : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('pepper')
                    ? pe_
                  : eg_;
                
                
              `
            )
          );



        eval(`var boxImage = new Image; boxImage.src = 'https://i.postimg.cc/C1w3nYcZ/box.png';`);
        setTimeout(function() {
          

          const box = code.match(
            /this\.[a-zA-Z0-9_$]{1,8}=new [a-zA-Z0-9_$]{1,8}\([^)}]*?box\.png[^})]*?\);/
          )[0].replace('this.', '').replace(/=new[^]*/g, '');

          
          eval(
            `
            var boxCanvas = document.createElement('canvas');
            boxCanvas.width = 1024;boxCanvas.height = 128;
            var bctx = boxCanvas.getContext('2d');
            bctx.drawImage(boxImage, 0, 0);
      
            bctx.fillStyle = '${settings.lightGoal}';
            bctx.fillRect(256, 0, 128, 128);
            bctx.fillStyle = '${settings.darkGoal}';
            bctx.fillRect(277, 21, 85, 85);
            bctx.fillStyle = '${settings.lightGoal}';
            bctx.fillRect(298, 42, 42, 42);
            bctx.fillStyle = '${settings.darkGoal}';
            bctx.fillRect(384, 0, 128, 128);
            bctx.fillStyle = '${settings.lightGoal}';
            bctx.fillRect(405, 21, 85, 85);
            bctx.fillStyle = '${settings.darkGoal}';
            bctx.fillRect(426, 42, 42, 42);
            bctx.fillStyle = '${settings.lightGoal}';
            bctx.fillRect(512, 0, 128, 128);
            bctx.fillStyle = '${settings.darkerGoal}';
            bctx.fillRect(533, 21, 85, 85);
            bctx.fillStyle = '${settings.lightGoal}';
            bctx.fillRect(554, 42, 42, 42);
            bctx.fillStyle = '${settings.darkerGoal}';
            bctx.fillRect(640, 0, 128, 128);
            bctx.fillStyle = '${settings.lightGoal}';
            bctx.fillRect(661, 21, 85, 85);
            bctx.fillStyle = '${settings.darkerGoal}';
            bctx.fillRect(682, 42, 42, 42);
            `
          );

          eval(
            code.match(
              /[a-zA-Z0-9_$]{1,8}=function\(a\){a\.[a-zA-Z0-9_$]{1,8}\.globalCompositeOperation[^}]*"source-over"}/
            )[0].replace(
              /#94BD46/g,
              settings.shadows
            )
          );

          const tkb = code.match(
            /this\.[a-zA-Z0-9_$]{1,8}=new [a-zA-Z0-9_$]{1,8}\("snake_arcade\/key_types_dark\.png",[^)]*?\)/
          )[0].match(/this\.[a-zA-Z0-9_$]{1,8}/)[0];

          const oa = code.match(
            /[a-zA-Z0-9_$]{1,8}=function\(a\){return a\.[a-zA-Z0-9_$]{1,8}\.canvas}/
          )[0].match(/a\.[a-zA-Z0-9_$]{1,8}\.canvas/)[0].replace('a.', '').replace('.canvas', '');


          eval(
            `_boorg = new Image;_boorg.src='${url_k}';_boorg.crossOrigin='Anonymous';
            boorg = { ${oa}: { canvas: _boorg, }, };`
          );
          eval(
            code.match(
              /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(a\){if\(this\.[a-zA-Z0-9_$]{1,8}&&!this\.[a-zA-Z0-9_$]{1,8}\){if\(0<[^]*?#578A34[^]*?}}}/  
            )[0].replace(
              '{',
              `{
                this\.${box}\.${oa} = { canvas: boxCanvas, };
              `
            ).replace(
              '#578A34',
              settings.borders
            ).replaceAll(
              '#578A34',
              settings.walls
            ).replaceAll(
              '#A2D149',
              settings.lightSquares
            ).replaceAll(
              '#AAD751',
              settings.darkSquares
            ).replaceAll(
              tkb, 
              'boorg'
            )
          );

      
          
      
          eval(
            code.match(
              /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(a,b,c,d,e\){this\.[a-zA-Z0-9_$]{1,8}&&\(this\.[a-zA-Z0-9_$]{1,8}\.translate[^}]*?y\)\)}/
            )[0].replace(
              '{',
              `{
                let canv = document.createElement('canvas');
                canv.width = 403;canv.height = 110;
      
                let ctx = canv.getContext('2d');
      
                for(let i = 0; i < 12; i++) {
                  if(i % 2 === 0)
                    ctx.fillStyle = '${settings.darkSquares}';
                  else
                    ctx.fillStyle = '${settings.lightSquares}';
                  
                  ctx.fillRect(i * 34, 0, (i + 1) * 34, 34);
                }
      
                for(let i = 0; i < 12; i++) {
                  if(i % 2 === 0)
                    ctx.fillStyle = '${settings.lightSquares}';
                  else
                    ctx.fillStyle = '${settings.darkSquares}';
                  
                  ctx.fillRect(i * 34, 34, (i + 1) * 34, 69);
                }
      
                for(let i = 0; i < 12; i++) {
                  if(i % 2 === 0)
                    ctx.fillStyle = '${settings.darkSquares}';
                  else
                    ctx.fillStyle = '${settings.lightSquares}';
                  
                  ctx.fillRect(i * 34, 70, (i + 1) * 34, canv.height);
                }
                
              `
            ).replace(
              'drawImage(',
              `
              drawImage(Object.values(this).reduce(
                (s, el) => s || (typeof el === 'string' ? el.includes('end_empty') : false), false
              ) ? canv : 
              `
            )
          );
        }, 250);
        
      }
    }, 250);
  }, 500);
  localStorage.fishes_scheme_lol = JSON.stringify(settings);
};


window.snake.tennis = function() {
  return window.snake.scheme({
    scoreBar:     '#7ecc10',
    background:   '#3832a8',
    borders:      '#3da62b',
    shadows:      '#3832a8',
    lightSquares: '#3832a8',
    darkSquares:  '#3832a8',
    sky:          '#7ecc10',
    separators:   '#7ecc10',
    buttons:      '#7ecc10',
    ball:          true,
  });
};




function RGBtoHSV(r, g, b) {
  let R = r / 255, G = g / 255, B = b / 255;
  let xmax = Math.max(R, G, B);
  let xmin = Math.min(R, G, B);
  let C = xmax - xmin;
  let h, s, v;
  v = xmax;
  h = C == 0 ? 0 : v == R ? 60 * (G-B)/C : v == G ? 60 * (2+(B-R)/C) : v == B ? 60 * (4+(R-G)/C) : 0;
  s = v == 0 ? 0 : C/v;
  return { h: h < 0 ? h + 360 : h, s: s, v: v, };
}

function HSVtoRGB(h, s, v) {
  let C = v * s;
  let H = h / 60;
  let X = C * (1 - Math.abs((H % 2) - 1));
  
  let [ R, G, B, ] = 0 <= H && H <= 1 ? [ C, X, 0, ] : H <= 2 ? [ X, C, 0, ] : H <= 3 ? [ 0, C, X, ] : H <= 4 ? [ 0, X, C, ] : H <= 5 ? [ X, 0, C, ] : H <= 6 ? [ C, 0, X, ] : [ 0, 0, 0, ];

  let m = v - C;
  let r = R + m, g = G + m, b = B + m;

  return { r: r * 255, g: g * 255, b: b * 255, };
}


function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if(typeof stroke === 'undefined')
    stroke = false;
  if(typeof radius === 'undefined')
    radius = 5;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if(stroke)
    ctx.stroke();
  if(fill)
    ctx.fill();
}

function hex_to_rgb(hex) {
  hex = hex.replace('#', '');
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  };
}
