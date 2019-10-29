export default function unblur(){
  if(document.querySelector('table') && document.querySelector('h1')){
    document.querySelector('table').style.filter = 'blur(0px)';
    document.querySelector('h1').style.filter = 'blur(0px)';
  }
}
