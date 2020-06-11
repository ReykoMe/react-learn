import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToProps = (state) => ({
    authorised: state.auth.authorised
})
//Хок - получает компонент и возвращает новый компонент на основе входящих данных. Внутри может быть как класс, так и функция.
export const CheckAuth = (Component) => {
    class RedirectComponent extends React.Component {
        
        render() {
            if (!this.props.authorised) return <Redirect to = {"/login"}/>
            // Так как CheckAuth служит всего лишь оболочкой, все входящие данные мы прокидываем в пропсы без разбора
            return <Component {...this.props}/>
        }
    }
    //создаем новый компонент-обертку на основе входящих данных, подключаем его к стору и передаем в пропсах состояние авторизации
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    //возвращаем подключенный к стору компонент
    return ConnectedRedirectComponent
}