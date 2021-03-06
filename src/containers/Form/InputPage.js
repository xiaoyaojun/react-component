/**
 * Created by Aus on 2017/7/17.
 */
import React from 'react'
import ListTitle from '../../components/DataDisplay/ListTitle/'
import {Input} from '../../components/Form/'
import Tools from '../../components/Tools/Tools'

class InputPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value1: 'abc',
            value2: 'ABC',
            value3: '一二三'
        };
    }
    handleChange (type, value) {
        this.setState({
            [type]: value.value
        });
    }
    render () {
        const {value1, value2, value3} = this.state;

        return (
            <div className="page input">
                <h1 className="title">
                    <i className="fa fa-home" onClick={()=>{Tools.linkTo("/index")}}></i>
                    Input
                </h1>

                <ListTitle title="普通" />

                <div className='zby-form-box'>
                    <Input labelName="受控组件" value={value1} required placeHolder="受控组件" onChange={this.handleChange.bind(this, 'value1')} />
                    <Input labelName="不受控组件" value={value2} placeHolder="不受控组件" controlled={false} />
                    <Input labelName="readOnly" value={value3} readOnly placeHolder="readOnly" />
                </div>
            </div>
        )
    }
}

export default InputPage