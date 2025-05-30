import React from 'react';


function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
          <div className=' mt-5 p-5 ' id="supportWrapper">
            <h4 >Support Portal</h4>
            <a  href="">Track Tickets</a>
          </div>
          <div className=' row p-5 m-3'>
          
            <h1 className='fs-3 mb-5 '  style={{marginLeft:"200px"}}>Search for an answer or browse help topics to create a ticket.</h1>
            <input className='mb-3' placeholder='Eg. How do I activate F&O, why is my order getting rejected..' style={{marginLeft:"200px"}}/><br />
            <div className='col '>
            <a href="" style={{marginLeft:"200px"}}>Track account opening </a>
            <a href="" style={{marginLeft:"30px"}}>Track segment activation</a> 
            <a href="" style={{marginLeft:"30px"}}>Intraday margins </a>
            <a href="" style={{marginLeft:"30px"}}>Kite user manual</a>
            </div>
        
          
          
          
          
            
          </div>
        </section>
      );
}

export default Hero;
