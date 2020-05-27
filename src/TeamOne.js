import React, { Component } from 'react'

class TeamOne extends Component{
    constructor(props) {
        super(props);
        

        this.state = {
            teamOneName: 'Not set',
            teamOneScore: 0
        }

        this.state.teamOneName = prompt('Enter Team №1 Name', 'Team1')

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
                <button className="btn btn-success" onClick={this.handelIncremetn}>+</button>
                {this.state.teamOneName}: {this.state.teamOneScore} 
            </div>
        )
    }
}


export default TeamOne;