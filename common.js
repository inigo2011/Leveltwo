// hidden hints: visible in the inspect tool (Elements panel) as comments on the background
(function(){const L=window.LEVEL2.link,st=+document.body.dataset.stage,bg=document.getElementById('bg');
const T={
1:()=>location.href+' ???. Recover the forgotten fragments. Dont rush, start simple. '+L[0],
2:()=>'dont get carried away '+L[1],
3:()=>'for now, take it literally '+L[2],
4:()=>'close your eyes, amidst the chaos, hear the tranquility '+L[3]+'  |  the breeze listens and so should you'};
bg.prepend(document.createComment(' solaris collapse: assets/solaris/collapse_'+st+'.jpg '));
bg.prepend(document.createComment(' '+T[st]()+' '))})();
