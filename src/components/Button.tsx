import * as React from 'react'

const style = {
    backgroundColor: '#00D1B2',
    border: '0px',
    padding: '10px 15px',
    borderRadius: '4px',
    color: '#fff'
}

export default class Container extends React.Component {
    public render(){
        return(
            <button {...this.props} style={style} />
        )
    }
}