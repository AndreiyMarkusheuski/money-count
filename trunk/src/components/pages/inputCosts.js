import React, {useEffect, useState} from 'react';

const InputCosts = (props) => {
    console.log(props)
    const [costs, setCosts] = useState('')
    return (
      <div className="block-input">
        <label>
          <input
            type="number"
            placeholder="введи расходы..."
            value={costs}
            onChange={(e) => setCosts(e.target.value)}
          ></input>
        </label>
        <button onClick={() => {
          props.updateData(props.moneyCount - costs)
          setCosts('')
          }}>
          click
        </button>
      </div>
    );
}

export default InputCosts;