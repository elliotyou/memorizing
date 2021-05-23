const view = {
  displayCars() {
    document.querySelector('#cards').innerHTML = `
      <div class="card">
        <p>4</p>
        <img src="https://image.flaticon.com/icons/svg/105/105220.svg">
        <p>4</p>
      </div>
    `
  }
}

view.displayCars()