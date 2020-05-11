let Store = {
    _state: {
        profile: {
            newText: "",
            wallPosts: [
                {id: 1, author: "Василий Чичкалкин", message: "Бородульку тебе"},
                {id: 2, author: "Вероника Бусилкина", message: "I KNOW!!!"},
                {id: 3, author: "Аркадий Запоротый", message: "Пойдем-ка покурим-ка"},
                {id: 4, author: "Зинаида Зидановна", message: "Верни сотку"},
                {id: 5, author: "Алкобот Дизенфектиконович", message: "Ктулху зохавит тебя"},
            ],
        },
        messenger: {
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
                    message: this._state.profile.newText
                }
            );
            console.log(`Текст: ${this._state.profile.newText} добавлен в Store._state.profile.newText`);
            this._state.profile.newText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-TEXT') {
            this._state.profile.newText = (action.newText);
            console.log(this._state.profile.newText);
            this._callSubscriber(this._state);
        }
            }

}

export default Store;

window.store = Store