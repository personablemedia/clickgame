import React, { Component } from "react";
import Card from "./components/Card/Card";
import Section from "./components/Section";
import Title from "./components/Title";
import cardInfo from "./cardInfo.json";
import "./App.css";


class App extends Component {
  // Setting this.state.cardInfo to json file
  state = {
    curScore: 0,
    topScore: 0,
    cardInfo
  };

  gameEnds = () => {
    //Current Score is greater than Top Score
    if(this.state.curScore > this.state.topScore) {

      //At this state, the Top Score will be score
      this.setState({topScore: this.state.curScore}, function(){
        console.log(this.state.topScore);
      });
    }

    //Loop through each Card at the current state
    this.state.cardInfo.forEach(card => {

      //json count is = 0 
      card.count = 0;
    });


    // Alert Game Over with the Score
    // alert(`Game Over!: \n You Scored: ${this.state.curScore}`);
      this.setState({curScore:0});
      return true;
  }



  // Scoring recieved the id from above 
  scoringMeter = id => {

    // Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
    this.state.cardInfo.find((obj, inj) => {

      //if id you clicked on is = to object 
      if(obj.id === id) {
        if(cardInfo[inj].count === 0) {

          //the cardInfo count on json is equal to the cardInfo json + 1 (keeping track of each card clicked on)
          cardInfo[inj].count = cardInfo[inj].count + 1;
          this.setState({curScore: this.state.curScore + 1}, function(){
            
            console.log(this.state.curScore);
          });

          this.state.cardInfo.sort(() => Math.random() - 0.5)
          return true;

        } else {
          //Rendering the score 
          this.gameEnds();
        }
      }
    });
  }

  render() {
    return (
      <div>
        
        {/* Rendering the component and grabbing the current and top score under this state */}
        <Title
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Section>
          {this.state.cardInfo.map(card => (
            <Card
              // randomImages={this.randomImages}
              id={card.id}
              key={card.id}
              image={card.image}
              scoringMeter={this.scoringMeter}
            />
          ))}
        </Section>
      </div>
    );
  }
}

export default App;