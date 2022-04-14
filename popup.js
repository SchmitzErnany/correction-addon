document.addEventListener("DOMContentLoaded", async () => {
    const textarea = document.getElementById("textArea");
    // const gen = document.defaultView.getElementsByTagName("textarea");
    const linksList = document.getElementById("linksList");
    // const url = "https://api.chucknorris.io/jokes/categories";
    const url = "https://api.chucknorris.io/jokes/random";
    
    try {
        const res = await fetch(url);
        const response = await res.json();
        textarea.value = response.value
    } catch (err) {
        console.log(err);
    }
});
