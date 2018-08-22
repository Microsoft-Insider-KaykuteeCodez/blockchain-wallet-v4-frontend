import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import { HomeCoinBalanceCell } from 'components/Balances'

const Success = props => {
  const { balance } = props

  const Wrapper = styled.div``

  return (
    <LinkContainer to='/btc/transactions'>
      <Wrapper>
        <HomeCoinBalanceCell
          coin='BTC'
          coinName='Bitcoin'
          coinIcon='bitcoin-in-circle'
          balance={balance}
        />
      </Wrapper>
    </LinkContainer>
  )
}

Success.propTypes = {
  balance: PropTypes.number.isRequired
}

export default Success