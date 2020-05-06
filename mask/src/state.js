const State = {
    profile: {
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

}

export default State;