async function fetchJoke(category) {
    const url = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        let jokeText = data.type === "twopart" ? `${data.setup} ... ${data.delivery}` : data.joke;
        document.getElementById("joke").textContent = jokeText;
        
        if (category === "Any") {
            document.getElementById("title").textContent = "✦ Joke Of The Day ✦";
        } else if (category === "Pun") {
            document.getElementById("title").textContent = "A Random Pun";
        } else {
            document.getElementById("title").textContent = `A Random ${category} Joke`;
        }
    } catch (error) {
        document.getElementById("joke").textContent = "Failed to fetch joke. Try again!";
    }
}

fetchJoke('Any');