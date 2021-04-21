imagelist = document.querySelectorAll('img')
window.addEventListener('load', addimages(imagelist))


function addimages(list) {
    for (let i = 0 ; i < list.length; i++) {
        imagelist[i].src = `Images/Album${i+1}.png`
    }
}



const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];