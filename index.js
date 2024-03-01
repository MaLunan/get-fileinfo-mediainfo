// 获取文件详细信息,帧率,宽高
import mediainfo from 'mediainfo.js'
export function getFileInfo(file) {
  return new Promise((resolve, reject) => {
    mediainfo({ format: 'object' }, (mediainfo) => {
      resolve(get_file_info(mediainfo, file))
    })
  })
  function get_file_info(mediainfos, file) {
    let getSize = () => file.size
    let readChunk = (chunkSize, offset) =>
      new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.onload = (event) => {
          if (event.target.error) {
            reject(event.target.error)
          }
          resolve(new Uint8Array(event.target.result))
        }
        reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize))
      })
    return new Promise((resolve, reject) => {
      mediainfos
        .analyzeData(getSize, readChunk)
        .then((result) => {
          // 如果是object，可以拿到结果对象
          let res = result.media.track[1]
          resolve(res)
        })
        .catch((error) => {
            reject(error)
          console.log(error)
          // output.value = `${output.value}\n\nAn error occured:\n${error.stack}`
        })
    })
  }
}
