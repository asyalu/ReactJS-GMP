import { GlobalStyles } from '../../application/GlobalStyles'
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary'
import { Content } from '../../containers/Content/Content'
import { Header } from '../../containers/Header/Header'

const RootPage = () => (
  <ErrorBoundary>
    <GlobalStyles />
    <Header />
    <Content />
  </ErrorBoundary>
)

export { RootPage }
