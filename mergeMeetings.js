//Here is a list of meeting times that occur at a company make the before list into the after list.

let before = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
    {startTime: 2, endTime: 6}
];

let after =   [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
];

function mergeMeeting (arr) {
    let meetingCopy = JSON.parse(JSON.stringify(arr));
    let sortedMeetings = meetingCopy.sort((x, y) => x.startTime > y.startTime ? 1 : -1);
    
    let result = [sortedMeetings[0]];
    
    for ( let i = 1 ; i < sortedMeetings.length ; i ++ ){
        
        let current = sortedMeetings[i];
        let prevMeeting = result[result.length - 1];

        if ( current.startTime <= prevMeeting.endTime ){
            prevMeeting.endTime = Math.max(prevMeeting.endTime, current.endTime);
        } else {
            result.push(current);
        }
    };
    return result
}; 




//////////////////////////////////////////////////////////////////////////////////////////

let array = [1,1,4,4,5,10,10]

findNonRepeat = (array) => {

    let test = (low, high) => {
        
        if(array.length === 0) return null
        if ( low > high ) return null;
        
        let mid = Math.floor((high+low) / 2);
        let current = array[mid];
        
        if( current !== array[mid + 1] && current !== array[mid - 1] ){
            return current;
        } else {
            return test(low, mid - 1) || test(mid + 1, high);
        }
    };
    
    return test(0, array.length - 1);
};


console.log(findNonRepeat(array));


























// Did not get this but here is the correct anwser 

//   function mergeRanges(meetings) {

//     // create a deep copy of the meetings array
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
   
//     var meetingsCopy = JSON.parse(JSON.stringify(meetings));
//     // sort by start time
//     var sortedMeetings = meetingsCopy.slice().sort(function(a, b) {
//         return a.startTime > b.startTime ? 1 : -1;
//     });

    // //initialize mergedMeetings with the earliest meeting
    // var mergedMeetings = [sortedMeetings[0]];

    // for (var i = 1; i < sortedMeetings.length; i++) {

    //     var currentMeeting    = sortedMeetings[i];

    //     var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    //     // if the current and last meetings overlap, use the latest end time
    //     if (currentMeeting.startTime <= lastMergedMeeting.endTime) {

    //         lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);

    //     // add the current meeting since it doesn't overlap
    //     } else {
    //         mergedMeetings.push(currentMeeting);
    //     }
    // }

//     return mergedMeetings;
// // }











