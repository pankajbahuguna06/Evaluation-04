
let container = document.getElementById("container")

let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`


let getdata = async (url)=>{
   try {
    let res = await fetch(`${url}`)
    let data = await res.json()
    console.log(data.data )
    getDisplay(data.data)
   } catch (error) {
    console.log(error)
   }
}

getdata(url)

function getDisplay(data){

   container.innerHTML=""
    data.forEach((ele) => {
        
   
    let box = document.createElement("div")
   
    let image = document.createElement("img")
    image.src = ele.image

    let title = document.createElement("p")
    title.textContent = ele.title

    let brand = document.createElement("p")
    brand.textContent = ele.brand

    let category = document.createElement("p")
    category.textContent = ele.category
    

    let  price = document.createElement("h2")
    price.textContent = ele.price


    let btn = document.createElement("button")
    btn.addEventListener("click", ()=>{
      
    })

    box.append(image, title, brand, category, price, btn)
    container.append(box)

});
}

document.getElementById("sortData").addEventListener("change", ()=>{
   sortVal = document.getElementById("sortData").value;
   console.log(sortVal)
   getdata(`${url}?sort=price&order=${sortVal}`)
})

document.getElementById("filterdata").addEventListener("change", ()=>{
    filterval = document.getElementById("filterdata").value;
    console.log(filterval)
    getdata(`${url}?filter=${filterval}&page=1&limit=5`)
})