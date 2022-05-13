import 'regenerator-runtime/runtime'
import {setupMenu, setupScrollButton, aboutAndMain } from "./scripts/setupfunctions"
import { loadingDom, renderBooks, booksSectionContainer } from "./scripts/view"
import { getLovedBooks } from "./scripts/book"
import  apiLink, { getBooksWithID } from "./scripts/promises"


// ui setup
let books
let lovedBooks = getLovedBooks()

aboutAndMain()
setupMenu()
setupScrollButton()

// live search form setup
const form = document.querySelector("form")
form.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase()
        renderBooks(books, lovedBooks, value)
})

let [ showLoading, hideLoading ] = loadingDom()

if (!lovedBooks.length) {
    booksSectionContainer.innerHTML = `<h2 style="margin: o auto; font-family:sans-serif; color:var(--second-color);width: 100%;text-align: center;">no  loved books  <a href="./index.html" style="color:var(--light-color); text-decoration:underline;"> browse here </a></h2>`
} else {
    showLoading()
    getBooksWithID(lovedBooks).then((res) => {
        const data = res
        books = data.results
        hideLoading()
        renderBooks(books)
    })
}


window.addEventListener("storage", (e) => {
    let sudoLoved = getLovedBooks()
    if (sudoLoved !== lovedBooks) {
        if (!sudoLoved.length) {
            booksSectionContainer.innerHTML = `<h2 style="margin: o auto; font-family:sans-serif; color:var(--second-color);width: 100%;text-align: center;">no  loved books  <a href="./index.html" style="color:var(--light-color); text-decoration:underline;"> browse here </a></h2>`
        } else {
            showLoading()
            lovedBooks = sudoLoved
            getBooksWithID(lovedBooks).then(res => {
                books = res.results
                hideLoading()
                renderBooks(books)
        })
        }
    }
} )

