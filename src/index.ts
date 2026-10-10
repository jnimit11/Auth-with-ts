import { createServer } from 'node:http'
import { createApplication } from './app/index.js'


async function main () {
    try {
        const app = createApplication()
        const server = createServer(app)
        const PORT: number = 8080

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            
        })
    }

    catch (error){
        console.log("Error starting the http server")
        throw error
    }
}

main()