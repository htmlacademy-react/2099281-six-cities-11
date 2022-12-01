import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../components/app/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) : JSX.Element {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Authorized
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
