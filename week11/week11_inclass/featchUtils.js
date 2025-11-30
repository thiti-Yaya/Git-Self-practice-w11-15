async function getItems() {
    try {
        const res = await fetch(url)
        const items = await res.json()
        console.log(data)
    } catch (error) {
        console.log('Error:', error)
    }
}