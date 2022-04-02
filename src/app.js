const addCardBtn = document.querySelector('.original-container')
const cardContainer = document.querySelector('.copy-container')

const cardTemplate = `
  <div>
    <p>one</p>
  </div>
`
function addACard() {
  cardContainer.insertAdjacentHTML("afterbegin", cardTemplate)
}

addCardBtn.addEventListener('click', addACard)