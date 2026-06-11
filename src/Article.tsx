import Title from "./Title.tsx";
import Image from "./Image.tsx";
import LocationList from "./LocationList.tsx";
import LikeButton from "./LikeButton.tsx";
import DislikeButton from "./DislikeButton.tsx";

type ArticleProps= {
    titel: string,
    subtitel: string
    image: string,
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
            <LocationList />
            <p>Autor: {props.articleEntry.author}</p>
            <LikeButton />
            <DislikeButton />
        </article>
    )
}