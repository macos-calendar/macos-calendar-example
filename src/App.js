import React, { Component } from 'react';
import Calendar from 'macos-calendar';
import './App.css';
import tr from './tr.js';

const AppStyle = {
  width: '600px',
  height: '600px'
};

class App extends Component {
  onEventAdd = (event) => {
    // console.log(event);
  }
  onEventEdit = (event) => {
    // console.log(event);
  }
  onEventRemove = (event) => {
    // console.log(event);
  }
  render() {
    const languages = [{
      name: 'tr',
      value: tr
    }];

    const events = [{
      title: 'Initial Event',
      description: 'Initial Event Description',
      startTime: '18:00',
      endTime: '19:00',
      date: new Date()
    }, {
      title: 'New Year !',
      description: 'Happy new year',
      startTime: '',
      endTime: '',
      date: new Date("2018","1","1")
    }];

    const date = new Date();
    date.setDate(date.getDate() + 40);

    return (
      <div className="App" style={AppStyle}>
        <p>
          {`Double click to day squares to add new event. Single click to the existing events to edit.
             You must type minimum 3 characters to see search results`}
        </p>
        <Calendar
          onEventAdd={this.onEventAdd}
          onEventEdit={this.onEventEdit}
          onEventRemove={this.onEventRemove}
          languages={languages}
          defaultLanguage="tr"
          events={events}
          useStorage
        />
      </div>
    );
  }
}

export default App;
