function templateStrings(){

    const name = "umesh";
    const age = 23;
    const position = "FullStack Developer";

    // In ES5
    console.log(" His name is  "+name+ " and he is " +age+ " years old  and he is a " +position   )

     console.log(`His name is ${name} and he is ${age} years old and he is a ${position}`)
     
     const names = ["Umesh","deepan","vivek"];

     console.log(`The name is ${names[0]}`);
     console .log (`The name is ${names[Math.floor(Math.random() * names.length - 1)+1]}`)

}
templateStrings();


const user = {
    name :" umesh" ,
    age : 23
};

console.log(`the name is ${user.name} and is ${user.age} is years old.`)

function req(page,id){

     const URL = `http://www.servernow/${page}/${id}`;

     console.log(URL);
}
return req('page',6)