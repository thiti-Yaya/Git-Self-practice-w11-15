//CRUD Quote
import  { getItem } from "./myLib/fetchUtils.js"
 
async function loadQuotes() {
  try {
   const quotes = await getItem(`${import.meta.env.VITE_APP_URL}/quotes`)
  } catch (e) {
    alert(e)
  }
}
export { loadQuotes }