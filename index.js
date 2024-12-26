async function fetchData() {
    try {
        const responce = await fetch('https://cataas.com/cat')
        const data = responce.url;
        console.log(data)
        document.querySelector('div').innerHTML =`<img src="${data}"/>`
    }
    catch(error){
        console.error("error", error)
    }
    
}
fetchData()

function next() {
    fetchData()
}