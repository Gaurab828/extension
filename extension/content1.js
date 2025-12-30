function a(h){
    const msgs = [
    "Are you doom scrolling?",
    "I think you got bigger fish to fry",
    "you gotta stop scrolling now",
    "aren't you bored from doom scrolling?",
    "I guess its time to move on",
    "save some time for other things too"
    ];
    let container = document.getElementById('ext-toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'ext-toast-container';
        Object.assign(container.style, {
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#F1FAC0',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '700px',
            backgroundColor: '#2CDD0D',
            fontSize: '20px',
            borderRadius: '1rem',
            padding: '5px',
            fontWeight: 'bold',
            zIndex: 2147483647
        });
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'ext-toast';
    toast.textContent = msgs[h % msgs.length];
    toast.addEventListener('click', () => toast.remove());
    toast.addEventListener('touchstart', () => toast.remove(), { passive: true });
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
}
let c=0;
let e=0;
const display = (function(){
   const d = document.createElement('div');
   d.id = 'extension-timer-display';
   d.textContent = '00:00:00';
   Object.assign(d.style, {
       position: 'fixed',
       right: '12px',
       bottom: '12px',
       background: 'rgba(0,0,0,0.75)',
       color: '#fff',
       padding: '6px 8px',
       borderRadius: '6px',
       fontFamily: 'sans-serif',
       fontSize: '13px',
       zIndex: 2147483647
        });
   (document.body || document.documentElement).appendChild(d);
       return d;
})();
let timer= null;
let startTime= 0;
let elapsedTime= 0;
let isrunning= false;
function start(){
if(!isrunning){
    startTime= Date.now() - elapsedTime;
    timer=setInterval(update,1000);
    isrunning=true;
}}
function update(){
let i=-1;
const currentTime= Date.now();
elapsedTime= currentTime - startTime;
let minutes= Math.floor((elapsedTime / (1000 * 60)));
let seconds= Math.floor((elapsedTime % (1000 * 60)) / 1000);
let b=minutes;
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
display.textContent= `${minutes}:${seconds}`;
if(((b%30)==0)&&(b!=0&&(b!=c))){
    a(e%6);
    e++;
    c=b;
}
}
if (document.body) {
    start();
    update();
} else {
    document.addEventListener('DOMContentLoaded', () => { start(); update(); }, { once: true });
}
