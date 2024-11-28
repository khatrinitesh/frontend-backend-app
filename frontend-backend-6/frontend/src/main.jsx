
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import AppComp from './routes/AppRoutes'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <AppComp/>
    </BrowserRouter>
  </>,
)
