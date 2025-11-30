// fetch API

// GET
async function getItems(url) {
  let message = ""
  try {
    const response = await fetch(url)
    if (response.status !== 200) {
      switch (response.status) {
        case 401:
          message = "401 - UnAuthorized"
          break
        case 404:
          message = "404 - Item not found"
          break
        default:
          message = "There is a problem, Please try again"
      }
      throw new Error(message)
    }
    const items = await response.json() //json() - convert json to JavaScript Object
    return items
  } catch (e) {
    // console.log(e)
    throw new Error(message || e.message)
  }
}

// ADD
async function addItem(url, item) {
  try {
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })

    if (!res.ok) {
      throw new Error(`Fail to add item: ${response.status} - ${response.statusText}`)
    }

    const addedItem = await response.json()
    console.log(`Updated:`, item)
    return addedItem
  } catch (e) {
    throw new Error(e.message)
  }
}

// PATCH
async function editItem(url, item) {
  try {
    const response = await fetch(`${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
    if (!response.ok) {
      throw new Error(`Fail to add item: ${response.status} - ${response.statusText}`)
    }
    const editedItem = await response.json()
    return editedItem
  } catch (e) {
    throw new Error(e.message)
  }
}
 
// DELETE
async function deleteItem (url, id) {
    try {
        const response = await fetch()
        await fetch(`${url}/${id}` , {
            method: "DELETE",
        })
        if (!response.ok) 
            throw new Error(`Fail to delete item: ${response.status} - ${response.statusText}`)
        try {
            const deletedItem = await response.json()
            return deletedItem
        } catch (e) {
            throw new Error(e.message)
        }
    } catch (e) {
        throw new Error(e.message)
    }
}

export { getItems, addItem, deleteItem, editItem }