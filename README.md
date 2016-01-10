fis-preprocessor-srcset
========================


fis-preprocessor-srcset插件（[npm地址](https://www.npmjs.com/package/fis-preprocessor-srcset)）支持解析`<img>`或`<picture>`标签的`srcset`属性中的图片路径


```html

   	<picture>
   		<source srcset="./image/banner-small.png 1x, ./image/banner-large.png 2x"/>
   		<img src="./image/banner-small.png"/>
   	</picture>
   	
```

使用
====

```bash

    //install
    npm install -g fis-preprocessor-srcset


    //config
    vi <project>/fis-conf.js

    fis.merge.config({
        modules: {
            preprocessor: {
                tpl: "srcset"
            }
        },
        ....
    });
    
```