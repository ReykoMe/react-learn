import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToProps = (state) => ({
    authorised: state.auth.authorised
})
//Хок - получает компонент и возвращает его. Внутри может быть как класс, так и функция.
export const CheckAuth = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.authorised) return <Redirect to = {"/login"}/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    //Возвращаем переданный компонент
    return ConnectedRedirectComponent
}