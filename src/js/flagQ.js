import React,{Component} from 'react';
import Options from './Options'
import Answer from './Answer'

const QuestionState={
    QUESTION:0,
    CORR_ANS:1,
    WRG_ANS:2
}

class FlagQ extends Component{
    constructor(props){
        super(props);
        this.state={
            userAns:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this);
    }  
    handleChange(e){
        this.setState({userAns: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onGuess(this.state.userAns)
    }

    render(){
        const {subarr,correctOption,questionState,flag,onNext,answerText}=this.props;
        // console.log(questionState)
        const qora=questionState === QuestionState.QUESTION ? 
        <Options 
        subarr={subarr}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />:
        <Answer 
            correct={questionState === QuestionState.CORR_ANS}
            answer={answerText}
            onNext={onNext}
        />
        return(
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <div style={{width:"30%"}}>
               {qora}
               </div>
               <div style={{width:"60%"}}>
                <img
                    style={{height:"400px", width:"400px"}}
                    className="flag-img"
                    src={flag}
                    alt="Guess the flag"
                />
                </div>
            </div>
        )
    }
}
export {QuestionState};
export default FlagQ;
