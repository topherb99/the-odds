import React from "react";

export default class FetchData extends React.Component {
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

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    // if (!this.state.person) {
    //   return <div>didn't get a person</div>;
    // }

    return (
      <div>
        <table>
          <tr>
            <th>Sport</th>
            <th>Teams</th>
            <th>Bookmaker</th>
            <th>Odds</th>
          </tr>
          <tr>
            <td>{this.state.match.sport_nice}</td>
            <td>{this.state.match.teams[0] + " VS " + this.state.match.teams[1]}</td>
            <td>{this.state.match.sites[0].site_nice}</td>
            <td>{this.state.match.sites[0].odds.h2h}</td>
          </tr>
        </table>
      </div>
    );
  }
}
