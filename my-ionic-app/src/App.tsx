import { Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";
import Home from "./pages/Home/Home";
import Welcome from "./pages/Welcome/Welcome";
import SignUp from "./pages/Sign-up/Sign-up";
import SignIn from "./pages/Sign-in/Sign-in";
import Favourite from "./pages/Favourite/Favourite";
import Dowlands from "./pages/Dowlands/Dowlands";
import Notification from "./pages/Notification/Notification";
import WorldMusic from "./pages/World-music/World-music";
import UserProfile from "./pages/User-profile/User-profile";
import PlayMusic from "./pages/Play-music/Play-music";
import "./App.css";
import ProfileEdit from "./pages/Profile-edit/Profile-edit";
setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home" component={Home} />
            <Route exact path="/favourite" component={Favourite} />
            <Route exact path="/downloads" component={Dowlands} />
            <Route exact path="/user-profile" component={UserProfile} />
            <Route exact path="/play-music" component={PlayMusic} />
            <Route exact path="/profile-edit" component={ProfileEdit} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className="ion-tab-bar">
            <IonTabButton tab="home" href="/home" className="tab-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 18 19"
                fill="none"
                className="svg-with-background"
              >
                <path
                  d="M6.86791 16.0786V13.7785C6.8679 13.1935 7.34484 12.7181 7.93576 12.7142H10.1003C10.6941 12.7142 11.1754 13.1907 11.1754 13.7785V16.0857C11.1752 16.5824 11.5757 16.9884 12.0773 17H13.5203C14.9588 17 16.125 15.8455 16.125 14.4214V7.87838C16.1173 7.31812 15.8516 6.79201 15.4035 6.44977L10.4683 2.51398C9.6037 1.82867 8.37465 1.82867 7.51006 2.51398L2.59652 6.45692C2.14669 6.79777 1.88054 7.32475 1.875 7.88552V14.4214C1.875 15.8455 3.04116 17 4.47968 17H5.92272C6.43677 17 6.85348 16.5875 6.85348 16.0786"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IonTabButton>
            <IonTabButton
              tab="favourite"
              href="/favourite"
              className="tab-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 18 19"
                fill="none"
                className="svg-with-background"
              >
                <path
                  d="M5.67787 3.31924C3.29962 3.31924 1.70325 5.24412 1.70325 7.62124C1.70325 10.319 5.472 13.5421 8.70075 15.6942C11.9306 13.5421 15.6555 10.2672 15.6994 7.62124C15.7387 5.24412 14.1997 3.31924 11.8215 3.31924C10.8067 3.31924 9.77737 3.85587 8.70075 4.93137C7.62412 3.85587 6.69262 3.31924 5.67787 3.31924V3.31924Z"
                  stroke="white"
                />
              </svg>
            </IonTabButton>
            <IonTabButton
              tab="play-music"
              href="/play-music"
              className="tab-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 18 19"
                fill="none"
                className="svg-with-background"
              >
                <path
                  d="M12.7786 10.1781L12.7808 10.1764C12.988 10.0123 13.1072 9.763 13.1072 9.5C13.1072 9.23786 12.9859 8.98959 12.7808 8.82719L12.7786 8.82552L7.72064 4.86552L7.72066 4.8655L7.71667 4.86244C7.46634 4.67048 7.11596 4.62107 6.81337 4.77111C6.51163 4.91891 6.33282 5.22198 6.33282 5.5436V13.46C6.33282 13.7816 6.51156 14.0847 6.81336 14.2325C6.94134 14.2959 7.07268 14.32 7.19282 14.32C7.38215 14.32 7.56597 14.2584 7.71933 14.1391L7.72064 14.1381L12.7786 10.1781L12.7786 10.1781ZM0.5 9.5C0.5 4.81522 4.31188 1 9 1C13.6847 1 17.5 4.81535 17.5 9.5C17.5 14.1881 13.6848 18 9 18C4.31175 18 0.5 14.1883 0.5 9.5Z"
                  stroke="white"
                />
              </svg>
            </IonTabButton>
            <IonTabButton
              tab="downloads"
              href="/downloads"
              className="tab-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 18 19"
                fill="none"
                className="svg-with-background"
              >
                <path
                  d="M15.75 11C15.5511 11 15.3603 11.079 15.2197 11.2197C15.079 11.3603 15 11.5511 15 11.75V14.75C15 14.9489 14.921 15.1397 14.7803 15.2803C14.6397 15.421 14.4489 15.5 14.25 15.5H3.75C3.55109 15.5 3.36032 15.421 3.21967 15.2803C3.07902 15.1397 3 14.9489 3 14.75V11.75C3 11.5511 2.92098 11.3603 2.78033 11.2197C2.63968 11.079 2.44891 11 2.25 11C2.05109 11 1.86032 11.079 1.71967 11.2197C1.57902 11.3603 1.5 11.5511 1.5 11.75V14.75C1.5 15.3467 1.73705 15.919 2.15901 16.341C2.58097 16.7629 3.15326 17 3.75 17H14.25C14.8467 17 15.419 16.7629 15.841 16.341C16.2629 15.919 16.5 15.3467 16.5 14.75V11.75C16.5 11.5511 16.421 11.3603 16.2803 11.2197C16.1397 11.079 15.9489 11 15.75 11ZM8.4675 12.2825C8.53883 12.3508 8.62294 12.4043 8.715 12.44C8.80478 12.4797 8.90185 12.5002 9 12.5002C9.09815 12.5002 9.19522 12.4797 9.285 12.44C9.37706 12.4043 9.46117 12.3508 9.5325 12.2825L12.5325 9.2825C12.6737 9.14127 12.7531 8.94973 12.7531 8.75C12.7531 8.55027 12.6737 8.35873 12.5325 8.2175C12.3913 8.07627 12.1997 7.99693 12 7.99693C11.8003 7.99693 11.6087 8.07627 11.4675 8.2175L9.75 9.9425V2.75C9.75 2.55109 9.67098 2.36032 9.53033 2.21967C9.38968 2.07902 9.19891 2 9 2C8.80109 2 8.61032 2.07902 8.46967 2.21967C8.32902 2.36032 8.25 2.55109 8.25 2.75V9.9425L6.5325 8.2175C6.46257 8.14757 6.37955 8.0921 6.28819 8.05426C6.19682 8.01641 6.09889 7.99693 6 7.99693C5.90111 7.99693 5.80318 8.01641 5.71181 8.05426C5.62045 8.0921 5.53743 8.14757 5.4675 8.2175C5.39757 8.28743 5.3421 8.37045 5.30426 8.46181C5.26641 8.55318 5.24693 8.65111 5.24693 8.75C5.24693 8.84889 5.26641 8.94682 5.30426 9.03819C5.3421 9.12955 5.39757 9.21257 5.4675 9.2825L8.4675 12.2825Z"
                  fill="white"
                />
              </svg>
            </IonTabButton>
            <IonTabButton
              tab="user-profile"
              href="/user-profile"
              className="tab-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 18 19"
                fill="#fff"
                className="svg-with-background"
              >
                <g clipPath="url(#clip0_0_5692)">
                  <path
                    d="M10.674 9.896C11.844 9.176 12.6 7.754 12.6 6.44C12.6 4.568 11.07 2.48 8.99999 2.48C6.92999 2.48 5.39999 4.568 5.39999 6.44C5.39999 7.754 6.15599 9.176 7.32599 9.896C4.55399 10.634 2.51999 13.172 2.51999 16.16C2.51999 16.358 2.68199 16.52 2.87999 16.52H15.12C15.318 16.52 15.48 16.358 15.48 16.16C15.48 13.172 13.446 10.634 10.674 9.896ZM6.11999 6.44C6.11999 4.586 7.64999 3.2 8.99999 3.2C10.35 3.2 11.88 4.586 11.88 6.44C11.88 8.294 10.35 9.68 8.99999 9.68C7.64999 9.68 6.11999 8.294 6.11999 6.44ZM3.25799 15.8C3.43799 12.794 5.95799 10.4 8.99999 10.4C12.042 10.4 14.562 12.794 14.742 15.8H3.25799Z"
                    fill="white"
                  />
                  <path
                    d="M220.32 -141.7V161.42H-100.8V-141.7H220.32ZM221.76 -143.14H-102.24V162.86H221.76V-143.14Z"
                    fill="#ddd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_5692">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/sign-up" component={SignUp}></Route>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/world-music" component={WorldMusic} />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
