document
    .querySelectorAll('.len')
    .forEach( item => {
        const filtered = []
        for( const className of item.classList) {
            if( /len-[0-9]{1,}/.exec(className) ) filtered.push(className)
        }
        if( filtered.length>0 ) {
            item.querySelector('input') ? item.querySelector('input').maxLength = parseInt( filtered[0].split('-')[1] ) : null
            item.querySelector('textarea') ? item.querySelector('textarea').maxLength = parseInt( filtered[0].split('-')[1] ) : null
        }
    })

document
    .querySelectorAll('.len')
    .forEach( item => {
        const filtered = []
        for( const className of item.classList) {
            if( /lenmin-[0-9]{1,}/.exec(className) ) filtered.push(className)
        }
        if( filtered.length>0 ) {
            item.querySelector('input') ? item.querySelector('input').minLength = parseInt( filtered[0].split('-')[1] ) : null
            item.querySelector('textarea') ? item.querySelector('textarea').minLength = parseInt( filtered[0].split('-')[1] ) : null
        }
    })