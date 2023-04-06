import React, { useState } from "react";
import {Table} from "react-bootstrap"

const CramerRule = () => {
  const [numVariables, setNumVariables] = useState(0);
  const [table, setTable] = useState();
  const [xs, setXs] = useState([]);
  const [ys, setYs] = useState([]);

  const handleInputChangematrix = (event, row, col) => {
    const value = event.target.value;
    setXs(prevMatrix => {
      const newMatrix = [...prevMatrix];
      if (newMatrix[row]) {
        newMatrix[row][col] = value;
      } else {
        newMatrix[row] = [];
        newMatrix[row][col] = value;
      }
      return newMatrix;
    });
  }

  const generateTable = (numVariables) => {
    const rows = [];
    for (let i = 0; i < numVariables; i++) {
      const cols = [];
      for (let j = 0; j < numVariables; j++) {
        cols.push(
          <td>
            <input placeholder={`a${i + 1}${j + 1}`} onChange={(event)=>handleInputChangematrix(event,i,j)}/>
          </td>
        );
      }
      cols.push(<td>=</td>);
      cols.push(
        <td>
          <input placeholder={`b${i + 1}`} onChange={(event)=>handleInputChangematrix(event,i)}/>
        </td>
      );
      rows.push(<tr>{cols}</tr>);
    }
    return (
      <Table>
        <tbody>{rows}</tbody>
        {console.log(rows)}
      </Table>
    );
  };

  const handleCalculate = () => {
    // Add Cramer's rule algorithm here
  };

  const handleInputChange = (event) => {
    const newNumVariables = parseInt(event.target.value);
    console.log(newNumVariables)
    setNumVariables(newNumVariables);
    setTable(generateTable(newNumVariables));
  };

  return (
    <div>
      <label>
        Number of variables:
        <input type="number" min="1" max="5" onChange={handleInputChange} />
      </label>
      <br />
      {table}
      <br />
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};

export default CramerRule;