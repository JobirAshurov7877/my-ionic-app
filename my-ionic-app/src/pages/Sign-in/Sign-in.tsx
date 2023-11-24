import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import registerImage from "../../assets/login-musix-logo.svg";

import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="register">
          <div className="register-head">
            <img src={registerImage} alt="img" />
            <IonText color={"light"}>
              <h2> Vii Music</h2>
            </IonText>
          </div>
          <div className="form">
            <h1>Sign in to your account</h1>
            <div className="input-box">
              <label className="input-label">Email address</label>
              <IonInput
                placeholder="Spotify@gmail.com"
                className="custom-input"
              ></IonInput>
            </div>
            <div className="input-box">
              <label className="input-label">Password</label>
              <IonInput
                type="password"
                placeholder="*************"
                className="custom-input"
              ></IonInput>
            </div>
            <IonRow style={{ marginTop: "15px" }}>
              <IonCol>
                <IonCheckbox labelPlacement="end">
                  <IonText color={"light"} className="remember-me">
                    Remember me
                  </IonText>
                </IonCheckbox>
              </IonCol>
              <IonCol>
                <IonText className="forget-password">
                  Forgot your password?
                </IonText>
              </IonCol>
            </IonRow>
            <IonButton routerLink="/home" className="custom-button">
              Sign in
            </IonButton>
          </div>
          <div className="dwider">
            <div className="line"></div>
            <IonText>Or continue with</IonText>
            <div className="line"></div>
          </div>
          <IonButton className="google-button">
            <svg
              style={{ marginRight: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <g clip-path="url(#clip0_0_5298)">
                <path
                  d="M23.9873 13.2339C23.9873 12.2096 23.9057 11.4622 23.729 10.6871H12.239V15.31H18.9833C18.8474 16.4589 18.1132 18.189 16.4814 19.3516L16.4585 19.5064L20.0915 22.3712L20.3431 22.3968C22.6547 20.2237 23.9873 17.0263 23.9873 13.2339Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2391 25.4141C15.5433 25.4141 18.3171 24.3068 20.3432 22.3968L16.4815 19.3516C15.4481 20.0852 14.0611 20.5973 12.2391 20.5973C9.00291 20.5973 6.25622 18.4243 5.27711 15.4208L5.13359 15.4332L1.35604 18.4091L1.30664 18.5489C3.31906 22.6181 7.45273 25.4141 12.2391 25.4141Z"
                  fill="#34A853"
                />
                <path
                  d="M5.27702 15.4208C5.01867 14.6457 4.86916 13.8152 4.86916 12.9571C4.86916 12.0989 5.01867 11.2684 5.26343 10.4933L5.25659 10.3282L1.4317 7.30458L1.30655 7.36517C0.47714 9.05382 0.0012207 10.9501 0.0012207 12.9571C0.0012207 14.964 0.47714 16.8602 1.30655 18.5489L5.27702 15.4208Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.2391 5.3167C14.5371 5.3167 16.0871 6.3271 16.971 7.17147L20.4248 3.73884C18.3036 1.73187 15.5433 0.5 12.2391 0.5C7.45273 0.5 3.31906 3.2959 1.30664 7.36517L5.26351 10.4933C6.25622 7.48979 9.00291 5.3167 12.2391 5.3167Z"
                  fill="#EB4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_5298">
                  <rect
                    width="24"
                    height="25"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Sign up with Google
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
