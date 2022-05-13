const saveLovedBooks = (lovedBooks) => {
    localStorage.setItem("lovedBooks", JSON.stringify(lovedBooks))
}

const loveBook = (bookId, lovedBooks) => {
    lovedBooks.unshift(bookId)
    saveLovedBooks(lovedBooks)
}

const unLoveBook = (bookId, lovedBooks) => {
    const bookIndex = lovedBooks.indexOf(bookId)
    lovedBooks.splice(bookIndex, 1)
    saveLovedBooks(lovedBooks)
}

const getLovedBooks =  () => {
    const data = localStorage.getItem("lovedBooks")
    if (data) {
        return JSON.parse(data)
    }
    return []
}


export { saveLovedBooks, loveBook, unLoveBook, getLovedBooks }