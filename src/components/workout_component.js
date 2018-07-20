import React from 'react';

export default class Workout extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      name: "No Exercise",
      reps: 0,
      weights: 0
    };
  }
  render()
  {
    return(
      <div>
        <h3 className="wo-name">{this.state.name}</h3>
        <h3 className="wo-reps">{this.state.reps}</h3>
        <h3 className="wo-weights">{this.state.weights}</h3>
      </div>
    );
  }
}
