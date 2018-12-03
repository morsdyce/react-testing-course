import cx from 'classnames';
import React from 'react';

const Rating = (props) => (
  <div className="rating">
    {
      [1, 2, 3, 4, 5].map(val => {
        const classes = cx('rating-circle', {
          filled: val <= props.amount
        });

        return (
          <div
            key={`rating-${val}`}
            className={classes}
            onClick={() => props.updateRating(val)} />
        );
      })
    }
  </div>
);

export default Rating;
