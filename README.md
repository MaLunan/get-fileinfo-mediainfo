# 前言：

`获取图片、视频、音频文件详细信息,帧率,宽高`

依赖于  mediainfo 插件

# 下载 

``` js
npm i mediainfo
npm i get-fileinfo-mediainfo
```

# 引入 

```js
import {getFileInfo} from 'get-fileinfo-mediainfo'
```

# 使用

``` js
getFileInfo(file).then(res=>{
    console.log(res)//详细信息
})

```
