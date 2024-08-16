const form = document.querySelector('#form');
console.log(form)

form.addEventListener('submit',async(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value
    const description = document.getElementById('description').value
    console.log(name,description)

    try{
        const response = await fetch("http://localhost:8080/project/create", {
           method:"POST",
           headers: {
                "Content-Type": "application/json"
           },
           body:JSON.stringify({name:name,description:description}) 

        });
        console.log(response)
        if(response.ok){
            const result = await response.text();
            alert("success")
            console.log(result);
            window.location.href="http://127.0.0.1:5500/Organizer/organizer-menu.html"
            
        }
        else{
            const error = await response.text();
            alert(error)
        }
        } catch (error){
            alert (error.message)
        }
    })