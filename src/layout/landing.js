import React from 'react'



const Landing = () => {
  console.log("Dashboard rendering");
        return (
            <section className="section">
            <div className="container-fluid">
              
              <div className="title-wrapper pt-30">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="title mb-30">
                      <h2>eCommerce Dashboard</h2>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="breadcrumb-wrapper mb-30">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="#0">Dashboard</a>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">
                            eCommerce
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                  
                </div>
                
              </div>
              
             
             </div>
             
          </section>
          

)
}
   export default Landing