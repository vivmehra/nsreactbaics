import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Button from './Button/Button';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'vivek', age: 34 },
      { name: 'arpit', age: 32 },
      { name: 'chandan', age: 29 },
    ],
    otherState: 'some thing else',
    showPersons: false,
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: 'arpit', age: 32 },
        { name: 'chandan', age: 31 },
      ],
    });
  };

  nameChangeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      persons: [
        { name: 'vivek', age: 34 },
        { name: e.target.value, age: 32 },
        { name: 'chandan', age: 31 },
      ],
    });
  };

  togglePersonHandler = () => {
    const personShown = this.state.showPersons;
    this.setState({ showPersons: !personShown });
  };

  deletePersonHandler = (personIndex) => {
    console.log(personIndex);
    const personsArr = [...this.state.persons];
    personsArr.splice(personIndex, 1);
    this.setState({ persons: personsArr });
  };
  render() {
    console.log('state in render', this.state);
    const styleX = {
      backgroundColor: 'pink',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '5px',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                fname={person.name}
                age={person.age}
                abc={this.switchNameHandler}
                changed={this.nameChangeHandler}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}

          {/* <Person
            fname={this.state.persons[0].name}
            age={this.state.persons[0].age}
            abc={this.switchNameHandler}
            changed={this.nameChangeHandler}
          />

          <Person
            fname={this.state.persons[1].name}
            age={this.state.persons[1].age}
            abc={this.switchNameHandler}
            changed={this.nameChangeHandler}
          />
          <Person
            fname={this.state.persons[2].name}
            age={this.state.persons[2].age}
            abc={this.switchNameHandler}
            changed={this.nameChangeHandler}
          /> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am your first React Component</h1>
        <p>This is working!!!</p>
        <button
          style={styleX}
          onClick={() => this.switchNameHandler('vivek m')}
        >
          Switch Name
        </button>
        <button style={styleX} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        <p>{this.state.otherState}</p>
        {persons}
        <Button />
      </div>
      // React.createElement(
      //   'div',
      //   { className: 'App' },
      //   React.createElement('h1', null, 'Hi, I am your first React Component')
      // )
    );
  }
}

export default App;
