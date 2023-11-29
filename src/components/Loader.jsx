import { Loading } from '../style/loader'
const Loader = () => {
  return (
    <Loading>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Loading>
  )
}

export default Loader
