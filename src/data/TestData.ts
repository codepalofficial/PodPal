import type PodcastCardData from "../lib/types/PodcastCardData"

const getPodcasts = () => {

    let podcasts: PodcastCardData[] = [
        {
        name: "Bloomberg Technology",
            podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
            podcastHashtags: ["Finance", "Business" , "Technology"],
            podcastThumbnailUrl: "images/bloombergTechnology.png"
        } as PodcastCardData,
        {
        name: "Joe Rogan Experience",
            podcastSummary: "The official podcast of comedian Joe Rogan. Follow The Joe Rogan Clips show page for some fo the best moments from the episodes. ",
            podcastHashtags: ["Society", "Culture"],
            podcastThumbnailUrl: "images/joeroganExperience.jpg"
        } as PodcastCardData,
        {
        name: "Breaking Bread",
            podcastSummary: "Girls with No Job and Jacke O. are here to highlight their favorite moments of the week and discuss the stories they missed - Listeners and fellow Toasters will also have the opportunity to ask them anything and even give their own hot takes on the latest topics.",
            podcastHashtags: ["Finance", "Business" , "Technology"],
            podcastThumbnailUrl: "images/breakingBread.webp"
        } as PodcastCardData,
        {
        name: "Conspiracy Theories",
            podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
            podcastHashtags: ["Finance", "Business" , "Technology"],
            podcastThumbnailUrl: "images/conspiracyTheories.webp"
        } as PodcastCardData,
        {
        name: "Are You Garbage",
            podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
            podcastHashtags: ["Finance", "Business" , "Technology"],
            podcastThumbnailUrl: "images/areyouGarbage.webp"
        } as PodcastCardData,  {
        name: "Ologies",
            podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
            podcastHashtags: ["Finance", "Business" , "Technology"],
            podcastThumbnailUrl: "images/ologies.webp"
        } as PodcastCardData,
        {
        name: "Stuff You Should Know",
            podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
            podcastHashtags: ["Finance", "Business" , "Technology"],
            podcastThumbnailUrl: "images/stuffyoushouldKnow.jpeg"
        } as PodcastCardData,
        {
        name: "Planet Money",
            podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
            podcastHashtags: ["Finance", "Business" , "Technology"],
            podcastThumbnailUrl: "images/planetMoney.png"
        } as PodcastCardData,
    
        {
        name: "How to Save Planet",
            podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
            podcastHashtags: ["Finance", "Business" , "Technology"],
            podcastThumbnailUrl: "images/howtosaveaPlanet.webp"
        } as PodcastCardData,
    ]

  return podcasts
}

export default getPodcasts;