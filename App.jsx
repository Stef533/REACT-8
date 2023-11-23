import {Welcome} from './Welcome'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
export function App(){
  return(
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  )
}