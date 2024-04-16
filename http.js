let nameElement = document.querySelector('.name');
let surnameElement = document.querySelector('.surname')

const getMyname =async()=> {
    let res = await fetch('http://127.0.01:3000/')
    console.log(res);
    if(!res.ok){
        alert('faild to get name');
        return;
    }
    let name =await res.text();
    nameElement.textContent=name;
}
const postSurname =async() => {
    let res=await fetch('http://127.0.01:3000/',{
        method:'POST',
        header:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({surname:'kumar'})
    })
    console.log(res);
    if(!res.ok){
        alert('failed tp post surname');
        return;
    }
    let ( surname ) = await res.json();
    surnameElement.textContent = surname;
}