const { useState, useEffect } = require("react")


const MateriUseEffect = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <>
            <h1>Content</h1>
            <p>Nilai: {count}</p>
            <button onClick={handleClick}>Tambah</button>
        </>
    )
}

export default MateriUseEffect