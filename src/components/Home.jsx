import React, {Component} from 'react';

const dummyData = [
    {
        name: 'elephant',
        features: ['trunk', 'tail']
    },
    {
        name: 'lion',
        features: ['mane', 'roar']
    },
    {
        name: 'snake',
        features: ['venom', 'bite']
    }
]

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: dummyData
        };
    }
    render() {
        console.log(this.state.data)
        return (
           <div>
               {
                   data.map((animal, key) => {
                       return <div key={key} onClick={() => someFunc(key)}>I am an {animal.name} and I have a 
                           {
                               animal.features.map((feature, key) => <span key={key}>{' ' + feature + ', '}</span>)
                           }
                           </div>
                   })
               }
           </div>
        )
    }
}

export default Home;