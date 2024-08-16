const form = document.querySelector('#form'); // Fixed selector typo
console.log(form);

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('id').value.trim();
    if (!id) {
        alert('ID is required');
        return;
    }

    console.log(id);

    try {
        const response = await fetch("http://localhost:8080/task/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id })
        });

        if (response.ok) {
            const result = await response.text();
            alert("Success");
            console.log(result);

             window.location.href="http://127.0.0.1:5500/Organizer/organizer-menu.html"
        } else {
            const error = await response.text();
            alert(error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});
