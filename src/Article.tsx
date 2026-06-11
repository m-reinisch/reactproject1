import Title from "./Title.tsx";
import Image from "./Image.tsx";
import Likes from "./Likes.tsx";
import type {LocationsProps} from "./types.tsx";

type ArticleProps= {
    titel: string,
    subtitel: string
    image: string,
    locations: LocationsProps[],
    author: string
}

type ArticleEntry= {
    articleEntry: ArticleProps
}

export default function Article(props: Readonly<ArticleEntry>) {

    return(
        <article>
            <Title titel={props.articleEntry.titel}
                   subtitel={props.articleEntry.subtitel}
            />
            <Image src={props.articleEntry.image} />
            <ul>
                {props.articleEntry.locations.map(
                    l =>
                        <li>
                            <a className="Anker" href={l.href} target="_blank">
                                {l.location}
                            </a>
                        </li>
                )}
            </ul>
            <p>Autor: {props.articleEntry.author}</p>
            <Likes />
        </article>
    )
}