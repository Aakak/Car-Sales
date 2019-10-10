import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';
import { ADD_ITEM, addItem } from '../actions'
const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} addItem={props.addItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  // the keys of the returned obj will be props passed into the comp
  return {
    store: state.app.store
  };
};

// export default Header;
export default connect(
  mapStateToProps,
  { addItem }
)(AdditionalFeatures);
