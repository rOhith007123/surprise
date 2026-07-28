const pages=[...document.querySelectorAll('.page')];let i=0;
function next(){document.querySelector('.hero').style.display='none';pages[0].classList.remove('hidden')}
document.body.addEventListener('click',e=>{if(e.target.tagName==='BUTTON')return;if(i<pages.length-1){pages[i].classList.add('hidden');i++;pages[i].classList.remove('hidden');}});
function finale(){pages[i].classList.add('hidden');document.getElementById('final').classList.remove('hidden');}
setInterval(()=>{let h=document.createElement('div');h.className='heart';h.textContent='💖';h.style.left=Math.random()*100+'vw';document.body.appendChild(h);setTimeout(()=>h.remove(),8000)},500);