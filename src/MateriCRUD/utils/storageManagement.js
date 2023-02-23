const storageName = "ReactJS"

const setItem = (value) => {
    const valueToString = JSON.stringify(value)
    localStorage.setItem(storageName, valueToString)
}

const getItem = () => {
    const data = localStorage.getItem(storageName)

    if(data) {
        return JSON.parse(data)
    }
    return null
}

const removeItem = () => {
    localStorage.removeItem(storageName)
}

const storageManager = {
    get: getItem,
    set: setItem,
    delete: removeItem
}

export default storageManager