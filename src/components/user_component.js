import React from 'react';
import Workout from './workout_component'
export default class User extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      name: "Jane",
      lastName: "Doe",
      email: "jane_doe@jd.com",
      workouts: [
        <Workout />
      ]
    };
  }
  render()
  {
    const workouts = this.state.workouts.map((workout, index) =>
    <li>
      <Workout key={index.toString()} />
    </li>
    );
    return(
      <div>
        <h3>{this.state.name + " " + this.state.lastName}</h3>
        <span>{this.state.email}</span>
        <ul>
          {workouts}
        </ul>
      </div>
    );
  }
}
