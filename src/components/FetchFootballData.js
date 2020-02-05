import React from "react";

export default class FetchFootballData extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    // const url = "https://api.randomuser.me/";
    const url = "https://api.the-odds-api.com/v3/odds/?sport=soccer_epl&region=uk&apiKey=5857547a906e62baf8fed4502a23bab0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ match: data.data[0], loading: false });
  }

  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      let sport = []
      let home_team = []
      let teams = []
      let bookmaker = []
      let odds = []
      //Inner loop to create children
      for (let j = 0; j < 1; j++) {
        sport.push(<td>{this.state.match.sport_nice}</td>)

        teams.push(<td>{this.state.match.teams[0]}<br></br><br></br>{this.state.match.teams[1]}</td>)

        home_team.push(<td>{this.state.match.home_team}</td>)

        bookmaker.push(<td>{this.state.match.sites[i].site_nice}</td>)

        odds.push(<td>{this.state.match.sites[i].odds.h2h[0] + ", " + this.state.match.sites[i].odds.h2h[1] + ", " + this.state.match.sites[i].odds.h2h[2]}</td>)

      }


      //Create the parent and add the children
      table.push(<tr>
                    {sport}
                    {teams}
                    {home_team}
                    {bookmaker}
                    {odds}
                 </tr>)
    }
    return table
  }

  render() {
    if (this.state.loading) {
      return <div>loading Football odds...</div>
    }

    if (!this.state.match) {
      return <div>wrong api call</div>;
    }

    return (

      <table>
        <tr>
          <th>League</th>
          <th>Teams</th>
          <th>Home</th>
          <th>Bookmaker</th>
          <th>Odds (W, D, L)</th>
        </tr>
        {this.createTable()}
      </table>
    );
  }
}
