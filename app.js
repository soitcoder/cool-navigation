let open=document.querySelector('#open');
let close=document.querySelector('#close');
let container=document.querySelector('.container');

open.addEventListener('click',openWhenClick);
close.addEventListener('click',closeWhenClick);

function openWhenClick(){
  container.classList.add('show-nav');
}

function closeWhenClick(){
  container.classList.remove('show-nav');
}
