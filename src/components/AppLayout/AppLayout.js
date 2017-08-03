import React from 'react'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

class AppLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleOpenMenu = (event) => {
    event.preventDefault()
    this.setState({
      open: true,
      menuAnchor: event.currentTarget,
    })
  }

  handleCloseMenu = () => {
    this.setState({
      open: false,
    })
  }

  handleMenuItemSelected = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    const { children } = this.props
    return (<div>
      <AppBar
        title="Shadowrun Creator">
      </AppBar>
      <Paper style={styles.paper}>{children}</Paper>
    </div>)
  }
}
const styles = {
  paper: {
    padding: 12,
  },
}
AppLayout.propTypes = {
  children: PropTypes.any,
  history: PropTypes.object,
}
export default AppLayout
