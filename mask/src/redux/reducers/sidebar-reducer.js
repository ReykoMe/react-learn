const initState = {
  friends: [
    {id: 1, firstName: "Nikola Tesla", status: "Direct Current in our Houses"},
    {id: 2, firstName: "Dmitriy Mendeleev", status: "Let me more Vodka"},
    {id: 3, firstName: "Isak Newton", status: "All around is a round"}
  ]
}

const sidebarReducer = (state = initState, action) => {
  return state;
}

export default sidebarReducer;