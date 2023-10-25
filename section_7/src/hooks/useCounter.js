import {useState, useEffect} from 'react'

function useCounter(initialCount) {

    const [count, setCount] = useState(initialCount)

    function incrementCount(){
        setCount(count + 1)
    }

    useEffect(() => {
        console.log(count)
    }, [count])

    return {
        count,
        incrementCount
    }

}

export default useCounter