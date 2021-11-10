
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

getSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit complete')
  let dateEntry = getInput.value
  console.log(dateEntry)

  async function getData() {
    try {
      // const resDef = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-10-17&end_date=2021-10-17&api_key=EbHvezIjiHvr628IlqtkTq3qC1BUKDla9pegqpkD')
      const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateEntry}&end_date=${dateEntry}&api_key=EbHvezIjiHvr628IlqtkTq3qC1BUKDla9pegqpkD`)
      // console.log(resDef)
      console.log(res)
      console.log(res.data.near_earth_objects)
      let data = res.data.near_earth_objects[`${dateEntry}`]
      // let data = res.data.near_earth_objects['2021-10-17']
      console.log(data)
      let randomObject = data[Math.floor(Math.random() * data.length)]
      console.log(Object.keys(randomObject), Object.values(randomObject));
      let randomObjectName = (randomObject.name)
      let randomObjectDiameter = Object.values(randomObject.estimated_diameter.meters)
      let randomObjectApproachDate = (randomObject.close_approach_data[0].close_approach_date)
      let randomObjectMissDistance = (randomObject.close_approach_data[0].miss_distance.miles)
      let randomObjectSpeed = (randomObject.close_approach_data[0].relative_velocity.miles_per_hour)
      // console.log(randomObjectApproachDate)
      // console.log(randomObjectRelativeVelocity)
      // console.log(randomObjectMissDistance)
      let randomObjectData = (`Object Name:${randomObjectName} <br/> Object Diameter: ${randomObjectDiameter} <br/>  Objects Relative Velocity: ${randomObjectSpeed}
      <br/> Object Miss Distance: ${randomObjectMissDistance} <br/> Closest Approach Date: ${randomObjectApproachDate}`)
      console.log(randomObjectData)
      // document.getElementById('objectDataField').innerText = randomObjectData
      document.getElementById('objectDataField').innerText = randomObjectData
    } catch (err) {
      alert(err)
    }
  }
  getData()
})

