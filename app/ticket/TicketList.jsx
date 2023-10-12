
const getTickets= async()=>{
    const res = fetch('http://localhost:4000/tickets',{
        
    });
    const data =  (await res).json();
    return data ;
}



const  TicketList = async ()=> {
    const tickets = await getTickets();

  return (
   <>
    {tickets.map((ticket)=>{
      return <div className="px-10 mx-10 my-10 bg-white border-4 shadow-lg border-black ring-2 rounded-lg">
        <h1 className="  text-xl text-sky-500 ">{ticket.title}</h1>
             <div key = {ticket.id} className='flex text-green-300  '>
                <p className="text-red-400">{ticket.body}</p>
                
            

            </div>
       </div>
      
    })}
   
   </>
  )
}
export default TicketList;