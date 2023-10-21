import {createContext, useState, useEffect} from 'react'

const NavigationContext = createContext()

function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    function navigate(to){
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    }

    useEffect(() => {
        function handler(){
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', handler)

        return () => {
            window.removeEventListener('popstate', handler)
        }

    }, [])

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext
export {NavigationProvider}