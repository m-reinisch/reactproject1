import Title from "./Title.tsx";
import Image from "./Image.tsx";
import LocationList from "./LocationList.tsx";
import LikeButton from "./LikeButton.tsx";
import DislikeButton from "./DislikeButton.tsx";

export default function Article() {

    return(
        <article>
            <Title />
            <Image />
            <LocationList />
            <LikeButton />
            <DislikeButton />
        </article>
    )
}