let Store = {
    _state: {
        likesGen() {
            return Math.floor(Math.random() * 10);
        },
        profile: {
            newText: "",
            wallPosts: [
                {id: 1, author: "Василий Чичкалкин", message: "Бородульку тебе", likes: 5},
                {id: 2, author: "Вероника Бусилкина", message: "I KNOW!!!", likes: 11},
                {id: 3, author: "Аркадий Запоротый", message: "Пойдем-ка покурим-ка", likes: 32},
                {id: 4, author: "Зинаида Зидановна", message: "Верни сотку", likes: 0},
                {id: 5, author: "Алкобот Дизенфектиконович", message: "Ктулху зохавит тебя", likes: 21},
            ],
        },
        messenger: {
            newMessageText: "",
            messagesData: [
                {id: 1, message: "It's Posts from: %username", likesCount: 23},
                {id: 2, message: "Message from another %username", likesCount: 11},
                {id: 3, message: "Shmyga", likesCount: 3},
                {id: 4, message: "Ololol", likesCount: 118},
                {id: 5, message: "Bingo", likesCount: 0}
            ],

            usersData: [
                {id: 1, name: "Anatoly"},
                {id: 2, name: "Dmytri"},
                {id: 3, name: "Oksana"},
                {id: 4, name: "Gennadi"},
                {id: 5, name: "Garry"},
                {id: 6, name: "Fedor"}
            ]
        },
        sidebar: {
            friends: [
                {id: 1, firstName: "Nikola Tesla", status: "Direct Current in our Houses"},
                {id: 2, firstName: "Dmitriy Mendeleev", status: "Let me more Vodka"},
                {id: 3, firstName: "Isak Newton", status: "All around is a round"}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._state.profile.wallPosts.push(
                {
                    id: this._state.profile.wallPosts.length + 1,
                    author: 'Сергей Гумноедов',
                    message: this._state.profile.newText,
                    likes: this._state.likesGen()
                }
            );
            console.log(`Текст: ${this._state.profile.newText} добавлен в Store._state.profile.newText`);
            this._state.profile.newText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-TEXT') {
            this._state.profile.newText = action.newText;
            console.log(this._state.profile.newText);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-DIALOG-TEXT') {
            this._state.messenger.newMessageText = action.dialogText;
            console.log(this._state.messenger.newMessageText);
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let text = this._state.messenger.newMessageText;
            this._state.messenger.messagesData.push({
                id: this._state.messenger.messagesData.length + 1,
                message: text,
                likesCount: this._state.likesGen()
            })
            this._state.messenger.newMessageText = '';
            this._callSubscriber(this._state);

        }
            }
}

export const addPostAC = () => ({type: 'ADD-POST'})
export const updateTextAC = (text) => ({type: 'UPDATE-TEXT', newText: text})
export const updateInputTextAC = (text) =>  ({type: 'UPDATE-DIALOG-TEXT', dialogText: text})
export const sendMessageAC = () => ({type: "SEND-MESSAGE"})

export default Store;
window.store = Store