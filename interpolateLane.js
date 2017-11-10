var carGraph = function(points, fraction) {
  var dist = [];
  var finalDist = 0;

  for (var i = 1; i < points.length; i++) {
    var y = points[i].y - points[i-1].y;
    var x = points[i].x - points[i-1].x;

    if (x === 0) {
      dist.push(y);
      if (dist[dist.length-1] < 0) {
        dist[dist.length-1] -= dist[dist.length-1];
      }
      finalDist += dist[dist.length - 1];

    } else if (y === 0) {
      dist.push(x);
      if (dist[dist.length - 1] < 0) {
        dist[dist.length - 1] -= dist[dist.length - 1];
      }
      finalDist += dist[dist.length - 1];

    } else {
      dist.push(Math.hypot(x, y));
      finalDist += dist[dist.length - 1];
    }
  }

  var carDist = fraction * finalDist;

  for (var j = 0; j < dist.length; j++) {
    if (carDist - dist[j] < 0) {
      var rat = dist[j] - carDist;
      rat = dist[j] - rat;

      var finY = ((rat/dist[j]) * (points[j+1].y - points[j].y)) + points[j].y;
      var finX = ((rat/dist[j]) * (points[j+1].x - points[j].x)) + points[j].x;

      return {x: finX, y: finY};
      // to get heading, 
      // in x and change in y, if both are positive we are heading in a positive direction 
      // we know which angle of 
      // cos sine of y will give us the angle we are heading in
    }
    carDist -= dist[j];
  }
};

const testPoints1 = [{x: 3, y: 4}, {x: 6, y: 8}, {x: 6, y: 11}];

const testFraction1 = ; // TODO: pick a fraction



console.log(carGraph([{x: 3, y: 4}, {x: 6, y: 8}, {x: 6, y: 11}], 0.5));


// interpolateLane
// lanePoints: a list waypoints that are used to represent the center line
//     of a lane on the road
// fraction: the position of the car along the lane, represented as a fraction
//     from 0 → 1, with 0 being the start of the lane and 1 being the end
//
// return: the x and y coordinates of the position of the car and its heading

const interpolateLane = (lanePoints, fraction) => {
  // TODO: interpolate along the lanePoints list to the fractional
  // distance and return the x, y, and heading
  // let x, y, heading;

};





