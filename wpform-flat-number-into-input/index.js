(function(){
    const code_x_length = {
        "1": 10,
        "7": 10,
        "20": 10,
        "27": 9,
        "30": 10,
        "31": 9,
        "32": 9,
        "33": 9,
        "34": 9,
        "36": 9,
        "39": 10,
        "40": 9,
        "41": 9,
        "43": 9,
        "44": 10,
        "45": 8,
        "46": 9,
        "47": 8,
        "48": 9,
        "49": 11,
        "51": 9,
        "52": 11,
        "53": 8,
        "54": 11,
        "55": 11,
        "56": 9,
        "57": 10,
        "58": 10,
        "60": 9,
        "61": 9,
        "62": 9,
        "63": 10,
        "64": 9,
        "65": 8,
        "66": 9,
        "81": 10,
        "82": 10,
        "84": 9,
        "86": 11,
        "90": 10,
        "91": 10,
        "92": 10,
        "93": 9,
        "94": 9,
        "95": 8,
        "98": 10,
        "211": 9,
        "212": 9,
        "213": 9,
        "216": 8,
        "218": 9,
        "220": 7,
        "221": 9,
        "222": 8,
        "223": 8,
        "224": 9,
        "225": 10,
        "226": 8,
        "227": 8,
        "228": 8,
        "229": 8,
        "230": 8,
        "231": 9,
        "232": 8,
        "233": 9,
        "234": 10,
        "235": 8,
        "236": 8,
        "237": 9,
        "238": 7,
        "239": 7,
        "240": 9,
        "241": 8,
        "242": 9,
        "243": 9,
        "244": 9,
        "245": 9,
        "246": 7,
        "247": 5,
        "248": 7,
        "249": 9,
        "250": 9,
        "251": 9,
        "252": 8,
        "253": 8,
        "254": 9,
        "255": 9,
        "256": 9,
        "257": 8,
        "258": 9,
        "260": 9,
        "261": 9,
        "262": 9,
        "263": 9,
        "264": 9,
        "265": 9,
        "266": 8,
        "267": 8,
        "268": 8,
        "269": 7,
        "290": 5,
        "291": 7,
        "297": 7,
        "298": 6,
        "299": 6,
        "350": 8,
        "351": 9,
        "352": 9,
        "353": 9,
        "354": 7,
        "355": 9,
        "356": 8,
        "357": 8,
        "358": 9,
        "359": 8,
        "370": 8,
        "371": 8,
        "372": 8,
        "373": 8,
        "374": 8,
        "375": 9,
        "376": 6,
        "377": 9,
        "378": 8,
        "380": 9,
        "381": 9,
        "382": 8,
        "383": 8,
        "385": 9,
        "386": 8,
        "387": 8,
        "389": 8,
        "420": 9,
        "421": 9,
        "423": 9,
        "500": 5,
        "501": 7,
        "502": 8,
        "503": 8,
        "504": 8,
        "505": 8,
        "506": 8,
        "507": 8,
        "508": 6,
        "509": 8,
        "590": 9,
        "591": 8,
        "592": 7,
        "593": 9,
        "594": 9,
        "595": 9,
        "596": 9,
        "597": 7,
        "598": 8,
        "599": 8,
        "670": 8,
        "672": 6,
        "673": 7,
        "674": 7,
        "675": 8,
        "676": 7,
        "677": 7,
        "678": 7,
        "679": 7,
        "680": 7,
        "681": 6,
        "682": 5,
        "683": 7,
        "685": 7,
        "686": 8,
        "687": 6,
        "688": 6,
        "689": 8,
        "690": 4,
        "691": 7,
        "692": 7,
        "850": 10,
        "852": 8,
        "853": 8,
        "855": 8,
        "856": 10,
        "870": 9,
        "880": 10,
        "881": 9,
        "882": 7,
        "886": 9,
        "960": 7,
        "961": 8,
        "962": 9,
        "963": 9,
        "964": 10,
        "965": 8,
        "966": 9,
        "967": 9,
        "968": 8,
        "970": 9,
        "971": 9,
        "972": 9,
        "973": 8,
        "974": 8,
        "975": 8,
        "976": 8,
        "977": 10,
        "992": 9,
        "993": 8,
        "994": 9,
        "995": 9,
        "996": 9,
        "998": 9
    }

    function setInputs(inputs, code,  event = false ){
        for(const input of inputs ) {
            input.value = code
            input.dataset.code = code
            const length = code_x_length[ input.value ] + input.value.length
            input.setAttribute('maxLength', length)
            input.setAttribute('minLength', length)

            if( event ) {
                input.addEventListener('input', function(event){
                    if( !event.data ) {
                        event.target.value.indexOf(event.target.dataset.code) !== 0 ? event.target.value = event.target.dataset.code : null
                    }
                    if( event.target.value.length!==event.target.maxLength ) {
                        console.log('show error message')
                        event.target.classList.add('wpforms-error')
                        document.querySelector('#custom-wpforms-error')?.remove()
                        const em = document.createElement('em')
                        em.setAttribute('id', 'custom-wpforms-error')
                        em.classList.add('wpforms-error')
                        em.setAttribute('role', 'alert')
                        em.setAttribute('for', '')
                        em.innerHTML = 'Longitud requerida es de '+event.target.maxLength+' caracteres'
                        event.target.parentElement.after(em)
                    } else {
                        console.log('hide error message')
                        event.target.classList.remove('wpforms-error')
                        const error = event.target.parentElement.nextElementSibling
                        console.log(error)
                        error.remove()
                        //document.querySelector('#custom-wpforms-error').remove()
                    }
                    event.target.value = event.target.value.replace(/[^0-9]/g, '')
                })
            }
        }
    }

    setTimeout(function(){
        const flags = document.querySelectorAll(".iti__selected-flag")
        document.querySelectorAll('.iti__flag-container').forEach( element => {
            setInputs([ element.nextElementSibling ], '1', true)
        })
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === "title" ) {
                    const element = mutation.target.parentElement.nextElementSibling
                    const code = mutation.target.title.split('+')[1]
                    if( element.dataset.code==code ) return
                    setInputs([element], code)
                }
            })
        })
        for(const flag of flags) observer.observe(flag, { attributes: true })
    },2000)
})()
