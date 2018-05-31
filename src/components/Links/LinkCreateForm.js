import React, {Component} from 'react';

// todo: add validation
class LinkCreateForm extends Component {

    constructor(props) {
        super(props);
    }

    onInputChange = (event) => {
        this.props.onInputChange(event.target.value, event.target.name);
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
                           value={this.props.text}/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">tags</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small"
                           aria-describedby="inputGroup-sizing-sm"
                           name='tags'
                           onChange={(e) => this.onInputChange(e)}
                           value={this.props.tags}/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">defer by</span>
                    </div>
                    <input type="datetime-local" className="form-control" aria-label="Small"
                           aria-describedby="inputGroup-sizing-sm"
                           name='deferByTime'
                           onChange={(e) => this.onInputChange(e)}
                           value={this.props.deferByTime}/>
                </div>
                <button className="btn btn-primary" onClick={this.props.onSave}>save</button>
            </div>
        )
    }

}

export default LinkCreateForm