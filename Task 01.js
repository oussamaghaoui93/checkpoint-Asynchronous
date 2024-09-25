async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
    }
}

iterateWithAsyncAwait(['a', 'b', 'c', 'd']);