// const submit = document.querySelector('.submit');
const form = document.querySelector('#form');
console.log(form)

// submit.addEventListener('click',async(e)=>{
//     console.log('hello')
// });

form.addEventListener('submit',async(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    console.log(name, email)

     try{
        const response = await fetch("http://localhost:8080/user/create",{
            method:"POST", 
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name:name,email:email})
            
        });
        if(response.ok){
            const result = await response.text();
            alert("success")
            console.log(result);
            window.location.href="userPage.html"
        }
        else{
            const error = await response.text();
            alert(error)
        }
    }catch (error){
        alert (error.message)
    }

})