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
            settings.snaket = settings.snaket || [ '#0095ff', '#ff004d', ];
            settings.tsnake  = settings.tsnake  || [ '#ff5a00', '#00ffb3', ];
            let snek1 = hex_to_rgb(settings.snaket[0]);
            let snek2 = hex_to_rgb(settings.snaket[1]);
            let snek_eye = rgb_to_hsv(snek1);
            snek_eye.s = Math.min(snek_eye.s + .13, 1);
            snek_eye.v = Math.max(snek_eye.v - .62, 0);
            snek_eye = hsv_to_rgb(snek_eye);


            for(let y = 0; y < 47; y++) {
              for(let x = 0; x < 47; x++) {
                let i = 4 * (x + y * 47);
                const c = {
                  r: br_pix[0 + i],
                  g: br_pix[1 + i],
                  b: br_pix[2 + i],
                };
                if(x < 27 && close(c, { r: 0, g: 0, b: 0, }, 8)) {
                  br_pix[0 + i] = snek1.r;
                  br_pix[1 + i] = snek1.g;
                  br_pix[2 + i] = snek1.b;
                } else if(close(c, { r: 0, g: 0, b: 0, }, 8)) {
                  br_pix[0 + i] = snek2.r;
                  br_pix[1 + i] = snek2.g;
                  br_pix[2 + i] = snek2.b;
                } else if(close(c, { r: 255, g: 0, b: 0, }, 10, 100, 100)) {
                  br_pix[0 + i] = snek_eye.r;
                  br_pix[1 + i] = snek_eye.g;
                  br_pix[2 + i] = snek_eye.b;
                }
              }
            }
            br_ctx.putImageData(br_data, 0, 0);
            console.log(br_.toDataURL());
            br2_ctx.drawImage(br, 0, 0, 47, 47);
            const br2_data = br2_ctx.getImageData(0, 0, 47, 47);
            const br2_pix = br2_data.data;

            let snek21 = hex_to_rgb(settings.tsnake[0]);
            let snek22 = hex_to_rgb(settings.tsnake[1]);
            let snek2_eye = rgb_to_hsv(snek21);
            snek2_eye.s = Math.min(snek2_eye.s + .13, 1);
            snek2_eye.v = Math.max(snek2_eye.v - .62, 0);
            snek2_eye = hsv_to_rgb(snek2_eye);
            
            for(let y = 0; y < 47; y++) {
              for(let x = 0; x < 47; x++) {
                let i = 4 * (x + y * 47);
                const c = {
                  r: br2_pix[0 + i],
                  g: br2_pix[1 + i],
                  b: br2_pix[2 + i],
                };
                if(x < 27 && close(c, { r: 0, g: 0, b: 0, }, 8)) {
                  br2_pix[0 + i] = snek21.r;
                  br2_pix[1 + i] = snek21.g;
                  br2_pix[2 + i] = snek21.b;
                } else if(close(c, { r: 0, g: 0, b: 0, }, 8)) {
                  br2_pix[0 + i] = snek22.r;
                  br2_pix[1 + i] = snek22.g;
                  br2_pix[2 + i] = snek22.b;
                } else if(close(c, { r: 255, g: 0, b: 0, }, 10, 100, 100)) {
                  br2_pix[0 + i] = snek2_eye.r;
                  br2_pix[1 + i] = snek2_eye.g;
                  br2_pix[2 + i] = snek2_eye.b;
                }
              }
            }
            br2_ctx.putImageData(br2_data, 0, 0);
            if(document.querySelector('#color').childElementCount > 18)
              for(let i = document.querySelector('#color').childElementCount - 1; i >= 19; i--)
                document.querySelector('#color').removeChild(document.querySelector('#color').children[i]);
            let q = new Image();
            q.src = 'https://www.google.com/logos/fnbx/snake_arcade/v5/color_18.png';
            q.width = q.height = 47;
            let c = document.querySelector('#color').children;
            document.querySelector('#color').replaceChild(br_, c[c.length - 1]);
            document.querySelector('#color').appendChild(br2_);
            document.querySelector('#color').appendChild(q);



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

            if(settings.grey_skull || settings.tball || settings.custom_url) {
              const normal = {
                tball:    i('https://i.ibb.co/QHDbWrn/ezgif-3-5122a424f32f.png'),
                skull:   i('https://www.google.com/logos/fnbx/snake_arcade/v4/apple_00.png')
              };
              if(settings.custom_url)normal.custom = i(settings.custom_url);
              
              const dead = {
                tball:    i('https://i.ibb.co/QHDbWrn/ezgif-3-5122a424f32f.png'),
                skull:   i('https://www.google.com/logos/fnbx/snake_arcade/v12/trophy_10.png'),
              };
              if(settings.custom_url) {
                dead.custom = document.createElement('canvas');
                dead.custom.width = dead.custom.height = 128;
                window.____ctx = dead.custom.getContext('2d');
                window.____ = new Image();
                ____.src = settings.custom_url;
                ____.crossOrigin = 'Anonymous';
                ____.width = ____.height = 128;
              }
              setTimeout(_ => {
                if(settings.custom_url) {
                  ____ctx.drawImage(____, 0, 0, 128, 128);
                  const ____data = ____ctx.getImageData(0, 0, 128, 128);
                  const ____pix = ____data.data;
                  for(let y = 0; y < 128; y++)
                    for(let x = 0; x < 128; x++) {
                      const i = 4 * (x + y * 128);
                      const c = {
                        r: ____pix[i],
                        g: ____pix[i + 1],
                        b: ____pix[i + 2],
                        a: ____pix[i + 3],
                      };
                      if(c.a > 0) {                    
                        const _y = 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;
                        ____pix[i] = ____pix[i + 1] = ____pix[i + 2] = _y;
                      }
                    }
                  ____ctx.putImageData(____data, 0, 0);
                }
                if(document.querySelector('#apple').childElementCount > 21)
                  for(let i = document.querySelector('#apple').childElementCount - 1; i >= 22; i--)
                    document.querySelector('#apple').removeChild(document.querySelector('#apple').children[i]);
                window.darks = [
                  i('https://i.postimg.cc/pTMsq0k2/apple-00-1.png'),
                  i('https://i.postimg.cc/Pxb2cmF1/apple-01.png'),
                  i('https://i.postimg.cc/rs8QLKv3/apple-02.png'),
                  i('https://i.postimg.cc/CKqvCyGP/apple-03-1.png'),
                  i('https://i.postimg.cc/VkTGbsC0/apple-04-1.png'),
                  i('https://i.postimg.cc/yY1rMbKx/apple-05.png'),
                  i('https://i.postimg.cc/280Xr7jw/apple-06.png'),
                  i('https://i.postimg.cc/qvgDR6zd/apple-07.png'),
                  i('https://i.postimg.cc/PJ4VLmWd/apple-08-1.png'),
                  i('https://i.postimg.cc/2jFKXfPg/apple-09.png'),
                  i('https://i.postimg.cc/NFYPfNrN/apple-10.png'),
                  i('https://i.postimg.cc/ZR6Mmk0B/apple-11.png'),
                  i('https://i.postimg.cc/XYDhccTJ/apple-12-1.png'),
                  i('https://i.postimg.cc/rpBP7yy2/apple-13.png'),
                  i('https://i.postimg.cc/9QfK7NgK/apple-14.png'),
                  i('https://i.postimg.cc/bvD56ShR/apple-15.png'),
                  i('https://i.postimg.cc/NfBWg06g/apple-16.png'),
                  i('https://i.postimg.cc/yYj2Wzj0/apple-17.png'),
                  i('https://i.postimg.cc/0jdFYgsR/apple-18.png'),
                  i('https://i.postimg.cc/05pTRSJW/apple-19.png'),
                  i('https://i.postimg.cc/vTdCxYCt/apple-20.png'),
                  new Image(),
                ];
                settings.tball     && (window.darks.push(dead.tball),    document.querySelector('#apple').appendChild(normal.tball));
                settings.custom_url && (window.darks.push(dead.custom),  document.querySelector('#apple').appendChild(normal.custom));
                settings.grey_skull && (window.darks.push(dead.skull),   document.querySelector('#apple').appendChild(normal.skull));
                const HZ = code.match(
                  /g\.type<this\.[a-zA-Z0-9_$]{1,8}\.length\?g\.type:0/
                )[0].match(/this\.[a-zA-Z0-9_$]{1,8}/)[0];
                eval(
                  code.match(
                    /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){if\(!this\.[a-zA-Z0-9_$]{1,8}&&[^]*?return this\.reset\(\)}/
                  )[0].replace(
                    '{',
                    `{
                      // ${HZ} = [...document.querySelector('#apple').children].map(e => [{ wa: { canvas: e }, oa: { canvas: e } }][0]);
                      
                      ${HZ} = [...document.querySelector('#apple').children].map((e, j) => [{ wa: { canvas: e }, oa: { canvas: window.darks[j] } }][0]);
                      // if(${HZ}.length >= 22) {
                      //   for(let j = document.querySelector('#apple').children.length - 1; j >= 22; j++) {
                      //     ${HZ}.splice(j, 1);
                      //   }
                      // }
                      // if(${HZ}.length < 22) {
                      //   ${HZ}.push({ wa: { canvas: new Image }, oa: { canvas: new Image } });
                      //   for(let j = 22; j < document.querySelector('#apple').children.length; j++) {
                      //     ${HZ}.push({
                      //       wa: { canvas: document.querySelector('#apple').children[j] },
                      //       oa: { canvas: window.darks[j] },
                      //     });
                      //   }
                      // }
                      console.log(${HZ})
                    `
                  )
                );
              }, 250);
              // eval(`var tball_ = new Image(); tball_.src = 'https://i.ibb.co/QHDbWrn/ezgif-3-5122a424f32f.png';`);
              // eval(
              //   code.match(
              //     /[a-zA-Z0-9_$]{1,8}=function\(a\){return a\.[a-zA-Z0-9_$]{1,8}\.canvas}/
              //   )[0].replace(
              //     '{',
              //     `{
              //       if(a.path && a.path.includes('apple') && [...document.querySelector('#apple').children].indexOf(document.getElementsByClassName('DqMRee tuJOWd')[0]) > 21)
              //         return document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('ezgif-3-5122a424f32f') 
              //           ? tball_ 
                    
                    
              //     `
              //   )
              // );
              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){[^}]*?apple[^]*?el\(\)\)}}/
                )[0].replace(
                  'Math.floor(21*Math.random());',
                  `Math.floor((21 + ~~${settings.tball} + ~~${!!settings.custom_url} + ~~${settings.grey_skull}) * Math.random());`
                )
              );
            }
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
          
                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(256, 0, 128, 128);
                bctx.fillStyle = '${settings.dark_goal}';
                bctx.fillRect(277, 21, 85, 85);
                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(298, 42, 42, 42);
                bctx.fillStyle = '${settings.dark_goal}';
                bctx.fillRect(384, 0, 128, 128);
                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(405, 21, 85, 85);
                bctx.fillStyle = '${settings.dark_goal}';
                bctx.fillRect(426, 42, 42, 42);
                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(512, 0, 128, 128);
                bctx.fillStyle = '${settings.darker_goal}';
                bctx.fillRect(533, 21, 85, 85);
                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(554, 42, 42, 42);
                bctx.fillStyle = '${settings.darker_goal}';
                bctx.fillRect(640, 0, 128, 128);
                bctx.fillStyle = '${settings.light_goal}';
                bctx.fillRect(661, 21, 85, 85);
                bctx.fillStyle = '${settings.darker_goal}';
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
                boorg = { wa: { canvas: _boorg, }, oa: { canvas: _boorg, }, };`
              );
              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}\.prototype\.render=function\(a,b\){this\.[a-zA-Z0-9_$]{1,8}&&this[^]*?el\(\),a\)}/
                )[0].replace(
                  '{',
                  `{
                    this\.${box}\.wa = this.${box}.oa = { canvas: boxCanvas, };
                  `
                ).replace(
                  '#578A34',
                  settings.borders
                ).replaceAll(
                  '#578A34',
                  settings.walls
                ).replaceAll(
                  '#a2d149',
                  settings.light_squares
                ).replaceAll(
                  '#AAD751',
                  settings.dark_squares
                ).replaceAll(
                  tkb, 
                  'boorg'
                )
              );
              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}=function\(a,b,c,d\){a\.context\.fillStyle[^}]*?}}/
                )[0].replaceAll(
                  '#a2d149',
                  settings.light_squares
                ).replaceAll(
                  '#AAD751',
                  settings.dark_squares
                )
              );
              eval(
                code.match(
                  /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){var a=this,b=[^]*?return b\.promise}/
                )[0].replaceAll(
                  '#a2d149',
                  settings.light_squares
                ).replaceAll(
                  '#AAD751',
                  settings.dark_squares
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
                        ctx.fillStyle = '${settings.dark_ee || settings.dark_squares}';
                      else
                        ctx.fillStyle = '${settings.light_ee || settings.light_squares}';
                      
                      ctx.fillRect(i * 34, 0, (i + 1) * 34, 34);
                    }
          
                    for(let i = 0; i < 12; i++) {
                      if(i % 2 === 0)
                        ctx.fillStyle = '${settings.light_ee || settings.light_squares}';
                      else
                        ctx.fillStyle = '${settings.dark_ee || settings.dark_squares}';
                      
                      ctx.fillRect(i * 34, 34, (i + 1) * 34, 69);
                    }
          
                    for(let i = 0; i < 12; i++) {
                      if(i % 2 === 0)
                        ctx.fillStyle = '${settings.dark_ee || settings.dark_squares}';
                      else
                        ctx.fillStyle = '${settings.light_ee || settings.light_squares}';
                      
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
          }, 250);
        }
      }, 250);
    }, 500);
    window.snake_scheme_epic_cool = JSON.stringify(settings);
  };
  window.snake.tennis = function() {
    return window.snake.scheme({
      score_bar:       '#7ecc10', 
      borders:         '#3da62b', 
      walls:           '#dadece', 
      background:      '#3832a8', 
      shadows:         '#3832a8', 
      light_squares:   '#3832a8', 
      dark_squares:    '#3832a8', 
      sky:             '#7ecc10', 
      separators:      '#7ecc10', 
      light_ee:        '#3832a8',
      dark_ee:         '#3832a8',
      buttons:         '#7ecc10', 
snaket:  [ '#6aff00', '#c3ff00', ],
      tsnake:  [ '#c3ff00', '#6aff00', ],
      tball:            true,
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
