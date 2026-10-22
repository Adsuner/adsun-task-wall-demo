document.getElementById('load').onclick=()=>{
 const status=document.getElementById('status');
 if(!window.Adsun){status.textContent='SDK unavailable';return;}
 const id=document.getElementById('block').value.trim(); if(!id){status.textContent='Enter a public task block ID';return;}
 const task=document.createElement('adsun-task');task.setAttribute('data-block-id',id);task.setAttribute('data-debug','true');task.setAttribute('data-debug-console','true');
 task.innerHTML='<span slot="reward">Demo reward</span><button slot="button">Go</button><button slot="claim">Claim</button><span slot="done">Completed</span>';
 for(const [event,text] of [['reward','Task completed — demo reward'],['onBannerNotFound','No task available'],['onFastReturn','Returned too quickly — no reward']])task.addEventListener(event,()=>status.textContent=text);
 document.getElementById('task-host').replaceChildren(task);status.textContent='Debug task loading…';
};
