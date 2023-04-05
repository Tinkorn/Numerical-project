import { Container, Form } from 'react-bootstrap';
import { useState } from 'react';
const math = require('mathjs');
const Carmer=()=>{

    const print=()=>{
        return(<div></div>)
    }

    const getMatrix=(row,column)=>{
        let inputMattix=[];
        for(var i=0;i<row;i++){
            for(var j=0;j<column;j++){
                inputMattix.push(
                    <div>
                        <input placeholder={"value x" + (i + 1)} />
                    </div>
                )
            }
        }
     return(      
            <div>hello</div>
        )
        
    }

    function copyMatrix(matrix) {
        return matrix.map(row => row.slice());
    }

    const cal_carmer=(A,B)=>{
        var A=[[1,0,1],
              [2,1,0],
              [1,-1,1]]

        var B=[1,2,3]
        var x=[],Temp;

        for(let i=0;i<B.length;i++){
            Temp=copyMatrix(A);
            for(let j=0;j<B.length;j++){
                Temp[j][i]=B[j]
            }
            x.push(math.det(Temp)/math.det(A))
        }
        console.log(x)
    }

    const [Row,setRow] = useState(0)
    const [Column,setColumn] = useState(0)
    const [html,setHTML]=useState(null)

    const inputRow = (event)=>{
        console.log(event.target.value)
        setRow(event.target.value)
        setHTML(getMatrix(Row,Column))
    }

    const inputColumn=(event)=>{
        console.log(event.target.value)
        setColumn(event.target.value)
        setHTML(getMatrix(Row,Column))
    }

    return(
        <Container>
            <br></br>
            <br></br>
            <h1>Carmer Rule</h1>
                
            <Form>
             <Form.Group className="mb-3" style={{display:"flex"}}>
                <Form.Label style={{paddingTop:"5px"}}><strong>A</strong></Form.Label>
                <input type="number" onChange={inputRow} style={{width:"6%"}} className="form-control"></input>
                <input type="number" onChange={inputColumn} style={{width:"6%"}} className="form-control"></input>
                </Form.Group>
            </Form>  

            <Container>
                {html}
            </Container>

        </Container>
    )
}
export default Carmer

