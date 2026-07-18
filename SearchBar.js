const data = [
    "ChatGPT",
    "ChatBot",
    "Chat Data",
    "Instagram",
    "YouTube",
    "Chat AI",
    "Facebook",
    "ChatBar"
];

const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

search.addEventListener("input", function () {

    const value = search.value.toLowerCase();

    suggestions.innerHTML = "";
// 
    if (value === "") {
        return;
    }

    const filtered = data.filter(item =>
        item.toLowerCase().includes(value)
    );

    filtered.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;

        // Suggestion par click karne se input me aa jayega
        p.addEventListener("click", function () {
            search.value = item;
            suggestions.innerHTML = "";
        });

        suggestions.appendChild(p);
    });

});