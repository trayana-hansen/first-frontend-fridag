// data to have fun with
const myTestarray = ['array tiger', 'array elefant', 'array edderkop', 'array koala'];
const myTestObject = {
    elephant: { name: 'elefant', picture: 'url', description: 'big fellow' },
    tiger: { name: 'tiger', picture: 'url', description: 'big fellow' },
    spider: { name: 'edderkop', picture: 'url', description: 'ugly fellow' },
    koala: { name: 'koala', picture: 'url', description: 'big fellow' },
};


// the app lives here
const myApp = document.getElementById('app');





// for loop
for (let i = 0; i < 5; i++) {
    console.log('step ' + i);
}



// while loop remember to make the expression get to false otherwise the browser crashes.
let i = 0;
while (i < 10) {
    console.log("The number is " + i);
    i++;
}


/* // for in loop used with arrays
for (let myIndex in myTestarray) {
    console.log(myTestarray[myIndex]);
    testCard(myTestarray[myIndex], 'app')
}


// for loop to use with objects and keys

for (let myIndex in myTestObject) {
    console.log(myTestObject[myIndex].name);
    testCard(myTestObject[myIndex].name, 'app')
} */





// debug functions ----------------------------------------------------------------------------
//  creates a simple headline with the textmsg in a h2 in the supplied id
// testCard('weee', 'app');
function testCard(textMsg, myId, clearContainer) {
    let myParent = document.getElementById(myId);

    // clear if clearContainer is set
    if (clearContainer) {
        myParent.innerHTML = '';
    }

    // create elements
    let myHeadline = document.createElement('h2');
    myHeadline.innerText = textMsg;
    myParent.appendChild(myHeadline);

}