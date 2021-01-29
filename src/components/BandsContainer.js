import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(
    band => <Band key={band.id} id={band.id} band={band} delete={this.props.deleteBand} />
  )

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <hr/>
        {this.renderBands()}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({ type: "ADD_BAND", name }),
    deleteBand: bandId => dispatch({type: 'DELETE_BAND', id: bandId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
