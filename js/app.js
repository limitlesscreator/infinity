const apiKey = '7fa2c88f3add4cf2952142741220104'

const query = `https://api.weatherapi.com/v1/current.json?key=7fa2c88f3add4cf2952142741220104&q=%D1%81%D0%B0%D0%BD%D0%BA%D1%82-%D0%BF%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3`


fetch(query).then(response => {
  return response.json()
}).then(data => {
  document.querySelector('.celcia').innerHTML = data.current.temp_c
  console.log(data.current.condition.icon)
  document.querySelector('.specialImg').src = data.current.condition.icon
})
