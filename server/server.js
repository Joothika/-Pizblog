import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import authRouter from './routes/authRoute.js'
import blogRouter from './routes/blogRoute.js'
import commentRouter from './routes/commentRoute.js'
import subTextRouter from './routes/subTextRoute.js'
import varietyRouter from './routes/varietyRoute.js'
import ingredientsRouter from './routes/noIngredientRoute.js'
import keywordRouter from './routes/keywordRoute.js'
import nutrientRouter from './routes/nutrientRoute.js'
import cardRouter from './routes/cardRoute.js'
import searchRouter from './routes/searchRoute.js'
import filterRouter from './routes/filterRoute.js'
import subscribedRouter from './routes/subscribedUser.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.get('/', (req,res) => res.send('test'))
app.use('/api/auth', authRouter)
app.use('/api/blog', blogRouter)
app.use('/api/comment', commentRouter)
app.use('/api/random-text', subTextRouter)
app.use('/api/variety', varietyRouter)
app.use('/api/ingredients', ingredientsRouter)
app.use('/api/keywords', keywordRouter)
app.use('/api/nutrients', nutrientRouter)
app.use('/api/cards', cardRouter)
app.use('/api/search', searchRouter)
app.use('/api/filter', filterRouter)
app.use('/api/subscribe-user', subscribedRouter)

export default app
