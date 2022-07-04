import { createRoot } from 'react-dom/client'
import { RootPage } from '../pages/RootPage/RootPage'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RootPage />)
