export function readAsString(path){
    fetch(path)
    .then(response => response.text())
    .then(data => {
      // 将md文件的内容转换为字符串
      console.log(data.toString());
      return data.toString();
    })
    .catch(error => {
      console.error('Error fetching md file:', error);
    });
}