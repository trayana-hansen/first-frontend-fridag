const myTestarray = ['tiger', 'elefant', 'edderkop', 'koala'];
const myTestObject = {
    elephant: { name: "elefant", picture: "url", description: "big fellow" },
    tiger: { name: "tiger", picture: "url", description: "big fellow" },
    spider: { name: "edderkop", picture: "url", description: "ugly fellow" },
    koala: { name: "koala", picture: "url", description: "big fellow" },
};


const myApp = document.getElementById("app"):



// clears and creates a simple headline with the textmsg in a h2 in the supplied id
function simpleCard(textMsg, myId) {
    let myParent = document.getElementById(myId);
    myParent.innerHTML = '';
    let myHeadline = document.createElement('h2');
    myHeadline.innerText = textMsg;
    myParent.appendChild(myHeadline);

}