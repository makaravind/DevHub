import React, {Component} from 'react';

class LinkCreateForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            tags: '',
            deferByTime: '',
        }
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onSave = () => {
      // update the parent
    };

    render() {
        return (
            <div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">text</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small"
                           aria-describedby="inputGroup-sizing-sm"
                           name='text'
                           onChange={(e) => this.onInputChange(e)}
                           value={this.state.text}/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">tags</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small"
                           aria-describedby="inputGroup-sizing-sm"
                           name='tags'
                           onChange={(e) => this.onInputChange(e)}
                           value={this.state.tags}/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">defer by</span>
                    </div>
                    <input type="datetime-local" className="form-control" aria-label="Small"
                           aria-describedby="inputGroup-sizing-sm"
                           name='deferByTime'
                           onChange={(e) => this.onInputChange(e)}
                           value={this.state.deferByTime}/>
                </div>
                <button className="btn btn-primary">save</button>
            </div>
        )
    }

}

export default LinkCreateForm