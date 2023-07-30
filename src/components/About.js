import React from "react";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:'black ',
    //     backgroundColor:'white' 
        

    // })
    let myStyle={
      color: props.mode==='dark'?'white':'#232129',
      backgroundColor: props.mode==='dark'?'#232129':'white'
    }
    // const [btntext, setBtntext] = useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtntext("Enable White Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtntext("Enable Dark Mode")
    //     }
    // }
    
  return (
    
    <div className="conatiner"style={{color: props.mode==='dark'?'white':'#232129'}}>
        <h1 className="my-3">About us</h1>
      <div className="accordion"  id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"  
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Analyse your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextTool gives you a way to make a play and use your text in your work in yur own way quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextTool is a free character and word counter tol that measures character count and word count statics instantly for the text you provide even with other tools like reversing, clear text, copy, converting to uppercase&lowercase and also with speaking feature with this tool.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This tool software works in any web such as Chrome, Firefox, Internet Explorer, Safari, Opera. It might suit to count characters and words in facebook,blogs,books, excel,document,essays,pdf etc
            </div>
          </div>
        </div>
      </div>
      </div>

  )
}
