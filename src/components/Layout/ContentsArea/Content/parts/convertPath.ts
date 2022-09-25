const convertPath = (path: string) => {
  const splitedPath = (path).split('/')
  const fileName = splitedPath[splitedPath.length -1] // file name is as directory name + '_' + language
  splitedPath.splice(1,0,'main') // Add branch name after repogitory name
  const pathWithBranch =  splitedPath.join('/') // Put together them again
  return pathWithBranch + "/" + fileName
}

export default convertPath