fis-preprocessor-srcset
========================


fis-preprocessor-srcset插件（[npm地址](https://www.npmjs.com/package/fis-preprocessor-srcset) [github地址](https://github.com/tjuking/fis-preprocessor-srcset)）支持解析`<img>`或`<picture>`标签的`srcset`属性中的图片路径


```html

   	<picture>
   		<source srcset="./image/banner-small.png 1x, ./image/banner-large.png 2x"/>
   		<img src="./image/banner-small.png"/>
   	</picture>
   	
```

使用
====

```

    //install
    npm install -g fis-preprocessor-srcset


    //config
    vi <project>/fis-conf.js

    fis.merge.config({
        modules: {
            preprocessor: {
                tpl: "srcset" //如果您使用的是fis-plus或其它的解决方案，则需要加上相应的模板前处理插件，例如fis-plus中需要调整为"components,extlang,srcset"
            }
        },
        ....
    });
    
```
