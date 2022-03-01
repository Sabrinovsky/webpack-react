import './styles.scss'
import { render } from 'react-dom'
import App from './components/App'

render(<App />, document.getElementById('root'))

module.hot.accept();
