export default function getSourcePath(filePath) {
  const basePath = `https://github.com/lorica/uc-design-system/blob/master/`

  if (filePath.startsWith('./')) {
    filePath = filePath.slice(2)
  }

  if (filePath.includes('#')) {
    filePath = filePath.split('#')[0]
  }

  return basePath + filePath + '#L1'
}
