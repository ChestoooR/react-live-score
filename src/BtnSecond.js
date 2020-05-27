import React, { Component } from 'react'

class BtnSecond extends Component{
    constructor(props) {
        super(props);
        

        this.state = {
            teamSecondScore: 0
        }

        this.handelIncremetn = this.handelIncremetn.bind(this)
        

    }
    handelIncremetn(){
        this.setState({
            teamSecondScore: this.state.teamSecondScore + 1
        })

        var animationIMG = document.getElementById('animationIMG');

            animationIMG.style.display = 'block';
            setTimeout(() => {
                animationIMG.style.opacity = '1';
            }, 0);
            setTimeout(() => {
                animationIMG.style.opacity = '0';
            }, 2000);
            setTimeout(() => {
                animationIMG.style.opacity = '0';
                animationIMG.style.display = 'none';
            }, 2500);
    }

    render(){
        return(
            <div className="col text-left">
                <button onClick={this.handelIncremetn} className="btn btn-success">+</button>
            </div>
        )
    }
}


export default BtnSecond;