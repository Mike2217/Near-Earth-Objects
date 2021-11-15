

async function pageLoad() {
  try {
    const initData = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-10-17&end_date=2021-10-24&api_key=EbHvezIjiHvr628IlqtkTq3qC1BUKDla9pegqpkD')
    // console.log(initData)
  }
  catch (err) {
    alert(err)
  }
}
pageLoad();



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

let fastButton = document.getElementById('fastestObject')
let randomButton = document.getElementById('randomObject')
let largeButton = document.getElementById('largestObject')



const randomGallery = ['https://solarsystem.nasa.gov/system/resources/detail_files/1807_PIA15506_hires.jpg',
  'https://solarsystem.nasa.gov/system/resources/detail_files/782_PIA02487.jpg',
  'https://solarsystem.nasa.gov/system/resources/detail_files/511_pia18823.jpg',
  'https://solarsystem.nasa.gov/system/resources/detail_files/788_PIA18899_modest.jpg',
  'https://solarsystem.nasa.gov/system/resources/detail_files/2241_full_%281032x1032%29.gif']
  
console.log(randomGallery)

// randomGalleryArray = [Object.values(randomGallery)]
// console.log(randomGalleryArray)

let fastestPictureURL = 'https://solarsystem.nasa.gov/system/resources/detail_files/518_CometISON1200w.jpg'
let largestPictureURL = 'https://solarsystem.nasa.gov/system/content_pages/main_images/416_16_psyche_main.jpg'

// console.log(randomPictureURL)













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
      // console.log(res)
      // console.log(res.data.near_earth_objects)
      let data = res.data.near_earth_objects[`${dateEntry}`]
      console.log(data)
      // let dataArray = [data]
      let randomObject = data[Math.floor(Math.random() * data.length)]
      console.log(Object.keys(randomObject), Object.values(randomObject));
      let randomObjectDiameter = Object.values(randomObject.estimated_diameter.meters)
      let randomObjectApproachDate = (randomObject.close_approach_data[0].close_approach_date)
      let randomObjectMissDistance = (randomObject.close_approach_data[0].miss_distance.miles)
      let randomObjectSpeed = (randomObject.close_approach_data[0].relative_velocity.miles_per_hour)
      // console.log(randomObjectApproachDate)
      // console.log(randomObjectRelativeVelocity)
      // console.log(randomObjectMissDistance)
      let randomObjectName = (`Near Earth Object: ${randomObject.name}`)
      let randomObjectData = (`Object Diameter: ${randomObjectDiameter} \nObjects Relative Velocity: ${randomObjectSpeed}miles per hour \nObject Miss Distance: ${randomObjectMissDistance} miles \nClosest Approach Date: ${randomObjectApproachDate}`)
      // console.log(randomObjectData)
      // document.getElementById('objectDataField').innerText = randomObjectData
      let objectPicture = document.querySelector('.objectPicture')
      objectPicture.innerHTML = ''
      if (randomButton.classList.contains('buttonChange')) {
        document.getElementById('objectDataFieldTitle').innerText = randomObjectName
        document.getElementById('objectDataField').innerText = randomObjectData
        let randomPicture = document.createElement('img')
        let randomPictureURL = randomGallery[Math.round(Math.random() * randomGallery.length)];
        console.log(randomPictureURL)
        console.log(randomPictureURL.length)
        randomPicture.src = randomPictureURL
        console.log(randomPicture)
        objectPicture.appendChild(randomPicture)
      }
      else {
        alert('You need to select an object')
      }






      // function dataFunction ()
      // dataArray.forEach(() => {
      //   console.log(data)
      // })
    } catch (err) {
      alert(err)
    }
  }
  getData();
})


