import 'react'

class Matas extends Component {

    constructor(){
        super();
        this.state = {
            firstName: 'Matas',
            lastName: 'Bakutis'
        }
    }
    
    addLetter = () => {
        const state = this.state;
        state.lastName = state.lastName + 'n';
        this.setState(state);
    }
    
    render(){
        
        return    (
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <button onClick={this.addLetter}>Add</button>
           )
        
    }

}

import Matas from './'

class Address extends Component {

    constructor(){
        super();
        this.state = {
            street: '11S072 West St.',
            zipCode: '60565',
            state: 'IL',
            city: 'Naperville',
            country: 'USA'
        }
    }

    render (
        <div>
            <Matas />
            <h1>{this.state.street}</h1>
            <h1>{this.state.city}</h1>
            <h1>{this.state.state}</h1>
            <h1>{this.state.zipCode}</h1>
            <h1>{this.state.country}</h1>
        </div>
    )
}

a = [4,1,6,5,-5,0,-7]  == [-7,-5,0,1,4,5,6]

sort = (a) => {
    let sorted = true;
    let array = a;
    while (sorted) {
        sorted = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]){
                sorted = true;
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    return (array);
}

str = 'I am a car'  // car a am I = 'rac// a // ma // I'

reverseSentence = (sent) => {
    let reversedSentence = '';
    function reverse (str){
        for (let i = sent.length - 1; i >= 0; i--) {
            reversedSentence += sent[i];
        }
        return str;
    }
    'rac a ma I'
    
    let word = '';
    for (let i = 0; i =< reversedSentence.length; i++) {
        if (reversedSentence[i] != ' '){
            word += reversedSentence[i];
        }else {
            const reversedWord = reverse(word); // reversedWord = car
            for (let j = 0; j < reversedWord.length; j++) {
                reversedSentence[j] = reversedWord[j];  //
            } // reversedSentence = 'car a am I'
            word = '';
        } 
    }
    
}






