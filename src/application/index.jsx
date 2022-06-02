import { createRoot } from 'react-dom/client'
<<<<<<< HEAD

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<h1>Hello World!</h1>)
=======
import { RootPage } from '../pages/RootPage/RootPage'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RootPage />)
>>>>>>> b784ead (completed task 3)
