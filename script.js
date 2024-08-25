const apiUrl = 'https://your-deployment-url.vercel.app/bfhl'; // Replace with your Vercel URL

document.getElementById('post-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const postData = document.getElementById('post-data').value;
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: postData,
        });
        const data = await response.json();
        document.getElementById('post-response').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('post-response').textContent = `Error: ${error.message}`;
    }
});

document.getElementById('get-button').addEventListener('click', async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('get-response').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('get-response').textContent = `Error: ${error.message}`;
    }
});
