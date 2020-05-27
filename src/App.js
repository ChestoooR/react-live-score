import React, { Component } from 'react'

// const product = <>
//     <div>1.</div>
//     <div>iPhone X</div> -
//     <div>1000$</div>
// </>;

// function myProduct(props) {
//     console.log(props, 'props')
//     const {name, lastName, children} = props;
//     return (
//         <div>
//             <div>{name}</div>
//             <div>{lastName}</div>
//             <div>{children}</div>
//         </div>
//     )
// }

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: 'Samvel',
//             lastName: 'Mardanyan',
//             age: 23
//         }
//     }
    
//     handleClick = () => {
//         console.log(this.state.age);

//         this.setState( {
//             age: 24,
//         }, () => {
//             console.log(this.state.age)
//         })
//     }


//     render() {
        

//         const {name, lastName , age} = this.state;
//         const {hobby} = this.props;
//         return <div>{name} - {lastName} - {hobby} - <span onclick="handleClick()">{age}</span></div>
//     }
// }


// export default myProduct;
// export default App;


// ------------------------------------------------


class App extends Component{
    constructor(props) {
        super(props);
        console.log('construcotr')
        console.log(props, 'construcotr')

        this.state = {
            counter: 0,
            anotherValue: 'John'
        }

        this.handelIncremetn = this.handelIncremetn.bind(this)
    }

    handelIncremetn(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        console.log('render')
        return(
            <div>
                {this.state.counter}
                <button onClick={this.handelIncremetn}>increment</button>
            </div>
        )
    }
}


export default App;