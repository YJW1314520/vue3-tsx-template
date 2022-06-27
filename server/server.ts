import express from 'express'
import { join } from 'path'
import { readFileSync } from 'fs'

type data = {
  readonly id: string,
  readonly name: string,
  value: number
}
const Data: data[] = [
  {
    name: '李白',
    id: '0001',
    value: 190
  },
  {
    name: 'sy',
    id: '0002',
    value: 90
  }
]
/**网站的入口路径*/
const indexUrl = '/a'
const app = express()
//- 静态文件直接放在服务器上,例如: 127.0.01:8080/a/index.html
app.use(indexUrl, express.static('dist'))
//- 确保index.html引入本地文件时能够读取到正确的路径
app.use('/assets', (req, res) => {
  //这段代码在检测vitepress的构建文件
  if (req.originalUrl.includes('undefined')) {
    const queryString = req.originalUrl.match(/(?<=_).*?\.md/)?.[0]
    const buffer = readFileSync(join(__dirname, 'dist/hashmap.json'))
    const json = JSON.parse(buffer.toString())
    req.originalUrl = req.originalUrl
      .replace('undefined', json[queryString as string])
      .replace(indexUrl.replace('/', '') + '_', '')
  }
  res.sendFile(join(__dirname, '/dist', req.originalUrl))
})
//- 路由设置
app.get('/api/User', (_, res) => {
  res
    .writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
    .end(JSON.stringify(Data), 'utf-8')
})
app.listen(8080, () => {
  console.log(`服务器已经开启!
它位于http://localhost:8080${indexUrl}`)
})