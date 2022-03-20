/* eslint-disable no-undef */
import express from 'express'

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => { res.send('<h1 style="margin-left: 45%;">Hello programmers</h1>') })

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
