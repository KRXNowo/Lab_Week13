//duplicate original

const addCardBtn = document.querySelector('.original-container')
const cardContainer = document.querySelector('.copy-container')

const cardTemplate = `
  <div>
    <p>one</p>
  </div>
`

const cardTemplate1 = `
  <div>
    <p>two</p>
  </div>
`

function duplicate() {
    cardContainer.insertAdjacentHTML("afterbegin", cardTemplate1)
    cardContainer.insertAdjacentHTML("afterbegin", cardTemplate)
}

addCardBtn.addEventListener('click', duplicate)