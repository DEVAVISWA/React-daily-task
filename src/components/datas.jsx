function Datas({ datas }) {
    // console.log(datas.feature6.condition)
    
    return (
        <div id="card">
            <span id="smallHeadder">{datas.smallHeadder}</span>            
            <h1 id="heading">{datas.price}</h1>
            <hr/>
            <ul id="ul">
                <li>{datas.features[0]}</li>
                <li>{datas.features[1]}</li>
                <li>{datas.features[2]}</li>
                <li>{datas.features[3]}</li>
                <li>{datas.features[4]}</li>
                <li>{datas.features[5]}</li>
                <li>{datas.features[6]}</li>
                <li>{datas.features[7]}</li>                
            </ul>
            <button id="button" type="button">BUTTON</button>
        </div>
        
    )
    
}

export default Datas