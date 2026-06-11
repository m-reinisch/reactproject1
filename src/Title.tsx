type TitleProps= {
    titel: string,
    subtitel: string
}

export default function Title(props: Readonly<TitleProps>) {

    return(
        <>
            <h1>{props.titel}</h1>
            <h2>{props.subtitel}</h2>
        </>
    )
}