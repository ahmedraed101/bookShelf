const apiLink = "https://gutendex.com/books/"
const getBooks = async (apilink, topic) => {
    const query = topic ? `${apilink}?topic=${topic}`:  apilink
    const response = await fetch(query)
    if (response.status === 200) {
        // return await response.json()
        return await response.json()
    } else {
        throw new Error(`Error code ${response.status}`)
    }
}

const getBooksWithID = async (ids) => {
    let finalIds
    if (typeof ids === "string") {
        finalIds = ids
    } else {
        finalIds = ids.join()
    }
    let response = await fetch(`${apiLink}?ids=${finalIds}`)
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error(`Error code: ${response.status}`)
    }
}


export { getBooks, getBooksWithID, apiLink as default }