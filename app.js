
// let objectSelector1 = document.querySelector('#firstButton')
// let objectSelector2 = document.querySelector('#secondButton')
// let objectSelector3 = document.querySelector('#thirdButton')


// objectSelector1.addEventListener('click', (e) => {
//   e.preventDefault;
//   style
// })

document.querySelector('#firstButton').addEventListener('click', () => {
  document.querySelector('#fastestObject').classList.add('buttonChange')
  document.querySelector('#largestObject').classList.remove('buttonChange')
  document.querySelector('#randomObject').classList.remove('buttonChange')
})
document.querySelector('#secondButton').addEventListener('click', () => {
  document.querySelector('#randomObject').classList.add('buttonChange')
  document.querySelector('#largestObject').classList.remove('buttonChange')
  document.querySelector('#fastestObject').classList.remove('buttonChange')
})
document.querySelector('#thirdButton').addEventListener('click', () => {
  document.querySelector('#largestObject').classList.add('buttonChange')
  document.querySelector('#randomObject').classList.remove('buttonChange')
  document.querySelector('#fastestObject').classList.remove('buttonChange')
})



let getSubmit = document.querySelector('#dataForm')
let getInput = document.querySelector('#dateInput1')

getSubmit.addEventListener('submit', function dateEntryFunction(e) {
  e.preventDefault();
  console.log('submit complete')
  let dateEntry = getInput.value
  console.log(dateEntry)
  return dateEntry
})

let a1 = dateEntryFunction()
console.log(a1)


async function getData() {
  try {
    const resDef = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-10-17&end_date=2021-10-17&api_key=EbHvezIjiHvr628IlqtkTq3qC1BUKDla9pegqpkD')
    // const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateEntry}&end_date=${dateEntry}&api_key=EbHvezIjiHvr628IlqtkTq3qC1BUKDla9pegqpkD`)
    console.log(resDef)
    // console.log(res)
    // console.log(res.data)
    // console.log(res.data.near_earth_objects)
    // console.log(res.data.near_earth_objects)
    // let data = res.data.near_earth_objects['2021-10-17']
    let data = res.data.near_earth_objects['2021-10-17']
    console.log(data)





    // console.log(res.data.near_earth_objects.forEach(() => {
      
    }
  catch (err) {
    alert(err)
  }
}
getData();