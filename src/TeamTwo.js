import React, { Component } from 'react'

class TeamTwo extends Component{
    constructor(props) {
        super(props);
        

        this.state = {
            teamTwoName: 'Not set',
            teamTwoScore: 0
        }

        this.state.teamTwoName = prompt('Enter Team №2 Name', 'Team2');

        this.handelIncremetn = this.handelIncremetn.bind(this)
        

    }

    handelIncremetn(){
        this.setState({
            teamTwoScore: this.state.teamTwoScore + 1
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
                {this.state.teamTwoScore} :
                {this.state.teamTwoName}
                <button onClick={this.handelIncremetn} className="btn btn-success">+</button>
            </div>
        )
    }
}


export default TeamTwo;