import React,{Component} from 'react';
import FlagQ from './flagQ';
import {QuestionState} from './flagQ'


class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            countries:[""],
            subarr:[""],
            correctOption:undefined,
            questionState:undefined
        }
        this.onGuess = this.onGuess.bind(this);
        this.onNext=this.onNext.bind(this);
        this.getOptions=this.getOptions.bind(this);
    }  
    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all').then(d=>d.json())
        .then(countries=>{
            var subarr=this.getOptions(countries);
            var correctOption=subarr[Math.floor(Math.random()*4)];
            this.setState({
                countries,
                subarr,
                correctOption,
                questionState: QuestionState.QUESTION
            })
        })
    }
    onGuess(ans){
        var q;
        if(ans===this.state.countries[this.state.correctOption].name){
            q=QuestionState.CORR_ANS;
        }else{
            q=QuestionState.WRG_ANS;
        }
        this.setState({questionState:q});
    }
    onNext(){
        const {countries} = this.state;
        const subarr = this.getOptions(countries);
        // console.log(subarr)
        const correctOption = subarr[Math.floor(Math.random()*4)];
        this.setState({
          correctOption,
          subarr,
          questionState: QuestionState.QUESTION
        });
    }
    getOptions(countries){
        var subarr = [];
        while(subarr.length < 4){
            var r = Math.floor(Math.random() * countries.length);
            if(subarr.indexOf(r) === -1) subarr.push(r);
        }
        return subarr;
    }
    render(){
        let {
            countries,
            correctOption,
            subarr,
            questionState
        } = this.state;
        var views=<div>loading..</div>
        if(correctOption !== undefined){
            let ops=subarr.map((f)=>{
                // console.log(countries[f]["name"]);
                return {id:f,name:countries[f].name}
            })
            views=<FlagQ subarr={ops}
                        flag={countries[correctOption].flag} 
                        correctOption={correctOption} 
                        questionState={questionState}
                        onGuess={this.onGuess}
                        onNext={this.onNext}
                        answerText={countries[correctOption].name}
                    />
        }
        // console.log(this.state)
        return(
            <div style={{marginTop:"25px",marginLeft:"20vw"}}>
              {views}
            </div>
        )
    }
}
export default Game;