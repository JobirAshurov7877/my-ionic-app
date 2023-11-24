import { IonContent, IonGrid, IonPage, IonText } from "@ionic/react";
import welcomeImage from "../../assets/welcome-img.svg";
import "./Welcome.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Welcome: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/sign-up");
    }, 2000);
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="welcome">
          <div className="welcome-content">
            <img src={welcomeImage} alt="img" />
            <IonText color={"light"}>
              <h2>
                Start Turing Your ideas <br /> into Reality
              </h2>
            </IonText>
            <h3>Listen to Vii Music</h3>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
