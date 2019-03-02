var list = document.querySelector(' .users_list ')

function users(firstname,lastname){
 
 var temp = `
 
 <div class="user">
 <div>${firstname}</div>
<div>${lastname}</div>
</div>
 `;

 
 list.insertAdjacentHTML("beforeend",temp)
}

users('Vinayk','umesh');
users('hare','murare');