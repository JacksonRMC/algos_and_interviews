var coinChange = function(coins, amount) {    
    var dp = [0];
    for(var i = 1; i <= amount; i++) {
        dp.push(-1);
    }
    

    for(var a = 0; a < amount; a++) {
        if(dp[a] < 0) {
            continue;
        }
        
        for(var c = 0; c < coins.length; c++) {
            var coin = coins[c];
            
            if((a + coin) > amount) {
                continue;
            }
            
            // if(dp[a + coin] < 0 || dp[a + coin] > dp[a] + 1) {
            if(dp[a + coin] < 0) {
                dp[a + coin] = dp[a] + 1;
            }
        }
    }
    console.log(dp)
    console.log(dp[amount])
    return dp;
};

// console.log(coinChange([1,5,10, 25],25))


var numToLetters = {
    '0': ' ',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

function phoneLetters(digits){
    let numbers = digits.split('');
    let result = [];
    let num1 = numbers[0];
    let num2 = numbers[1];


    let test = function(digits, idx, current){
        if( idx === digits.length ){
            result.push(current);
            return;
        }

        let num = numToLetters[digits[idx]];

        for(let i = 0 ; i < num.length ; i ++ ){
            test(digits, idx + 1, current + num[i]);
        }
    }
    test(digits, 0, '');
    return result

};


console.log('Phone Numbers to Letters: ', phoneLetters('25'));

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
function anagram(string, str){
    return string.split('').sort().join('') === str.split('').sort().join('')
}

function findSubstrings(string, prefix){
    let result = [];

    for( let i = 0 ; i < string.length ; i ++ ){
        if( prefix.includes(string[i]) ) {
        let possible = string.slice(i, i + prefix.length);

            if ( anagram(prefix, possible) ) {
                result.push(i);
            }
        }
    }
    return result;
};

console.log(findSubstrings("cbaebabacd", "abc"))


////////////////////////////////////////////////////////////////////////////////////////////////////////
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

function mergeMeetings(timesArray){
    let meetings = JSON.parse(JSON.stringify(timesArray));
    meetings.sort((x, y) => x.startTime > y.startTime)

    let newTimes = [meetings[0]];

    for( let i = 1 ; i < timesArray.length  ; i ++ ){
        
        let prevMeeting = newTimes[newTimes.length - 1];
        let current = meetings[i];

        if( current.startTime <= prevMeeting.endTime ){
            prevMeeting.endTime = Math.max(meetings[i].endTime, meetings[i - 1].endTime);

        } else {
            newTimes.push(current);
        }
    }
    return newTimes
}

console.log(mergeMeetings(before));


////////////////////////////////////////////////////////////////////////////////////////////////////////

class DoubleNode {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity){
        this.capacity = capacity;
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.map = new Map();
    }
    
    set(key, value){
        if( this.capacity <= 0 ){
            return;
        }

        if( !this.map.get(key) ){
            if ( this.size === this.capacity ){
                this.removeLast();
                this.size--;
            }

            this.map.set(key, new DoubleNode(key, value));
            this.size++;

        }

        this.moveToHead(key);

    }  

    get(key){
        if( !this.map.get(key) ){
            return -1;
        }

        let item = this.map.get(key);

        this.moveToHead(key);

        return item.value;
    }  

    removeLast(){
        if(this.tail === null){
            return;
        }
        

        let item = this.tail.prev;
       
        this.map.delete(item.key);
        
        if( item === null ){
            this.head = this.tail = null;
            return
        }

        this.tail.prev = null;
        item.next = null;
        this.tail = item;
    }

    moveToHead(key){
        let moved = this.map.get(key);
        if( this.head === null &&  this.tail === null ){
            this.head = this.tail = moved;
        }

        if( moved === this.head){
            return;
        }

        if( moved === this.tail ){
            this.tail = moved.prev;
        }

        if ( moved.prev ){
            moved.prev.next = moved.next;
        }

        if( moved.next ){
            moved.prev.next = moved.prev;
        }

        moved.prev = null;
        moved.next = this.head;
        this.head.prev = moved;
        this.head = moved;

    }
}

var cache = new LRUCache(3); // limit of 3 items
 cache.set("item1", 1);
 cache.set("item2", 2);
 cache.set("item3", 3);
 cache.set("item4", 4);

 
 console.log(cache.get("item3")); //=> 3
 console.log(cache.get("item2")); //=> 2
 // item1 was removed because it was the oldest item by insertion/usage
 
  // item4 is removed to make room, because it is the oldest by usage,
  // which takes priority.
cache.set("item5", 5);
 
  // item3 is also removed, because it was retrieved before item2 was
  // last retrieved.
cache.set("item6", 6);

 console.log(cache.tail); //=> null












