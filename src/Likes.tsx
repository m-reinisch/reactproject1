import {useEffect, useState} from "react";

export default function Likes() {
    const [count, setCount]= useState<number>(0);
    useEffect( () => {
        console.log(count)
    }, [count] )
    function changeCounter(like: boolean){
        if (like === true){
            setCount( count + 1 )
        } else {
            if (count > 0){
                setCount( count - 1 )
            }
        }
    }

    return(
        <>
            <p>Likes: {count}</p>
            <button type="button" onClick={
                ()=> changeCounter(true)}>👍</button>
            <button type="button" onClick={
                ()=> changeCounter(false)}>👎</button>
        </>
    )
}