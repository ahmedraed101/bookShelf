import 'regenerator-runtime/runtime'
import {setupMenu, setupScrollButton, aboutAndMain } from "./scripts/setupfunctions"
import { loadingDom } from "./scripts/view"
import { getLovedBooks, loveBook, unLoveBook } from "./scripts/book"
import  apiLink, { getBooksWithID } from "./scripts/promises"


setupMenu()
setupScrollButton()
aboutAndMain()
const bookID = location.hash.slice(1)
let lovedBooks = getLovedBooks()
let isLoved = lovedBooks.includes(bookID)

let [ showLoading, hideLoading ] = loadingDom()


const bookSection = document.querySelector(".book")
const titleEl = document.querySelector("#book-title")
const imageSection = document.querySelector(".book-image")
const authorName = document.querySelector("#author-name")
const birthDateEl = document.querySelector("#birth-year")
const deathDateEl = document.querySelector("#death-year")
const languageEl = document.querySelector(".language")
const viewEl = document.querySelector(".view h4 a")
const kindleEl = document.querySelector("#kindle")
const epubEl = document.querySelector("#epub")
const subjectsSection = document.querySelector(".subjects")
const bookshelvesSection = document.querySelector(".bookshelves")
const heart = document.querySelector(".heart")
heart.classList.toggle("loved", isLoved)
heart.addEventListener("click", () => {
    const isLoved = getLovedBooks().includes(bookID)
    heart.classList.toggle("loved")
    if (isLoved) {
        unLoveBook(bookID, lovedBooks)
    } else {
        loveBook(bookID, lovedBooks)
    }
})


const makeSubDom = (sub) => {
    const link = document.createElement("a")
    link.classList.add("sub")
    link.setAttribute("href", `/topic.html#${sub}`)
    link.innerText = sub
    return link
}


showLoading()
getBooksWithID(bookID).then((res) => {
    const book = res.results[0]
    hideLoading()
    bookSection.classList.remove("hide")
    imageSection.innerHTML =  `<img src=${book.formats["image/jpeg"]} alt=${book.title}>`
    titleEl.innerText = book.title
    authorName.innerText = book.authors[0].name
    birthDateEl.innerText = book.authors[0].birth_year
    deathDateEl.innerText = book.authors[0].death_year
    languageEl.innerText = book.languages[0].toUpperCase()
    viewEl.setAttribute("href", book.formats["text/html"])
    epubEl.setAttribute("href", book.formats["application/epub+zip"])
    kindleEl.setAttribute("href", book.formats["application/x-mobipocket-ebook"])
    for (let sub of book.subjects) {
        subjectsSection.appendChild(makeSubDom(sub))
    }
    if (book.bookshelves) {
        for (let bookshelve of book.bookshelves) {
            bookshelvesSection.appendChild(makeSubDom(bookshelve))
        }
    }
})


window.addEventListener("storage", (e) => {
    if (e.key === "lovedBooks") {
        lovedBooks = JSON.parse(e.newValue)
        const isLoved = lovedBooks.includes(bookID)
        heart.classList.toggle("loved", isLoved)
    }
})