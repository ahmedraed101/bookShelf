import { getLovedBooks, loveBook, unLoveBook } from "./book"
import { getBooks } from "./promises"
const makeBookDom = (book) => {
    const bookPageLink = `/showbook.html#${book.id}`

    const heartDom = createEl("i", ["fas", "fa-heart", "heart"])
    heartDom.dataset.id = book.id

    // image section
    const imageDom = document.createElement("img")
    imageDom.setAttribute("src", book.formats["image/jpeg"])
    imageDom.setAttribute("alt", `${book.title} - cover`)
    const imageLink = createEl("a", [], [imageDom])
    imageLink.setAttribute("href", bookPageLink)
    const imageSectionDom = createEl("div", ["image"], [imageLink])

    // info section
    const titleDom = createEl("h3", [], [], book.title)
    const titleLink = createEl("a", [], [titleDom])
    titleLink.setAttribute("href", bookPageLink)
    let name
    try {
        name  = book.authors[0].name
    } catch (err) {
        name = "UNknowen"
    }
    const authorDom = createEl("h4", [], [], `by - ${name} -`)
    const languageDom = createEl("p", [], [], `Language: ${book.languages[0].toUpperCase()}`)
    const infoDom = createEl("div", ["info"], [titleLink, authorDom, languageDom])

    return createEl("div", ["book"], [heartDom, imageSectionDom, infoDom])
}

const createEl = (type, classes, children=[], text="") => {
    const el = document.createElement(type)
    el.innerText = text
    el.classList.add(...classes)
    for (let i = 0; i < children.length; i++) {
        el.appendChild(children[i])
    }
    return el
}

const booksSectionContainer = document.querySelector("#books .container")
const renderBooks = (books, lovedBooks, searchText="") => {
    if (!books.length) {
        booksSectionContainer.innerHTML = `<h2 style="margin: o auto; font-family:sans-serif; color:var(--second-color);width: 100%;text-align: center;">no  results found  <a href="./index.html" style="color:var(--light-color); text-decoration:underline;"> browse here </a></h2>`
        return
    }
    const filterdBooks = books.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()))
    booksSectionContainer.innerHTML = ""
    for (let book of filterdBooks) {
        booksSectionContainer.appendChild(makeBookDom(book))
    }
    setLoveButtons()
}

const setLoveButtons = () => {
    let lovedBooks = getLovedBooks()
    document.querySelectorAll(".heart").forEach(button => {
        const isLoved = lovedBooks.includes(button.dataset.id)
        button.classList.toggle("loved", isLoved)
        button.addEventListener("click", (e) => {
            const isLoved = lovedBooks.includes(e.target.dataset.id)
            const bookId = e.target.dataset.id
            if (!isLoved) {
                loveBook(bookId, lovedBooks)
                e.target.classList.add("loved")
            } else {
                unLoveBook(bookId, lovedBooks)
                e.target.classList.remove("loved")
            }
            if (location.pathname === "/likes.html") {
                window.dispatchEvent( new Event("storage") )
            }
        })
    })
}



const loadingDom = () => {
    const loadDom = document.querySelector(".loading")
    return [() => {loadDom.classList.remove("hide")}, ()=> {loadDom.classList.add("hide")}]
}



export { loadingDom, renderBooks, booksSectionContainer }