import { useState } from 'react'
import { GlobalStyles } from '../../application/GlobalStyles'
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary'
import { Content } from '../../containers/Content/Content'
import { Footer } from '../../containers/Footer/Footer'
import { Header } from '../../containers/Header/Header'

const RootPage = () => {
  const [view, setView] = useState(false)

  const viewDescription = () => {
    setView(true)
  }

  return (
    <ErrorBoundary>
      <GlobalStyles />
      <Header view={view} setView={setView} />
      <Content viewDescription={viewDescription} />
      <Footer />
    </ErrorBoundary>
  )
}

export { RootPage }
