(()=>{let e=[];function t(e,t,n,l,u){this.title=e,this.description=t,this.duedate=n,this.notes=l,this.priority=u}let n=document.getElementById("submit-task");document.getElementById("project-name").value,document.getElementById("submit-project"),n.addEventListener("click",(function(n){n.preventDefault();let l=document.getElementById("task-title").value,u=document.getElementById("task-description").value,a=document.getElementById("task-duedate").value,d=document.getElementById("task-notes").value,i=document.getElementById("task-priority").value,s=new t(l,u,a,d,i);e.push(s),localStorage.setItem("myTask",JSON.stringify(e)),l.value="",u.value="",a.value="",d.value="",i.value=""}))})();