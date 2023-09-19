export async function readAsStringAsync(path,option){
  const response=await fetch(path,option);
  const data=await response.text();
  return data;
}