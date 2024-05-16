const app = require('express')()
const { json } = require('express')
const fs = require('fs')

app.get('/', (req,res)=>{

    // Reading the JSON File: Use Node.js’s built-in fs module to read the quotes.json file
    fs.readFile('./qoutes/qoutes.js' ,'utf8', (err,data)=>{
        if(err) console.log('There is an error:',err)
        const jsonData = JSON.parse(data)
        const dataLength = jsonData.length
        const randomNumber = Math.floor(Math.random()*dataLength)+ 1

        // Parsing the JSON Data: Once you’ve read the file, you’ll need to parse it from a string into a JavaScript object. && // Generating a Random Quote: Create a function that selects a random quote from the parsed JSON object.
        const randomQuote = jsonData[randomNumber]

        // Displaying the Quote: Print the random quote to the console, along with the author’s name.
        console.log(`Author: ${randomQuote.author} \t\t Quote: ${randomQuote.quote}` )

        res.send('Random quote logged to the console')
    })
})

app.listen(5000)