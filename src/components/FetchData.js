import React from "react";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    // const url = "https://api.randomuser.me/";
    const url = "https://api.the-odds-api.com/v3/odds/?sport=UPCOMING&region=eu&mkt=h2h&apiKey=5857547a906e62baf8fed4502a23bab0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ match: data.data[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    // if (!this.state.person) {
    //   return <div>didn't get a person</div>;
    // }

    return (
      <div>
        <div>{this.state.match.sport_nice}</div>
        <br></br>
        <div>{this.state.match.teams[0] + " VS " + this.state.match.teams[1]}</div>
        <br></br>
        <div>{this.state.match.sites[0].site_nice + ": " + this.state.match.sites[0].odds.h2h}</div>

      </div>
    );
  }
}
