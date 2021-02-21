import React from 'react';
import PropTypes from 'prop-types';
import LoadingStub from '../components/loading-stub/loading-stub';

const withLoadingStub = (Component) => {
  const WithLoadingStubComponent = (props) => {

    if (props.isLoading) {
      return <LoadingStub />;
    }

    return (
      <Component {...props} />
    );
  };

  WithLoadingStubComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  return WithLoadingStubComponent;
};

export default withLoadingStub;
