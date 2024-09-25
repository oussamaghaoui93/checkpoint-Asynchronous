async function parallelCalls(urls) {
    const fetchData = url => new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), 1000));

    try {
        const results = await Promise.all(urls.map(url => fetchData(url)));
        console.log("Responses from all URLs:", results);
    } catch (error) {
        console.error("Error fetching data from URLs:", error.message);
    }
}

parallelCalls(['https://api1.com', 'https://api2.com', 'https://api3.com']);
