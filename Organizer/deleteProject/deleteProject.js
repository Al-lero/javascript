const form = document.querySelector('#form');
console.log(form)

form.addEventListener('submit',async(e)=>{
    e.preventDefault();

    const id = document.getElementById('id').value
    console.log(id)

    try{
        const response = await fetch("http://localhost:8080/project/delete", {
            method:"DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({id:id})
        })
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