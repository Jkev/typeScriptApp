import * as React from 'react'

const style = {
    backgroundColor:'#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '10px 15px',
    width: 'calc(100% - 30px)',
}

interface IInputProps {
    placeholder?: string;
    label: string;
}

const spanStyle = {
    color: '#777',
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: 900,
} as React.CSSProperties

export default class Input extends React.Component<IInputProps> {
    public render(){
        const {label} = this.props
        return(
            <div>
                <span style={spanStyle}>{label}</span>
                <input {...this.props} style={style} />
            </div>
            
        )
    }
}