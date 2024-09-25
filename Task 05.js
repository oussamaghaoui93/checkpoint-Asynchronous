async function concurrentRequests() {
    const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve("Data from API 1"), 2000));
    const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve("Data from API 2"), 3000));

    try {
        const results = await Promise.all([fetchData1(), fetchData2()]);
        console.log("Combined results:", results);
    } catch (error) {
        console.error("Error in concurrent requests:", error.message);
    }
}


concurrentRequests();
