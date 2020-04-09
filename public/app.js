const serverUrl = 'http://localhost:3000'

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)

  fetch(serverUrl + '/animals', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => {
      document.getElementById('result').textContent = result
    })
    .catch((err) => {
      console.error(err.message)
    })
})

document.getElementById('jsonButton').addEventListener('click', sendJson)

const cars = [
  {
    model: 'Peugeot',
    color: 'blue',
    registration: 2012,
    checkups: [2015, 2017],
  },
  {
    model: 'Citroën',
    color: 'white',
    registration: 1999,
    checkups: [2003, 2005, 2007, 2009, 2011, 2013],
  },
]

const jsonUrl = serverUrl + '/api/cars'

function sendJson() {
  fetch(jsonUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(cars),
  })
    .then((response) => response.text())
    .then((result) => {
      document.getElementById('result').textContent = result
    })
    .catch((err) => {
      console.error(err.message)
    })
}
