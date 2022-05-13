// toggle menue
const setupMenu = () => {
    const menuButton = document.querySelector(".toggle-menu")
    const menu = document.querySelector(".links")
    return document.addEventListener("click", e => {
        if (e.target !== menuButton) {
            menu.classList.remove("open-list")
        }
        if (e.target === menuButton) {
            menu.classList.toggle("open-list")
        }
    })
}

// Scoll to Top Button setup
const setupScrollButton = () => {
    const scrollButton = document.querySelector(".up")
    window.onscroll = function () {
        scrollButton.classList.toggle("show", this.scrollY >= 1000)
    }

    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
}


// topic search form setup
const topicSearchFormSetup = () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", e => {
        e.preventDefault()
        const topic = e.target.elements["search"].value
        location.assign(`/topic.html#${topic}`)
        if (location.pathname === "/topic.html") {
            location.reload()
        }
    })
}

// about & main
const aboutAndMain = () => {
    const mainSection = document.querySelector("#main")
    const footerSection = document.querySelector("#footer")

    document.querySelector("#tomain").addEventListener("click", () => {
        mainSection.scrollIntoView({behavior: "smooth", block: "start"})
    })
    document.querySelector("#tofooter").addEventListener("click", () => {
        footerSection.scrollIntoView({behavior: "smooth", block: "start"})
    })
}

export {setupMenu, setupScrollButton, topicSearchFormSetup, aboutAndMain }
