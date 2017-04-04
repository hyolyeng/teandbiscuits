import React from 'react'
import Event from '../components/event'
import getEvent from '../lib/get-event'

export default class extends React.Component {

  static async getInitialProps({ req, query: { id, uId } }) {
    const event = await getEvent(id);
    return { event, id, uId };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { event, uId } = this.props;
    return <Event event={event} uId={uId} />;
  }
}