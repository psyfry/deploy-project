export const getMostWatchedArticle = (articles, property) => {
    const mostWatches = [ ...articles ].sort((a, b) => b[ property ] - a[ property ])
    return mostWatches[ 0 ]
}
