import React, {Component} from 'react';

// todo: add validation
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
        if(event.target.name === 'tags'){
            this.setState({
                tags: event.target.value.split(',')
            })
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
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
                           name='text' placeholder="Enter url"
                           onChange={(e) => this.onInputChange(e)}
                           value={this.state.text}/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">tags</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small"
                           aria-describedby="inputGroup-sizing-sm"
                           name='tags' placeholder="Comma seperated"
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
                <button className="btn btn-primary" onClick={() => this.props.onSave(this.state)}>save</button>
            </div>
        )
    }

}

export default LinkCreateForm