import React from 'react'
import PropTypes from 'prop-types'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const Rating = ({ratings, onRatingChange, value, labelText}) => {
  const ratingComponents = ratings
    .map(rating => <MenuItem key={rating.rating} value={rating.rating} primaryText={rating.rating} />)
  return (<SelectField
    floatingLabelText={labelText || 'rating'}
    onChange={(event, index) => onRatingChange(index)}
    value={value}>
    {ratingComponents}
  </SelectField>)
}

Rating.propTypes = {
  ratings: PropTypes.array,
  onRatingChange: PropTypes.func,
  value: PropTypes.number,
  labelText: PropTypes.string,
}

export default Rating
