// drifting low-poly wind mesh (sharp triangles only)
(function(){const c=document.getElementById('mesh');if(!c)return;const x=c.getContext('2d'),S=90;let W,H,P,cols,rows;
function init(){W=c.width=innerWidth;H=c.height=innerHeight;cols=Math.ceil(W/S)+3;rows=Math.ceil(H/S)+3;P=[];
 for(let j=0;j<rows;j++)for(let i=0;i<cols;i++)P.push({x:(i-1)*S+(Math.random()-.5)*S*.7,y:(j-1)*S+(Math.random()-.5)*S*.7,p:Math.random()*6.28})}
const pt=(i,j,t)=>{const q=P[j*cols+i];return[q.x+Math.sin(t+q.p)*16+Math.sin(t*.4)*30,q.y+Math.cos(t*.7+q.p)*10]};
function tri(a,b,c2,i,j,k,t){const s=(Math.sin(i*1.7+j*2.3+k*5+t*.8)+1)/2;
 x.fillStyle='rgba(190,230,226,'+(s*.07)+')';x.strokeStyle='rgba(190,230,226,.14)';
 x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.lineTo(c2[0],c2[1]);x.closePath();x.fill();x.stroke()}
function draw(ms){const t=ms/1000;x.clearRect(0,0,W,H);
 for(let j=0;j<rows-1;j++)for(let i=0;i<cols-1;i++){const a=pt(i,j,t),b=pt(i+1,j,t),d=pt(i,j+1,t),e=pt(i+1,j+1,t);tri(a,b,d,i,j,0,t);tri(b,e,d,i,j,1,t)}
 requestAnimationFrame(draw)}
addEventListener('resize',init);init();requestAnimationFrame(draw)})();
