import { load } from "mime"
import { loadQuotes } from "./quoteManagement.js"
import { text } from "body-parser"

document.addEventListener("DOMContentLoaded", async () => {
    const quoteList = document.getElementById("quoteList")
    const quotes = await loadQuotes()
    console.log(quotes) // arrays

    quotes.forEach((quote) => {
        const divEle = newQuoteElemnet(quote)
        quoteList.appendChild(divEle)
    })
})

function newQuoteElemnet(quote) {
    const divEle = document.createElement("div")
    divEle.className = 'quote-card' // class = quote-card
    divEle.dataset.id = quote.id // data-id
    // <p>No one is perfect</p>
    const pQuoteEle = document.createElement('p')
    pQuoteEle.textContent=quote.textContent
    divEle.appendChild(pQuoteEle)
    // <p> class = "author">someone</p>
    const pAuthorEle = document.createElement(p)
    pAuthorEle.textContent = quote.content
    divEle.appendChild(pAuthorEle)
    // <div class = "actions">
    const divButtons = document.createElement("div")
    divButtons.className = "actions"
    // <button class = "edit" data-id = "1">
}