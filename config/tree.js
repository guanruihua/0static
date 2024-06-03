const fs = require('fs')

const ignore = [
  '.git',
  '.npmignore',
  '.vscode',
  'GEO_README.md',
  'package.json',
  'push.bat',
  'READEM_LOG.md',
  'README.md',
  'toc.json',
  'node_modules',
  'config'
]

const getTree = (url = '.', config = {}) => {
  const dirs = (fs.readdirSync(url) || []).filter((_) => !ignore.includes(_))

  return dirs.map((name) => {
    const path = url + '/' + name
    return {
      name,
      path,
      children: fs.lstatSync(path).isDirectory() ? getTree(path) : []
    }
  })
}

function run() {
  fs.writeFileSync(
    './toc.json',
    JSON.stringify(
      {
        version: '0.1.2',
        tree: getTree()
      },
      // null,
      // 1
    )
  )
}
run()
