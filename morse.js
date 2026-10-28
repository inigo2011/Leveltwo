// breeze + "HUNGER" in morse (needs one click/keypress to start: browser autoplay rules)
(function(){const M={H:'....',U:'..-',N:'-.',G:'--.',E:'.',R:'.-.'},U=.14;let ctx,on=false;
function beep(t,d){const o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.value=392;
 g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.22,t+.015);g.gain.setValueAtTime(.22,t+d-.03);g.gain.linearRampToValueAtTime(0,t+d);
 o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+d+.02)}
function loop(){let t=ctx.currentTime+.4;
 for(const ch of 'HUNGER'){for(const m of M[ch]){const d=(m==='.'?1:3)*U;beep(t,d);t+=d+U}t+=2*U}
 t+=10*U;setTimeout(loop,(t-ctx.currentTime)*1000-300)}
function start(){if(on)return;on=true;document.querySelector('.nudge')?.remove();
 ctx=new(window.AudioContext||window.webkitAudioContext)();ctx.resume();
 const b=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
 const s=ctx.createBufferSource();s.buffer=b;s.loop=true;
 const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=500;f.Q.value=.7;
 const g=ctx.createGain();g.gain.value=.14;
 const l=ctx.createOscillator(),lg=ctx.createGain();l.frequency.value=.18;lg.gain.value=300;l.connect(lg);lg.connect(f.frequency);l.start();
 s.connect(f);f.connect(g);g.connect(ctx.destination);s.start();loop()}
['pointerdown','keydown','touchstart'].forEach(e=>addEventListener(e,start,{once:true}));
setTimeout(()=>{if(!on){const n=document.createElement('div');n.className='nudge';document.body.appendChild(n)}},7000)})();
