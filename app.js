import express from 'express'

const app = express()

app.get('', (req, res) => res.send('welcome from docker'))

app.listen(3000, () => console.log(`listening from port 3000`))