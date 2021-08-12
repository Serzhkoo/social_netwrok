import React, { ChangeEvent } from 'react';

type ProfileStatusPropsType = {
  status: string
  updateUserStatus: (userId: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };

  deActivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    });
  };

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <div>
            <input
              onChange={this.onStatusChange}
              value={this.state.status}
              onBlur={this.deActivateEditMode}
              autoFocus/>
          </div>
          : <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
          </div>}
      </div>
    );
  }
}