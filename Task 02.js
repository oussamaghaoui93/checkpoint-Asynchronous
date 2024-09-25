async function awaitCall() {
    const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Data fetched"), 2000));
    const data = await fetchData(); // Wait for the promise to resolve
    console.log(data);
}

