type TitleProps= {
    titel: string,
    subtitel: string
}

type TitleEntry= {
    titleEntry: TitleProps
}

export default function Title(props: Readonly<TitleEntry>) {

    return(
        <>
            <h1>{props.titleEntry.titel}</h1>
            <h2>{props.titleEntry.subtitel}</h2>
        </>
    )
}