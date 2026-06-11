import {useState} from "react";

export default function Likes() {
    const [count, setCount]= useState<number>(0);

    return(
        <>
            <p>Likes: {count}</p>
            <button type="button" onClick={
                ()=> setCount( count + 1 )}>👍</button>
            <button type="button" onClick={
                ()=> setCount( count - 1 )}>👎</button>
        </>
    )
}