import { SpinnerContainer, SpinnerOverlay } from "./withSpinnerStyledComponent";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
