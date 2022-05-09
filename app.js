
// NodeJS SimpleServer app Created by Nik Solohub
// github: https://github.com/NikSolohub


const port = 3000 // Set port

// Imports
import * as Http from 'http'
import * as URL from 'url'

// ------------------------

// Init server 

const server = Http.createServer((req,res)=>{

    let incomingReq= {url : req.url, method : req.method}
    
    let urlQuery
    
    // Parse GET URL
        // Works only with GET method
    if(incomingReq.url !== '/info' && incomingReq.method === 'GET'){ 
    
        urlQuery = URL.parse(incomingReq.url, true)
        urlQuery = urlQuery.query

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    res.write(`Incoming URL: ${incomingReq.url} <br> Method: ${incomingReq.method} <br>`)
    res.write('URL Query: ')

        for(const [key, value] of Object.entries(urlQuery)){
            res.write(` ${key} : ${value} `)
        }

        return res.end()
    }
    // ------------------------

    // Display server's port

    else if(incomingReq.url === '/info'){

            res.setHeader('Content-Type', 'text/plain')
            
            res.write(`Server port: ${port}`)

                return res.end()
        }

})
    // ------------------------

    // Parse POST REQUEST
    if(incomingReq.method === 'POST'){

    }


    // ------------------------

server.listen(port, ()=>{
    console.log(`Server has been started on port ${port}`)
})

// ------------------------