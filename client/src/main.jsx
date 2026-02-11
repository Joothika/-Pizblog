import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { PizzaDataContext } from './context/PizzaDataContext.jsx'
import { BlogDataContext } from './context/BlogDataContext.jsx'
import { CommentDataContext } from './context/CommentDataContext.jsx'
import { AdminCardsDataContext } from './context/AdminCardsDataContext.jsx'
import { AuthDataContext } from './context/AuthDataContext.jsx'
import { AdminChartDataContext } from './context/AdminChartDataContext.jsx'
 
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <PizzaDataContext>
            <BlogDataContext>
                <CommentDataContext>
                    <AdminCardsDataContext>
                        <AuthDataContext>
                            <AdminChartDataContext>
                                <App />
                            </AdminChartDataContext>
                        </AuthDataContext>
                    </AdminCardsDataContext>
                </CommentDataContext>
            </BlogDataContext>
        </PizzaDataContext>
    </BrowserRouter>
)
