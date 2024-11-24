export type Episode = {
    rank: number, // the numeric rank of an episode, unique for each episode
    title: string, // the title of the episode
    series: number // the series number of the episode
    era: string, // the era of the episode, either Classic, Modern or Recent
    broadcast_date: string, // the date the episode was first broadcast, in the format YYYY-MM-DD
    director: string, // the name of the director of the episode
    writer: string, // the name of the writer of the episode
    plot: string, // a brief description of the episode
    doctor: {
        actor: string, // the name of the actor who played the Doctor in the episode
        incarnation: string // the incarnation of the Doctor in the episode
    },
    companion: { // information about the companion in the episode (optional)
        actor: string, // the name of the actor who played the companion in the episode
        character: string // the name of the companion character in the episode
    },
    cast:  // an array of objects, each containing information about a cast member
    {
            actor: string, // the name of the actor
            character: string // the name of the character
    }[]
}