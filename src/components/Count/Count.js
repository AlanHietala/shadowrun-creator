import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorText: null,
    }
  }
  validateOnChange = (event) => {
    const { onChange } = this.props
    const { value } = event.target
    var isNumber = /^\d+$/.test(value)

    if (isNumber || value === '') {
      let number = 0
      if (isNumber) {
        number = parseInt(value, 10)
      }

      this.setState({
        errorText: null,
      })
      onChange(number)
    } else {
      this.setState({
        errorText: 'Please enter a number',
      })
    }
  }

  render() {

    const {count} = this.props
    return (<TextField value={count} onChange={this.validateOnChange}
      errorText={this.state.errorText}/>)
  }}
Count.propTypes =  {
  count: PropTypes.number,
  onChange: PropTypes.func,
}

export default Count
