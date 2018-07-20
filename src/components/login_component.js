import React from 'react';

export default class Login extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  render()
  {
    return(
      <div>
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
      </div>
    );
  }
}
