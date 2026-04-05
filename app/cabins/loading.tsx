import Spinner from "../_components/Spinner";



const Loading:React.FC = () => {
   
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200 ">Loading Cabin data...</p>
      </div>
  )
  
}


export default Loading;