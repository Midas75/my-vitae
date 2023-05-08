export async function readAsStringAsync(path){
  const response=await fetch(path);
  const data=await response.text();
  return data;
}