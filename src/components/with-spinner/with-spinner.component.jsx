import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

// const withSpinner = (WrappedContainer) => ({ isLoading, ...otherProps }) => {
//   return isLoading ? (
//     <SpinnerOverlay>
//       <SpinnerContainer />
//     </SpinnerOverlay>
//   ) : (
//     <WrappedContainer {...otherProps} />
//   );
// };

const withSpinner = (WrappedContainer) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedContainer {...otherProps} />
    );
  };
  return Spinner;
};


export default withSpinner;
