let form = document.querySelector("form")
let table = document.querySelector("#appendTable")

let books = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

function setBooks(){
    localStorage.setItem('list', JSON.stringify(books))
}


console.log(JSON.parse(localStorage.getItem('list')));


let bookName, author, endDate, startDate

form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log(form.name.value);
    bookName = form.name.value
    author = form.author.value 
    startDate = form.startDate.value
    endDate = form.endDate.value

    form.reset()    
    if(bookName.length){
        books.push({bookName:bookName, author:author, startDate:startDate, endDate:endDate})
    }
    setBooks()
    createTable()
})


if(books.length) createTable()


function createTable(){
    const books = JSON.parse(localStorage.getItem('list'))
    table.textContent = ''
    books.forEach((item, i)=>{
        let tr = document.createElement('tr')
        let nameTd = document.createElement('td')
        let authorId = document.createElement('td')
        let startId = document.createElement('td')
        let endTd = document.createElement('td')

        nameTd.textContent = item.bookName
        authorId.textContent = item.author
        startId.textContent = item.startDate
        endTd.textContent = item.endDate

        tr.appendChild(nameTd)
        tr.appendChild(authorId)
        tr.appendChild(startId)
        tr.appendChild(endTd)
        table.appendChild(tr)
    })
}