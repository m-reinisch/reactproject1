export type BlogPostProps= {
    titel: string,
    subtitel: string
    image: string,
    locations: LocationsProps[],
    author: string
}

export type LocationsProps= {
    href: string,
    location: string
}