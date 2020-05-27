import React, { Component } from 'react'

class BtnFirst extends Component{
    constructor(props) {
        super(props);
        

        this.state = {
            teamOneScore: 0
        }

        this.handelIncremetn = this.handelIncremetn.bind(this)
        

    }
    handelIncremetn(){
        this.setState({
            teamOneScore: this.state.teamOneScore + 1
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
            <div>
                <div className="col text-left d-inline">
                    <button onClick={this.handelIncremetn} className="btn btn-success">+</button>
                </div>
                {this.state.teamOneScore}
            </div>
        )
    }
}


export default BtnFirst;