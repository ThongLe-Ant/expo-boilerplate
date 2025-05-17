/**
 * Enum representing the available routes in the application.
 */
export enum Routes {
  Home = 'Home',
  Login = 'Login',
  Profile = 'Profile',
  Settings = 'Settings',
  Post = 'Post',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
  PersonalData = 'PersonalData',
  SignOut = 'SignOut',
  OrderPlan = 'OrderPlan',
}

/**
 * Represents the parameter types for the root stack navigation.
 */
export type RootStackParams = {
  [Routes.Home]: undefined;
  [Routes.Login]: undefined;
  [Routes.Register]: undefined;
  [Routes.ForgotPassword]: undefined;
  [Routes.OrderPlan]: undefined;
};

/**
 * Represents the parameter types for the profile stack routes.
 */
export type ProfileStackParams = {
  [Routes.Profile]: undefined;
  [Routes.Settings]: undefined;
  [Routes.Post]: { id: string, username: string };
  [Routes.PersonalData]: undefined;
  [Routes.SignOut]: { onSignOut: () => void } | undefined;
};

/**
 * Represents the navigation parameters for the root stack.
 */
export type NavigationParams = RootStackParams;

export default Routes
