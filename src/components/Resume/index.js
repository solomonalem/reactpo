import React from "react";
import PDF from "../../assets/files/Resume.pdf";

function Resume(){
    return(
        <section className='resume'>
         <iframe
                src={PDF}
                type="application/pdf"
               
            ></iframe>
        </section>
      )
} 
  


export default Resume;