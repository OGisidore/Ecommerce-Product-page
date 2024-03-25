import { images } from "./images.js";

// recup of DOM elem

const chart = document.getElementById("cart")                  // recup cart icon
const cartModal = document.getElementById("cartModal")         // recup cart modal
const countN = document.querySelector("#counter")              // recup counter of the number of choice
const minus = document.querySelector("#minus")                 // recup minus icon minus the choice 
var cartContent = document.querySelector(".cartContents");     // recup div of the cart modal content to complete it with text after condional test
var nav = document.querySelector(".navMobil")                  // recup the navbar when we are on screen less than 860 px
var menu = document.querySelector(".menuIcon")                 // recup the menu icon 
var closeMenu = document.querySelector(".closeMenu")           // recup close icon present on nav mobil
var viewS = document.querySelector(".view2 img")               // recup img elm of view modal
var viewModal = document.querySelector(".ProductsView")        // recup the view modal
var closeModal = document.querySelector(".ProductsView .closeicon") // recup close icon of view modal
var next = document.querySelector(".ProductsView .next")        // recup the next icon 
var previous = document.querySelector(".ProductsView .previous") // recup preview icon 


const plus = document.querySelector("#plus")                     // recup the plus icon
var view = document.querySelector(".view img")                   // recup img element of products image 
const addButton = document.querySelector("#addButton")           // recup the add to cart button

const thumbnails = document.querySelectorAll(".thumbnails img")   // recup all image of thubnails section


let init = 0                                                        // initialize de count of choice at zero
var currentProduct = images[0]                                       // initialize the currentProducts by the first element of images arrays
const price = 125;                                                 // initialize products price





// add eventLIstener to the thumbnails image

thumbnails.forEach((img , index) => {
   
    console.log((img.src));
    // img.classList.remove("active")
    img.onclick = (e) => {
        

        let id = parseInt(e.target.dataset.id)
        console.log(id);
        const image = images.find((image) => image._id === id)
        console.log(view.src);
        console.log(image.src);
        view.src = image.src
        viewS.src = image.src

        img.classList.add("active")
        
        currentProduct = image

    }
    
})





// object with some property that have a function as key

const handleEvent = {

    // property to displays cart modal

    displayCart_Content: (event) => {
        cartModal.classList.toggle('active')
        
    },
    // property to handle plus icon 

    handlePlus: () => {
        init++
        displayChoiceContent()
    },
    // property to handle minus icon 

    handleMinus: () => {
        if (init > 0) {
            init--
        } else {
            init
        }
        displayChoiceContent()
    },


    // property to add product to the cart 

    handleAddTocart: () => {
        // console.log(init);
        // document.querySelector(".cartContent p").innerText =''
        // init > 1 ? console.log('ok') : console.log('false');
        if (init > 0) {

            console.log();
            cartContent.innerHTML = ` 
            <div>
            <div class="div d-flex align-items-center gap-1 ">
              <img src="${currentProduct.src}" alt="" height="40">
              <div class="desc">
                <p>Fall Limited Edition Sneakers</p>
                <p>$${price} * ${init}  <strong> $${price * init} </strong></p>
              </div>
              <div class="delete" id="delete"> 
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
</div>
              
            </div>
            <button class="p-1 my-1 btn-control" >Checkout <button>
            </div>`
            const deleteBtn = document.querySelector("#delete")
            console.log(deleteBtn);

            deleteBtn.onclick = handleEvent.handleDelete
            console.log('ok');

        } else {
            document.querySelector(".cartContents ").innerHTML = '<p> your cart is empty </p>'

        }
        productNumber(init)
        console.log(init);
    },

    // property to delete product in the cart


    handleDelete:()=>{
        init = 0
        handleEvent.handleAddTocart()
        displayChoiceContent()
        productNumber(init)
        
        cartModal.classList.remove('active')

    },

    // property to display view products modal 
    displayModal:()=>{
        cartModal.classList.remove('active')
        viewModal.classList.remove("d-none")
    },
    // property to handle close view modal icon 
    hideModal:()=>{
        viewModal.classList.add("d-none")
    },

    // property to handle next icon 
    NextView:()=>{

    if(currentProduct._id < images.length){
        console.log("yes");
        currentProduct = images.find((img)=> img._id === currentProduct._id + 1)
        console.log(currentProduct);
        
    } else{ 
        currentProduct = images[0]
        console.log("revoir le code et la logique");
    }
        view.src = currentProduct.src
        viewS.src = currentProduct.src

       
    },

    // property to handle previous icon 
    previousView:()=>{
        if(currentProduct._id > 1){
            console.log("yes");
            currentProduct = images.find((img)=> img._id === currentProduct._id - 1)
            console.log(currentProduct);
            
        } else{ 
            length = images.length
            console.log(length);
            currentProduct = images[length - 1]
            console.log("revoir le code et la logique");
        }
            view.src = currentProduct.src
            viewS.src = currentProduct.src
    
    },

    // property to display menu  
    displayMenu:()=>{
        nav.classList.remove('md-none')
    },

    // property to close / hide menu  
    hideMenu:()=>{
        nav.classList.add('md-none')
    }

}

// 
 // property to display number of choice added to cart

export const productNumber = (count = init) => {
    let span = document.createElement("span")
    if (count > 0) {
        
        span.className = "count absolute ",
            span.innerText = count;
        chart.appendChild(span)

    } else{
        span.className = " none" 
    }

}
// display how
const displayChoiceContent = () => {
    if (init >= 0) {
        countN.innerText = init
    }

}

// setter event

export const setEvent = () => {
    chart.onclick = handleEvent.displayCart_Content;
    productNumber(init)
    displayChoiceContent()

    minus.onclick = handleEvent.handleMinus
    plus.onclick = handleEvent.handlePlus
    addButton.onclick = handleEvent.handleAddTocart
    view.onclick = handleEvent.displayModal
    closeModal.onclick = handleEvent.hideModal
    next.onclick = handleEvent.NextView
    previous.onclick = handleEvent.previousView
    menu.onclick = handleEvent.displayMenu
    closeMenu.onclick = handleEvent.hideMenu
    

}




