if(window.snake) {
  window.snake.scheme = function(settings = {}) {
    
    if(settings.score_bar === undefined)
      settings.score_bar = settings.scoreBar || '#4A752C';
    if(settings.borders === undefined)
      settings.borders = '#578A34';
    if(settings.walls === undefined)
      settings.walls = settings.borders;
    if(settings.shadows === undefined)
      settings.shadows = '#94BD46';
    if(settings.light_squares === undefined)
      settings.light_squares = settings.lightSquares || '#AAD751';
    if(settings.dark_squares === undefined)
      settings.dark_squares = settings.darkSquares || '#A2D149';
    if(settings.sky === undefined)
      settings.sky = '#4DC1F9';
    if(settings.separators === undefined)
      settings.separators = '#87CEFA';
    if(settings.buttons === undefined)
      settings.buttons = '#1155CC';
    if(settings.light_goal === undefined) {
      let f = settings.light_squares;
      f = f.replace('#', '');
      let { h, s, v, } = rgb_to_hsv({
        r: parseInt(f.substring(0, 2), 16),
        g: parseInt(f.substring(2, 4), 16),
        b: parseInt(f.substring(4, 6), 16),
      });
      s += 0.03;
      v += 0.07;
      s = s > 1 ? 1 : s;
      v = v > 1 ? 1 : v;
      let { r, g, b } = hsv_to_rgb({ h: h, s: s, v: v });
      // settings.light_goal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);
      settings.light_goal = rgb_to_hex({ r: Math.round(r), g: Math.round(g), b: Math.round(b) });
    }
    if(settings.dark_goal === undefined) {
      let f = settings.dark_squares;
      f = f.replace('#', '');
      let { h, s, v, } = rgb_to_hsv({
        r: parseInt(f.substring(0, 2), 16), 
        g: parseInt(f.substring(2, 4), 16),
        b: parseInt(f.substring(4, 6), 16),
      });
      s += 0.03;
      v -= 0.08;
      s = s > 1 ? 1 : s;
      v = v > 1 ? 1 : v < 0 ? 0 : v;
      let { r, g, b } = hsv_to_rgb({ h: h, s: s, v: v });
      // settings.dark_goal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);
      settings.dark_goal = rgb_to_hex({ r: Math.round(r), g: Math.round(g), b: Math.round(b) });
    }
    let f = settings.dark_goal;
    f = f.replace('#', '');
    let { h, s, v, } = rgb_to_hsv({
      r: parseInt(f.substring(0, 2), 16), 
      g: parseInt(f.substring(2, 4), 16),
      b: parseInt(f.substring(4, 6), 16),
    });
    v -= .11;
    v = v < 0 ? 0 : v;
    let { r, g, b } = hsv_to_rgb({ h: h, s: s, v: v });
    // settings.darker_goal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);
    settings.darker_goal = rgb_to_hex({ r: Math.round(r), g: Math.round(g), b: Math.round(b) });
    // console.log(settings.dark_goal, settings.light_goal, settings.darker_goal)
    
    document.body.bgColor = settings.background || settings.score_bar;
    document.getElementsByClassName('sEOCsb')[0].style.backgroundColor = settings.score_bar;
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
          mctx.fillStyle = settings.light_squares;
        else
          mctx.fillStyle = settings.dark_squares;
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
          sctx.fillStyle = settings.light_squares;
        else
          sctx.fillStyle = settings.dark_squares;
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
          lctx.fillStyle = settings.light_squares;
        else
          lctx.fillStyle = settings.dark_squares;
        
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
      let l_f = settings.light_squares;
      l_f = l_f.replace('#', '');
      let l_r = parseInt(l_f.substring(0, 2), 16);
      let l_g = parseInt(l_f.substring(2, 4), 16);
      let l_b = parseInt(l_f.substring(4, 6), 16);
      for(let y = 0; y < 128; y++)
        for(let x = 0; x < 128; x++) {
          let index = 4 * (x + y * 128);
          let { h, s, v, } = rgb_to_hsv({
            r: pix[index],
            g: pix[1 + index],
            b: pix[2 + index],
          });
          
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
        const whsv = rgb_to_hsv({ r: wrgb.r, g: wrgb.g, b: wrgb.b, });
        let new_hsv;
        if(settings.keyBlockMarks) {
          const kbm_rgb = hex_to_rgb(settings.keyBlockMarks);
          new_hsv = rgb_to_hsv({ r: kbm_rgb.r, g: kbm_rgb.g, b: kbm_rgb.b, });
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
        const new_rgb = hsv_to_rgb({ h: new_hsv.h, s: new_hsv.s, v: new_hsv.v, });
        for(let y = 0; y < key_img.height; y++) {
          for(let x = 0; x < key_img.width; x++) {
            let index = 4 * (x + y * key_img.width);
            let { h, s, v, } = rgb_to_hsv({
              r: pix[index],
              g: pix[1 + index],
              b: pix[2 + index],
            });
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
          if(script.src === '' || script.src.includes('apis.google.com'))continue;
          console.log(script.src);
          const req = new XMLHttpRequest();
          req.open('GET', script.src);
          req.onload = function() {
            if(this.responseText.indexOf('trophy') !== -1)
              processCode(this.responseText);
          };
          req.send();
        }
        function processCode(code) {
          const br = new Image();
          br.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADY0lEQVR4nO2ZMU8VQRRG9///AFsrOytjZSKNDbEiGhMrKUls1ERCMMBagBv37dtl9+3c+e69c04yFZDsnO8AD17XAQAAAAAAAAAAAABUoZ85kJy54YkhOVuGJ4Rk7BmfAIIzGfTs4ra/vnnoj3F5dUcEyRgNOTf8IYdf162LgGCcMRrw8upu1fgbIuBXiXNGAxzy6cu3vu+60Xn1+v3w8e8/7ve+diACIYvj//z1ezL+v/P23fnweWcXtxYREEIFFgOYG384T1zfPBBAUIoEsPBaoHYERLWRCAGsGY2fMCeyGMCH88/ZA2g+hOWfAH3/+Ir/mfENXwOsGalmaOkYCZj7H8D/fwq+ePlm8nHDvwJqB0AEW6n03T83jCK4dEwu73B8RQBEsMTCG0KZAmgmgqOX//j1z+SNIcHw6gCaCEE1aqQA0kagHjZSAOkiUI8aMYA0EagHLSXc4zO5Rz1oadlen8st6kEtJHt+NleoB7UUHOEZpagHrSE20rNWRT1obaERn9kU9agqkVGfuyjqUT2Iy3SXTagH9iQr670WUQ/tUVD2+w2ox3YrpmvkrurR3Qk5IPV91aO7EfEMae/O+OtJd3/G304qD4x/GilcMP4+wjshgP2EdsL4+wnrhfHLEdIP45clnCMCKEs4R4xfnjCe+O63IYwrxrchjC8CsCOELwKwI4QvxrcjhDMCsMW9MwKwxbUzxrfHtTsCsMe1OwKwx7U7ArDHtTsCsMe1OwKwx7U7ArDHtTsCsMe1OwKwx707ArAjhDcCsCOENwKwI4S3WgG0GEEIZwRgQxhnBGBDGGcEYEMYZzUDaCWCcL4IoCzhXBFAOUK6qhlA9ghCeiKAMoT2RAT7Ce2ndgDZIgjvhgBOJ40bIjiNNE4UAUSPIJ0PIlhPSg+qAFxcfgOpHRDBMunvrgzAlYgjNHNvIpjS1H3VAXiS0tJdR6gD8CAn+/0WUQ+vFJX1XptRj15bWKa7FEM9uLXAyM9eDfXQJaWqnzHc+F2nF5bthEQtLcsJjVpe9JMCtcSoJxVqmdFOStRSo5zUqOV6P02gluz1NIVatrfTLGrxHk7zqAdgeAeox2B8J6iHYXwHqAdieCeoB2N4J6gHZHwnqMdkdCeoB2Z4RzA6DDA6HIWhAQAAAAAAALruL5cwHSTkvUUiAAAAAElFTkSuQmCC';
          br.crossOrigin = 'Anonymous';
          
          const br2_ = document.createElement('canvas');
          br2_.width = br2_.height = 47;
          const br2_ctx = br2_.getContext('2d');
          
          setTimeout(function() {
            const br_ = document.createElement('canvas');
            br_.width = br_.height = 47;
            const br_ctx = br_.getContext('2d');
            br_ctx.drawImage(br, 0, 0, 47, 47);

            const br_data = br_ctx.getImageData(0, 0, 47, 47);
            const br_pix = br_data.data;
                        settings.custom_yinyang  = settings.custom_yinyang  || [ '#ff5a00', '#00ffb3', ];

            settings.snaket = settings.snaket || [ '#0095ff', '#ff004d', ];
            settings.tsnake  = settings.tsnake  || [ '#ff5a00', '#00ffb3', ];

            settings.custom_gradient = settings.custom_gradient || [ '#0095ff', '#ff004d', ];

            let snek21 = hex_to_rgb(settings.custom_yinyang[0]);
            let snek22 = hex_to_rgb(settings.custom_yinyang[1]);
            let snek2_eye = rgb_to_hsv(snek1);
            snek2_eye.s = Math.min(snek_eye.s + .13, 1);
            snek2_eye.v = Math.max(snek_eye.v - .62, 0);
            snek2_eye = hsv_to_rgb(snek_eye);
            let snek1 = hex_to_rgb(settings.snaket[0]);
            let snek2 = hex_to_rgb(settings.snaket[1]);
            let snek_eye = rgb_to_hsv(snek1);
            snek_eye.s = Math.min(snek_eye.s + .13, 1);
            snek_eye.v = Math.max(snek_eye.v - .62, 0);
            snek_eye = hsv_to_rgb(snek_eye);


            for(let y = 0; y < 47; y++) {
@@ -347,6 +346,8 @@ if(window.snake) {
            const br2_data = br2_ctx.getImageData(0, 0, 47, 47);
            const br2_pix = br2_data.data;

            let snek21 = hex_to_rgb(settings.tsnake[0]);
            let snek22 = hex_to_rgb(settings.tsnake[1]);
            let snek2_eye = rgb_to_hsv(snek21);
            snek2_eye.s = Math.min(snek2_eye.s + .13, 1);
            snek2_eye.v = Math.max(snek2_eye.v - .62, 0);
@@ -397,6 +398,23 @@ if(window.snake) {



            eval(
              code.match(
                /[a-zA-Z0-9_$]{1,8}=\[\["#4E7CF6","#17439F"\],[^]*?"#6B6B6B"\]\]/
              )[0].replace(
                '"#6B6B6B"]]',
                `"#6B6B6B"], ["${settings.snaket[0]}", "${settings.snaket[1]}"], ["${settings.tsnake[0]}", "${settings.tsnake[1]}"]]`
              )
            );

            eval(
              code.match(
                /[a-zA-Z0-9_$]{1,8}=\[5,4,7,7,1,2,0,3,9,8,0,14,15,15,11,12,17,16\]/
              )[0].replace(
                ']', ', 19, 18]'
              )
            );

            if(settings.grey_skull || settings.burger || settings.cactus || settings.hotdog || settings.egg || settings.lime || settings.red_pepper || settings.cane || settings.cracker || settings.tree || settings.custom_url) {
              const normal = {
                burg:    i('https://i.postimg.cc/B6ycxmBb/porga.png'),
@@ -865,7 +883,8 @@ if(window.snake) {
      light_ee:        '#E2EFF1',
      dark_ee:         '#B6D5E1',
      buttons:         '#90B6D1', 
      custom_yinyang:  [ '#00ffff', '#ff77ff', ],
      snaket:  [ '#6aff00', '#c3ff00', ],
      tsnake:  [ '#c3ff00', '#6aff00', ],
      cane:            true,
      cracker:         true,
      tree:            true,
    });
  };
  function rgb_to_hsv(col) {
    let R = col.r / 255, G = col.g / 255, B = col.b / 255;
    let xmax = Math.max(R, G, B);
    let xmin = Math.min(R, G, B);
    let C = xmax - xmin;
    let h, s, v;
    v = xmax;
    h = (
      C === 0
        ? 0 
      : v === R
        ? 60 * (G - B) / C 
      : v === G
        ? 60 * (2 + (B - R) / C)
      : v === B
        ? 60 * (4 + (R - G) / C) 
      : 0
    );
    s = v == 0 ? 0 : C / v;
    return { h: h < 0 ? h + 360 : h, s: s, v: v, };
  }
  function hsv_to_rgb(col) {
    let C = col.v * col.s;
    let H = col.h / 60;
    let X = C * (1 - Math.abs((H % 2) - 1));
    
    let [ R, G, B, ] = (
      0 <= H && H <= 1 
        ? [ C, X, 0, ]
      : H <= 2 
        ? [ X, C, 0, ] 
      : H <= 3 
        ? [ 0, C, X, ] 
      : H <= 4 
        ? [ 0, X, C, ] 
      : H <= 5
        ? [ X, 0, C, ]
      : H <= 6
        ? [ C, 0, X, ] 
      : [ 0, 0, 0, ]
    );
    let m = col.v - C;
    let r = R + m, 
        g = G + m, 
        b = B + m;
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
  function rgb_to_hex(col) {
    return `#${col.r.toString(16).padStart(2, '0')}${col.g.toString(16).padStart(2, '0')}${col.b.toString(16).padStart(2, '0')}`
  }
  function close(c0, c1, rr = 1, rg = rr, rb = rr) {
    return Math.abs(c0.r - c1.r) < rr &&
          Math.abs(c0.g - c1.g) < rg &&
          Math.abs(c0.b - c1.b) < rb;
  }
  function i(src) {
    let img = new Image();
    img.src = src;
    img.crossOrigin = 'Anonymous';
    img.width = img.height = 47;
    return img;
  }
}
