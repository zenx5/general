const size_by_country = Object.keys(ua).reduce( (acc, key) => {
    if( key ) {
        if( ua[key][10] == 66 ) console.log( ua[key][10], ua[key][3].at(6)?.length )
        const format = ua[key][3].at(6)
        if( format ) acc[ ua[key][10] ] = format.length
    }
    return acc
}, {} )


console.log( size_by_country )