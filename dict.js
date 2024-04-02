let input = document.getElementById("input");
let button = document.getElementById("btn1");
let output = document.querySelector("#output");


button.addEventListener("click", async function() {
    const inp = input.value;
    if (inp === "") {
        alert("Please enter the word that u think to know the meaning...")
    } else {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inp}`;
        let meaning = await fetch(url);
        meaning = await meaning.json();
        output.textContent = meaning[0]["meanings"][0]["definitions"][0]["definition"]
    }
});