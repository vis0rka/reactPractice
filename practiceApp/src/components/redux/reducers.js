
const initialState = {
  posts: [
    {
      "id": 1,
      "title": "Hand of Death, The (Shao Lin men)",
      "body": "sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede"
    }, {
      "id": 2,
      "title": "Geronimo",
      "body": "vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit"
    }, {
      "id": 3,
      "title": "K-11",
      "body": "nulla sed vel enim sit amet nunc viverra dapibus nulla"
    }, {
      "id": 4,
      "title": "Juggernaut",
      "body": "enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis"
    }, {
      "id": 5,
      "title": "Where Are the Dreams of Youth? (Seishun no yume imaizuko)",
      "body": "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id"
    }, {
      "id": 6,
      "title": "Beyond Therapy",
      "body": "mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis"
    }, {
      "id": 7,
      "title": "Nazis: A Warning from History, The",
      "body": "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce"
    }, {
      "id": 8,
      "title": "Caught Inside",
      "body": "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut"
    }, {
      "id": 9,
      "title": "Celebration, The (Festen)",
      "body": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla"
    }, {
      "id": 10,
      "title": "Night of the Living Dead",
      "body": "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan"
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  console.log(action)
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(e => {
      return action.id !== e.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  if (action.type === 'ADD_POST') { 
    let newpost = {
      id: action.id,
      title: action.title,
      body: action.body
    };
    console.log(newpost)
    return {
      posts: [...state.posts, newpost]
    }
  }
  return state;
};




export default rootReducer;