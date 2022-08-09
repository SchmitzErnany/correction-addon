const textareas = Array.from(document.getElementsByTagName("textarea"));
const config = {
    gecv3_url:
        "https://28af-2804-14c-b180-1e34-c52d-7ab7-97e8-a7c7.sa.ngrok.io/deep",
};

const text = "Eu somos isso";

// const url = config.gecv3_url;
// const options = {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//     },
//     body: JSON.stringify({ text }),
// };

// fetch(url, options)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("sadsadsadasdas =", data);
//     });

const length = 3;

try {
    textareas.map((textarea) => {
        const span = document.createElement('span');
        span.innerHTML = "Eu somos isso."
        textarea.innerHTML = span
        textarea.addEventListener("change", () => {
            const offset = Math.floor(Math.random() * 10);
            console.log(textarea.value, offset, length);
            textarea.style["background-color"] = "#dddddd";
            textarea.style["text-decoration"] = "underline";
            return;
        });
    });
} catch (err) {
    console.log(err);
}

// const options = {
//     method: "GET",
//     mode: "cors",
//     headers: {
//         Accept: "*/*",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "*",
//         "Access-Control-Request-Headers": "*",
//     },
// };

// fetch("https://api.chucknorris.io/jokes/random", options)
//     .then((response) => {
//         return response.json();
//     })
//     .then((response) => console.log(response.value))
//     .catch((err) => console.log(err));
