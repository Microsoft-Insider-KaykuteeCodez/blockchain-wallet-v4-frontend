import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'

import { actions } from 'data'
import modalEnhancer from 'providers/ModalEnhancer'
import UpgradeWallet from './template.js'

class UpgradeWizardContainer extends React.Component {
  constructor (props) {
    super(props)
    this.handleContinue = this.handleContinue.bind(this)
  }

  handleContinue () {
    this.props.walletSyncActions.forceSync()
  }

  render () {
    return (
      <UpgradeWallet {...this.props} handleContinue={this.handleContinue} />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  modalActions: bindActionCreators(actions.modals, dispatch),
  walletSyncActions: bindActionCreators(actions.core.walletSync, dispatch)
})

const enhance = compose(
  modalEnhancer('UpgradeWallet'),
  connect(undefined, mapDispatchToProps)
)

export default enhance(UpgradeWizardContainer)
