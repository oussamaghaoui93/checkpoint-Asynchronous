async function awaitCallWithErrorHandling() {
    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("API call failed")), 2000);
    });

    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}


awaitCallWithErrorHandling();
