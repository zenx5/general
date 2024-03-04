(function(){
    // Config
    const typesDocument = [
        { label: '#-',      value: '',    length:10  },
        { label: 'PE-',     value: 'PE',   length:11  },
        { label: 'E-',      value: 'E',    length:10  },
        { label: 'N-',      value: 'N',    length:10  },
        { label: '1AV-',    value: '1AV',  length:12  },
        { label: '1PI-',    value: '1PI',  length:12  },
    ]
    const selectDocument = document.querySelector('#types-document')
    const inputDocument = document.querySelector('#input-document')
    for( const item of typesDocument ) {
        const option = document.createElement('option')
        option.innerText = item.label
        option.value = item.value
        option.dataset.length = item.length
        selectDocument.append(option)
    }
    setInput(typesDocument[0].value, typesDocument[0].length)

    // Methods
    function setInput (value, length){
        inputDocument.maxLength = parseInt( length ) + 2
        inputDocument.value = applyMask( value, createMask(length) )
        inputDocument.dataset.realValue = value
    }
    function createMask(length) {
        return Array(length)
            .fill('#')
            .toSpliced(-5,0,'-')
            .toSpliced(-10,0,'-')
            .join('')
    }
    function applyMask(content, mask) {
        const values = content.toString().split('')
        while( values.length>0 ) {
            mask = mask.indexOf('#')!==-1 ? mask.replace('#',values.shift()) : mask+values.shift()
        }
        return mask.replaceAll('#','').replaceAll('--','-')
    }
    // Events
    selectDocument.addEventListener('change', function(event){
        const type = typesDocument.find( type => type.value === event.target.value )
        inputDocument.maxLength = parseInt( type.length ) + 2
        inputDocument.value = applyMask( type.value, createMask(type.length) )
        inputDocument.dataset.realValue = type.value
        setInput(type.value, type.length)
    })
    inputDocument.addEventListener('input', function(event){
        if( !event.data ) return
        if( !/[0-9]/.exec(event.data) ) event.target.value = event.target.value.replace(event.data, '')

        inputDocument.dataset.realValue = event.target.value.replaceAll('#','').replaceAll('-','')
        inputDocument.value = applyMask( inputDocument.dataset.realValue, createMask( inputDocument.maxLength - 2 ) )
    })
})()