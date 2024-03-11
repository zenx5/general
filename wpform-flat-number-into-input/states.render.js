(function(){
    const selects = document.querySelectorAll('.select-states');
    for( const select of selects )  {
        select.addEventListener('change', function(event){
            event.target.title = event.target.value
        })
        for(const state of states){
            const option = document.createElement('option')
            option.value = state
            option.textContent = state
            select.append(option)
        }
        select.title = states[0]
    }
})()