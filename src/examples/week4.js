// To run this code you need to uncomment lines 33 and 45 in the index.html file inside the public folder.

function appendInApp(text) {
  const app = document.querySelector("#app")

  const paragraph = document.createElement("p")
  paragraph.innerHTML = text

  app.appendChild(paragraph)
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

function getGreeting() {
  const greetingsList = ["Hi", "Hello", "Hola"]

  const randomNumber = getRandomNumber(greetingsList.length)
  const randomGreeting = greetingsList[randomNumber]

  return randomGreeting
}

async function getName() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
    })

    if (response.status === 200) {
      const fetchedData = await response.json()

      const namesList = fetchedData.results

      const randomNumber = getRandomNumber(namesList.length)
      const randomName = namesList[randomNumber].name

      return randomName
    } else {
      const fetchedError = await response.json()

      return fetchedError.error
    }
  } catch (error) {
    console.log("👷 error: 👷", error)
  }
}

// const getNameSlowlyWithPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const name = getName()

//     if (name) {
//       resolve(name)
//     } else {
//       reject("Woops, I could not find a name, because the server sucks!")
//     }
//   }, 3000)
// })

// const getNameSlowlyWithPromiseTryCatch = () =>
//   new Promise((resolve, reject) => {
//     ///
//     setTimeout(() => {
//       const name = getName()

//       if (name) {
//         resolve(name)
//       } else {
//         reject("Woops, I could not find a name, because the server sucks!")
//       }
//     }, 1000)
//     ///
//   })

async function runTheEntireThing() {
  appendInApp("Let me do my thing!")

  //Consuming a promise with then -> catch
  // const greeting = getGreeting()
  // getNameSlowlyWithPromise
  //   .then((name) => {
  //     const assembledGreeting = `${greeting}, ${name}!`

  //     appendInApp(assembledGreeting)
  //     appendInApp("I am done!")
  //   })
  //   .catch((errorMessage) => {
  //     appendInApp(errorMessage)
  //   })

  //Consuming a promise with try -> catch
  try {
    const greeting = getGreeting()
    const name = await getName()

    const assembledGreeting = `${greeting}, ${name}!`

    appendInApp(assembledGreeting)
  } catch (error) {
    appendInApp(error)
  }

  appendInApp("I am done!")
}

runTheEntireThing()
