export default function blur(){
  if(document.querySelector('table') && document.querySelector('h1')){
    document.querySelector('table').style.filter = 'blur(4px)';
    document.querySelector('h1').style.filter = 'blur(4px)';
  }
}
