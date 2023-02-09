/////////////////////get html////////////////////
const colorbtn = document.querySelectorAll('.btn')

///////////////////get css////////////////////
const themcssvar = document.querySelector(':root')

////////set foreach for changing  5 color //////////////// 
colorbtn.forEach(colorbtn => {

    //////////set addEventListener to change color whit clicking//////////
    colorbtn.addEventListener('click' , (event) => {

        ///////////check to see is it working/////////
        console.log(event.target.dataset.color);

        
        let mainthemecolor = event.target.dataset.color
        themcssvar.style.setProperty('--theme-color', mainthemecolor)
    })
})
