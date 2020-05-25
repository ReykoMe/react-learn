const initState = {
    hooksTesting: 'Hello, you are yousing hooks now'
}

const HooksReducer = (state = initState, action) => {
   switch(action) {
       case "SHOW_OLD_STATE":
           console.log('You call OLD_STATE');
           break
        case "SHOW_NEW_STATE":
            console.log("it's a new State")
            break
        default: console.log('NO CHANGES')
   }
   return state;
}

export default HooksReducer;