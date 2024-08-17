const url = 'https://api.example.com/data';
fetchUrl(url)
    .then(data => {
        console.log('Fetched data:', data);
        // Use the fetched data as needed
    })
    .catch(error => {
        console.error('Error fetching URL:', error);
        // Handle errors if necessary
    });
