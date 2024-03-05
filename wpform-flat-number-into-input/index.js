(function(){
    setTimeout(function(){
        const flag = document.querySelector(".iti__selected-flag")
        const input = document.querySelector('.iti__flag-container').nextElementSibling
        input.value = flag?.title.split('+')[1]
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === "title") {
                    input.value = flag?.title.split('+')[1]
                }
            })
        })
        observer.observe(flag, { attributes: true })
    },5000)
})()
