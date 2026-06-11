import Title from "./Title.tsx";
import Image from "./Image.tsx";
import LocationList from "./LocationList.tsx";
import LikeButton from "./LikeButton.tsx";
import DislikeButton from "./DislikeButton.tsx";

type ArticleProps= {
    titel: string,
    subtitel: string
}

export default function Article(props: Readonly<ArticleProps>) {


    return(
        <article>
            <Title titleEntry={props} />
            <Image />
            <LocationList />
            <LikeButton />
            <DislikeButton />
        </article>
    )
}