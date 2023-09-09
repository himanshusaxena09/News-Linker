import React from 'react'
import loading2 from './Images/loading2.gif'

// export class Spinner extends Component {
const Spinner = ()=>  {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading2} alt="loading2" />
      </div>
    )
  
}

export default Spinner