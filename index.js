const view = {
  getCardElement() {
    return `
      <div class="card">
        <p>4</p>
        <img src="https://image.flaticon.com/icons/svg/105/105220.svg">
        <p>4</p>
      </div>`
  },
  displayCars() {
    const rootElement = document.querySelector('#cards')
    rootElement.innerHTML = this.getCardElement()
  }
}

view.displayCars() 