let form = document.querySelector("form");

function render() {
    form.style.display = "block";
}

function remove() {
    form.style.display = "none";
}

const mylibrary = [];

function Book(title, author, page, imgurl, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.imgurl = imgurl;
    this.status = status;
}
const book1 = new Book(
    "Chamber Of Secrets",
    "JK Rowling",
    555,
    "https://ew.com/thmb/MaxHBP4uhvg9_3eNeWgx_SOSku0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855669-6cfb2099b6e84a4899ce368d6facc242.jpg",
    "Unread"
  );
  const book2 = new Book(
    "Fellowship of the ring",
    "John Ronald",
    555, 
    "https://m.media-amazon.com/images/I/813UBZ-O8sL._AC_UF1000,1000_QL80_.jpg",
    "Unread"
  );
  const book3 = new Book(
    "Goblet of Fire",
    "JK Rowling",
    555,
    "https://m.media-amazon.com/images/I/71-CKpDxEYL._AC_UF1000,1000_QL80_.jpg",
    "Unread"
  );
  const book4 = new Book(
    "Whitby Rock",
    "Kev Freeman",
    555,
    "https://miblart.com/wp-content/uploads/2020/12/new-cover-mibl-2.jpeg",
    "Read"
  );
mylibrary.push(book1,book2,book3,book4);
function addtoLibrary() {
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let page = document.querySelector(".page").value;
    let imgurl = document.querySelector(".imgurl").value;
    let status = document.querySelector(".status").checked ? "Read" : "Unread";

    if (title && author && page) {
        let newbook = new Book(title, author, page, imgurl, status);
        mylibrary.push(newbook);
        return true;
    } else {
        return false; // Indicate failure to add book
    }
}

function clearForm() {
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".page").value = "";
    document.querySelector(".imgurl").value = "";
    document.querySelector(".status").checked = false;
}

let btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (addtoLibrary()) { // Check if book was successfully added
        console.log(mylibrary);
        displaybooks();
        clearForm();
        remove();
    } else {
        console.log("Please fill in all fields.");
    }
});

function displaybooks() {
    let container = document.getElementById("container"); 

    container.innerHTML = ""; // Clear previous content

    for (let i = 0; i < mylibrary.length; i++) { // Initialize i with 0
        let book = mylibrary[i]; // Access each book object

        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let img = document.createElement("img");
        img.src = book.imgurl; // Use book object property
        img.setAttribute("class", "displayimg");
        card.appendChild(img);

        let title = document.createElement("h1");
        title.textContent = book.title; // Use book object property
        title.setAttribute("class", "title2");
        card.appendChild(title);

        let author = document.createElement("h2");
        author.textContent ="Author:" + book.author; // Use book object property
        author.setAttribute("class", "author2");
        card.appendChild(author);

        let page = document.createElement("p");
        page.textContent ="Pages:"+ book.page; // Use book object property
        page.setAttribute("class", "page2");
        card.appendChild(page);

        let status = document.createElement("button");
        status.textContent = book.status; // Use book object property
        status.setAttribute("class", "button2");
        if (status.textContent === "Read") {
            status.style.backgroundColor = "gray";
        } else {
            status.style.backgroundColor = "red";
        }
      
        card.appendChild(status);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("class", "deleteButton");
        card.appendChild(deleteButton);

        // Add event listener to delete button
        deleteButton.addEventListener("click", function() {
            mylibrary.splice(i, 1); // Remove book from mylibrary array
            displaybooks(); // Re-display books after deletion
        });

        status.addEventListener("click",function(){
            if(status.textContent==="Read"){
                status.textContent="Unread"
                status.style.backgroundColor="red";
            }else{
                status.textContent="Read";
                status.style.backgroundColor="gray"
            }
        })


        container.appendChild(card); // Append the card to the container
    }
}

window.onload=function(){
    displaybooks()
}




