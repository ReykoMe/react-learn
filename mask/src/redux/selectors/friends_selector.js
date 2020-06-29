import { createSelector } from 'reselect'

const getFriends = (state) => state.friends.users 
export const getTotalUsers = (state) => state.friends.totalUsers
export const getFriendsCount = (state) => state.friends.count
export const getCurrentPage = (state) => state.friends.currentPage
export const getGettingData = (state) => state.friends.gettingData
export const getFollowing = (state) => state.friends.following

export const getFriendsSelector = createSelector(getFriends, (friends) => {
    return friends
})
