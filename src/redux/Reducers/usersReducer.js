const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: "1",
            userName: "Koko",
            description: "I like Koko",
            location: {country: "Ukraine", city: "Zhytomir"},
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC7Upmjq-jwWf1b--JqHP7Q3SD31AT6RJwQ&usqp=CAU",
            followed: false
        },
        {
            id: "2",
            userName: "Jambo",
            description: "I like Jambo",
            location: {country: "Ukraine", city: "Kiev"},
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC7Upmjq-jwWf1b--JqHP7Q3SD31AT6RJwQ&usqp=CAU",
            followed: true
        },
        {
            id: "3",
            userName: "Rico",
            description: "I like Rico",
            location: {country: "Ukraine", city: "Harkiv"},
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC7Upmjq-jwWf1b--JqHP7Q3SD31AT6RJwQ&usqp=CAU",
            followed: false
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    debugger;
    switch (action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId)
                        return {...user, followed: true};
                    return user;
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId)
                        return {...user, followed: false};
                    return user;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, action.users]}
        default:
            return state;
    }
}

export const setUsersAC = (users) =>{
    return {type: SET_USERS, users: users};
}
export const followAC = (userId) =>{
    return {type: FOLLOW, userId: userId};
}
export const unFollowAC = (userId) =>{
    return {type: UNFOLLOW, userId: userId};
}

export default usersReducer;