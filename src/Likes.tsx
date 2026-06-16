import {useState} from "react";

export default function Likes() {
    const [count, setCount]= useState<number>(0);
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
                ()=> {
                    changeCounter(true)
                    console.log(count)
                }
            }>👍</button>
            <button type="button" onClick={
                ()=> changeCounter(false)}>👎</button>
        </>
    )
}