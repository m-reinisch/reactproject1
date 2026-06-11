type ImageProps= {
    src: string
}

export default function Image(props: Readonly<ImageProps>) {

    return(
        <img src={props.src} height="400" width="600" alt="Apfelweinglas und Bembel" />
    )
}