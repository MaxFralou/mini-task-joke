const setup = document.querySelector('.setup');
const punchline = document.querySelector('.punchline');
const button = document.querySelector('.click');

const getJoke = async () => {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
            throw new Error("Opps");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    button.textContent = 'Loading...';
    const data = await getJoke();
    if (!data) {
        setup.textContent = 'Something went wrong';
        button.textContent = 'Retry';
        return;
    }
    button.textContent = 'Next joke';
    setup.textContent = `${data.setup}`;
    punchline.textContent = `${data.punchline}`;
});


