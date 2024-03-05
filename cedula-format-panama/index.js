(function(){
    // Config
    const typesDocument = [
        { label: '#-',      value: '',     length:10, min:0  },
        { label: 'PE-',     value: 'PE',   length:11, min:2  },
        { label: 'E-',      value: 'E',    length:10, min:1  },
        { label: 'N-',      value: 'N',    length:10, min:1  },
        { label: '1AV-',    value: '1AV',  length:12, min:3  },
        { label: '1PI-',    value: '1PI',  length:12, min:3  },
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
        return mask.replaceAll('#','').replaceAll('--','-').replaceAll('-', content.length>0 ? '-' : '')
    }
    function validateField(value, min){
        const errorElement = document.querySelector('#error-document')
        if( value.length === min ) {
            errorElement.innerText = 'Este campo es obligatorio'
            return false
        }
        errorElement.innerText = ''
    }
    function removeDefault() {
        const optionDefault = document.querySelector('option[value=""]')
        if( optionDefault ) optionDefault.remove()
    }
    // Events
    selectDocument.addEventListener('focus', removeDefault)
    selectDocument.addEventListener('change', function(event){
        const type = typesDocument.find( type => type.value === event.target.value )
        inputDocument.maxLength = parseInt( type.length ) + 2
        inputDocument.value = applyMask( type.value, createMask(type.length) )
        inputDocument.dataset.realValue = type.value
        setInput(type.value, type.length)
    })
    inputDocument.addEventListener('input', function(event){
        const type = typesDocument.find( type => type.value === selectDocument.value )
        validateField( event.target.value.replaceAll('#','').replaceAll('-',''), type.min )
        if( !event.data ) {
            if( event.target.value.length <= type.value.length ) {
                inputDocument.dataset.realValue = type.value
                inputDocument.value = applyMask( type.value, createMask( type.length ) )
            }
            return
        }
        if( !/[0-9]/.exec(event.data) ) event.target.value = event.target.value.replace(event.data, '')

        inputDocument.dataset.realValue = event.target.value.replaceAll('#','').replaceAll('-','')
        inputDocument.value = applyMask( inputDocument.dataset.realValue, createMask( inputDocument.maxLength - 2 ) )
    })
})()