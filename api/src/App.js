function App() {
  return (
  

    <div>

      <div className ="header">  my project </div>

   <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                          <div>
                                          <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                             />
                                         
                                         <div>
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="LastName" className="form-control" 
                                             />

                                          <div>
                                          <label> Mobilenumber: </label>
                                            <input placeholder="Mobilenumber" name="Mobilenumber" className="form-control" 
                                             />

                                          </div>
                                         <div>
                                           
                                         <button className="btn btn-success" >Add</button>
                                           
                                           </div> 
                                          
      

                                          </div>
                                           
                
                                           </div>
                                           
                                           
                                           
                                           
                                           
                                           </div>
                                      </form>


    </div>
     
   
     </div>
  );
}

export default App;
