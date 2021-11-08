


// let getInput = document.querySelector('#dateInput1').value
// console.log(getInput);
async function getData() {
  try {
    const res = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-10-17&end_date=2021-10-20&api_key=EbHvezIjiHvr628IlqtkTq3qC1BUKDla9pegqpkD')
    console.log(res)
    console.log(res.data)
    console.log(res.data.near_earth_objects.forEach(() => {
      
    }))
  } 
  catch (err) {
    alert(err)
  }
}
getData();