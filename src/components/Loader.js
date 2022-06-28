import LoadingSpinner from './loading_spinner.gif'

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoadingSpinner} alt="Loading" />
      <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader