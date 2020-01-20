import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import os = require('os')
import * as cluster  from 'cluster'


const pid = process.pid

if(cluster.isMaster) {
    const cpusCount = os.cpus().length 
    console.log(`CPUs: ${cpusCount}`)
    console.log(`Master started. Pid: ${pid}`)
    for(let i = 0; i < cpusCount-1; i++) {
        const worker = cluster.fork()
        worker.on('exit', () => {
            console.log(`Worker died! Pid: ${worker.process.pid}`)
            cluster.fork()
        })
        worker.send('Hello frm server')
        worker.on('message', (msg) => {
            console.log(`Message from worker ${worker.process.pid} : ${JSON.stringify(msg)}`)
        })
    }
}

if(cluster.isWorker) {
  async function bootstrap() {

    const app = await NestFactory.create(AppModule)
    app.enableCors()
    const port = process.env.PORT || 3000
    await app.listen(port)
  
  }
  
  bootstrap();
    process.on('message', (msg) => {
        console.log(`Messsage from Master: ${msg}`)
    })
    process.send({text: 'Hello', pid})
}

