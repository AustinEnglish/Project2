import React, { Component } from 'react';



//single Restaurant page
class Cuisines extends Component {
  state = {
   
    
  }



  render() {
    return (
      <div id='rest-contain'>
        <div className="single-rest-div">
        <h1 className="single-title"> Top Cuisines for {this.props.cityName}</h1>
          <table className="table table-bordered restTable">
            <thead>
              <tr className="table-header-background">
                <th><h1>Foods</h1></th>
                <th><h1>Area Popularity</h1></th>
                <th><h1>Nearby Restaurant</h1></th>
                <th><h1>Night Life Activity</h1></th>
              </tr>
            </thead>
            <tbody className="table-body-background">
              {this.props.cuisines.map((cuisine, index) => {
                return (
                  <div key={index}>
                    <h2>{cuisine}</h2>
                  </div>
                )
              })}
              <td><h3>{this.props.popularity}/5.0</h3></td>
              <td><h4>{this.props.numRest}</h4></td>
              <td><h4>{this.props.nightLifeIndex}/5.0</h4></td>
            </tbody>
          </table>
          {/* <a href={restaurant.restaurant.photos_url} target="_blank">Menu</a> */}
        </div>
      </div>
    );
  }
}

export default Cuisines;