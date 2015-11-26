import React from 'react';
import BackboneReact from '../../lib/backbonereact';
import actions from '../../actions/room';

class RoomItem extends React.Component {
  roomId() {
    return this.props.model.id;
  }

  selected(e) {
    e.preventDefault();
    actions.selectRoom(this.props.model);
  }

  render() {
    var progressStyle = {
      width: '48%'
    }
    return (
      <tr key={this.roomId()}>
        <td className="project-status">
          <span className="label label-primary">Active</span>
        </td>
        <td className="project-title">
          <a href="project_detail.html">{this.props.model.title}</a>
          <br/>
          <small>Created 14.08.2014</small>
        </td>
        <td className="project-actions">
          <a href="#" className="btn btn-white btn-sm"><i className="fa fa-folder"></i>View</a>
          <a href="#" className="btn btn-white btn-sm" onClick={this.selected.bind(this)}><i className="fa fa-pencil"></i>Join</a>
        </td>
      </tr>
    );
  }
}

export default BackboneReact(RoomItem);
