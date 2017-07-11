import React, { Component } from 'react';
import {connect} from 'react-redux';
import {writeChannel, postChannel} from '../store'

export function NewChannelEntry (props) {
  console.log("this is", props.handleSubmit)
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input 
          onChange={props.handleChange}
          className="form-control"
          type="text"
          name="channelName"
          value={props.newChannelEntry}
          placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

const mapStateToProps = function (state) {
  return {
    newChannelEntry: state.newChannelEntry
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
     handleSubmit (event) {
      console.log('fiji')
      event.preventDefault()
      const name = event.target.channelName.value
      dispatch(postChannel({name}, ownProps.history))
    },
    handleChange (event) {
      dispatch(writeChannel(event.target.value))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)
export default Container

/** Write your `connect` component below! **/