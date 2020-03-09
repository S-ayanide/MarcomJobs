import React from 'react';
import './CardDesc.css';
import * as Markdown from 'react-markdown'

const getResponsibility = (props) => {
    //Extracting Responsibility List
    // const resp = props.responsibility.split("<br>")     
    // var temp = []
    // resp.map(item => {            
    //     item.map((i,j) => {                
    //         return temp[j]=i                
    //     })
    // })

    // const responsibilityList = temp.map(item => { 
    //     if (temp.length > 0) {          
    //         return <li>{item}</li>
    //     }else
    //         return
    // })        

    console.log(props)  
    
}

const CardDesc = (props) => (               

        // //Extracting Education And Work Experience List
        // const edu = this.props.map(i => i.eduAndWork.split("<br>"))       
        // var temp = []
        // edu.map(item => {            
        //     item.map((i,j) => {                
        //         return temp[j]=i                
        //     })
        // })

        // const educationAndWorkList = temp.map(item => { 
        //     if (temp.length > 0) {          
        //         return <li>{item}</li>
        //     }else
        //         return
        // })

        // //Extracting Skills List
        // const skills = this.props.map(i => i.skills.split("<br>"))       
        // var temp = []
        // skills.map(item => {            
        //     item.map((i,j) => {                
        //         return temp[j]=i                
        //     })
        // })

        // const skillsList = temp.map(item => { 
        //     if (temp.length > 0) {          
        //         return <li>{item}</li>
        //     }else
        //         return
        // })

        // //Extracting Benefits
        // const benefits = this.props.map(i => i.benefit.split("<br>"))       
        // var temp = []
        // benefits.map(item => {            
        //     item.map((i,j) => {                
        //         return temp[j]=i                
        //     })
        // })

        // const benefitList = temp.map(item => { 
        //     if (temp.length > 0) {          
        //         return <li>{item}</li>
        //     }else
        //         return
        // })

        // console.log(this.props.idValue)
            
        // const descArr = this.props.map(item => {
        //     return (                
        //         <div>         
        //             <h1>{item.name}</h1>       
        //             <p>{item.desc}</p>
        //             <div>
        //                 <h3>Responsibilities</h3>
        //                 <ul>{responsibilityList}</ul>                    
        //             </div>
        //             <div>
        //                 <h3>Education And Work Experience</h3>
        //                 <ul>{educationAndWorkList}</ul>                    
        //             </div>
        //             <div>
        //                 <h3>Skills</h3>
        //                 <ul>{skillsList}</ul>                    
        //             </div>                                        
        //             <p><span><strong>Work Type : </strong></span>{item.type}</p>
        //             <div>
        //                 <h3>Benefits</h3>
        //                 <ul>{benefitList}</ul>                    
        //             </div>
        //         </div>                
        //     );
        // })        
        <div className="cardDesc">                                        
            {getResponsibility(props)}
            <p>{props.id}</p>
        </div>
)

export default CardDesc;