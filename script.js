let cars = {
  //   "cars": [
  //     {
  //       "brand": "bmw",
  //       "model": "M5",
  //       "price": 51000
  //     },
  //     {
  //       "brand": "volvo",
  //       "model": "V90",
  //       "price": 61000
  //     }
  //   ]
}

const select = document.querySelector('.cars-select')
const carsInfo = document.querySelector('.cars-info')
const carsPrice = document.querySelector('.cars-price')

const render = (cars) => {
  cars.cars.forEach(elem => {
    const item = document.createElement('option')
    item.textContent = elem.brand
    item.value = elem.brand
    select.append(item)
  });
}

const getData = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    throw new Error('Ошибка чтения данных')
  }
}

getData('cars.json')
  .then(data => {
    cars = data
    render(cars)
  })
  .catch(error => {
    console.log(error.message);
  })

select.addEventListener('change', () => {
  const brand = select[select.selectedIndex].value

  if (select.selectedIndex > 0) {
    cars.cars.forEach(elem => {
      if (elem.brand === brand) {
        carsInfo.textContent = 'Тачка ' + elem.brand + ' ' + elem.model
        carsPrice.textContent = 'Цена: ' + elem.price + '$'
      }
    });
  } else {
    carsInfo.textContent = 'выберите тачку'
    carsPrice.textContent = ''
  }
})