
export default function Card(props) {
    //console.log(props.kep)
  return (
    
    <div className='col-3 card' style={{ width: '18rem' } }  >
      <img src={"http://localhost:8000/"+props.kep.name} alt={props.kep.title} className='pt-2' />
     <p className='p-3'>{props.kep.title}</p>
    </div>

    
  )
}
