import 'regenerator-runtime/runtime'
import {setupMenu, setupScrollButton, topicSearchFormSetup } from "./scripts/setupfunctions"
import { loadingDom, renderBooks } from "./scripts/view"
import { getLovedBooks } from "./scripts/book"
import  apiLink, { getBooks } from "./scripts/promises"


// ui setup
let data, books
let lovedBooks = getLovedBooks()

const booksSection = document.querySelector("#books")
const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")

const setNavButtonsUI = () => {
    nextButton.classList.toggle("active", data.next)
    prevButton.classList.toggle("active", data.previous)
}

setupMenu()
setupScrollButton()
topicSearchFormSetup()

let [ showLoading, hideLoading ] = loadingDom()

showLoading()
getBooks(apiLink).then((res) => {
    data = res
    books = data.results
    hideLoading()
    renderBooks(books, lovedBooks)
    setNavButtonsUI()
    prevButton.addEventListener("click", () => {
        if (data.previous) {
            booksSection.scrollIntoView({ behavior: 'smooth',block: "start" })
            showLoading()
            getBooks(data.previous).then(response => {
                hideLoading()
                data = response
                books = data.results
                renderBooks(books, lovedBooks)
                setNavButtonsUI()
            })
        }
    })
    nextButton.addEventListener("click", () => {
        if (data.next) {
            booksSection.scrollIntoView({ behavior: 'smooth',block: "start" })
            showLoading()
            getBooks(data.next).then(response => {
                hideLoading()
                data = response
                books = data.results
                renderBooks(books, lovedBooks)
                setNavButtonsUI()
            })
        }
    })
})

window.addEventListener("storage", (e) => {
    if (e.key === "lovedBooks") {
        lovedBooks = JSON.parse(e.newValue)
        renderBooks(books, lovedBooks)
    }
})