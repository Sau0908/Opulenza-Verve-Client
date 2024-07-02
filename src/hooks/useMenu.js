import { useEffect, useState } from "react"

const useMenu = () => {
    const [menuItem, setMenuItem] = useState([])
    const [loading, setLOading] = useState(true)
    useEffect(() => {
        fetch('https://restaurant-server-chi.vercel.app/menu')
        .then(res => res.json())
        .then(data => {
            setMenuItem(data)
            setLOading(false)
        })
    })

    return [menuItem, loading]
}

export default useMenu;