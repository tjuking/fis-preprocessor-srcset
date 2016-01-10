/**
 * tjuking
 * https://github.com/tjuking
 */

'use strict'

var map = fis.compile.lang;

module.exports = function (content) {
    return fis.compile.extHtml(content, function (m, $1, $2, $3, $4, $5) {
        if ($5) { //<img|embed|audio|video|link|object|source>
            var tag = $5.toLowerCase();
            if (tag === "source" || tag === "img") {
                m = m.replace(/(\ssrcset\s*=\s*)('[^']+'|"[^"]+")/ig, function (m, prefix, value) {
                    var key;
                    var item;
                    var quotePrefix = value[0];
                    var quoteSuffix = value[value.length - 1];
                    var srcsetArr = value.substring(1, value.length - 1).split(" "); //去除引号后的内容按空格分割成数组
                    for (var i = 0; i < srcsetArr.length; i++) {
                        item = srcsetArr[i];
                        if (item && /.+\.[png|jpg|jpeg|gif|webp|bmp]/i.test(item)) { //是图片的地址
                            key = fis.compile.isInline(fis.util.query(item)) ? 'embed' : 'uri';
                            srcsetArr[i] = map[key]['ld'] + item + map[key]['rd']
                        }
                    }
                    value = quotePrefix + srcsetArr.join(" ") + quoteSuffix;
                    return prefix + value;
                });
            }
        }
        return m;
    });
};