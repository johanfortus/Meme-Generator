let form = document.querySelector('form')
let input1 = document.querySelector('.imgURLInp')
let input2 = document.querySelector('.toptext')
let input3 = document.querySelector('.bottomtext')
let MemeSpace = document.querySelector('.memespace')
let body = document.querySelector('body')
let button = document.querySelector('button')

form.addEventListener('submit',function(e){
    e.preventDefault();
    let div = document.createElement('div')
    let img = document.createElement('img')
    let link = input1.value


    let topText = document.createElement('span')
    let bottomText = document.createElement('span')

    topText.append(`${input2.value}`)
    bottomText.append(`${input3.value}`)

    topText.classList.add('memetext')
    bottomText.classList.add('memetext2')

    div.classList.add('display')



    img.setAttribute('src',`${link}`)
    img.setAttribute('width','40%')
    img.setAttribute('height','40%')
    img.classList.add('meme')


    MemeSpace.append(div);
    div.append(img);
    div.append(topText);
    div.append(bottomText)
})

