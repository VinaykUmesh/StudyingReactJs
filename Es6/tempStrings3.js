var list = document.querySelector(' .users_list ')

function users(fname,lname){
 
 var temp = `
 
 <div class="user">
 <div>${fname}</div>
<div>${lname}</div>
</div>
 `;

 
 list.insertAdjacentHTML("beforeend",temp)
}

users('Vinayk','umesh');
users('hare','murare');