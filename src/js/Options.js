import React,{Component} from 'react';
class Options extends Component{
    render(){
        const {subarr,handleChange,handleSubmit}=this.props;

        var disp=subarr.map(el=>(
            <div key={el.id}>
            <input type="radio" 
                name="country"
                checked={el.checked}
                onChange={handleChange} 
                value={el.name} 
            />
            {el.name}
            </div>
        ))
        return(
            <div>
                <form style={{marginTop:"20vh"}} onSubmit={handleSubmit}>
                    {disp}
                    <button style={{marginBottom:"5px"}} type="submit">CHECK</button>
                </form>
            </div>
        )
    }
}

export default Options;
