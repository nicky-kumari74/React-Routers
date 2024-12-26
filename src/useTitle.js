import {useEffect} from 'react'

const useTitle=(props)=>{
    useEffect(()=>{
        document.title=props+" clicked"
    })
}
export default useTitle