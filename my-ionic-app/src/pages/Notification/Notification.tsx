import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import "./Notification.css";
import imageCard from "../../assets/card-image.jpg";
const mapData = new Array(3).fill(0).map((_, index) => index + 1);
const Notification: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="notification ion-padding">
        <IonHeader className="ion-text-center ion-padding">
          <IonText color={"light"}>Notification</IonText>
        </IonHeader>
        <IonGrid>
          <div className="recently-play">
            <IonText color={"light"}>
              <h5>Today</h5>
            </IonText>
            <IonRow style={{ marginTop: "10px" }}>
              {mapData.map((item) => (
                <div className="filled-card">
                  <IonCol size="auto">
                    <img className="card-image" src={imageCard} alt="" />
                  </IonCol>
                  <IonCol>
                    <IonText className="name">
                      LMehabooba song has been downloaded{" "}
                    </IonText>
                    <br />
                    <IonText className="subtitle">Kgf Chapter 2 </IonText>
                    <IonText>Ananya Bhat </IonText> <br />
                    <IonText
                      style={{ display: "block" }}
                      className="ion-text-end"
                    >
                      <span>3:50 PM</span>
                    </IonText>
                  </IonCol>
                </div>
              ))}
            </IonRow>
          </div>
          <div className="recently-play">
            <IonText color={"light"}>
              <h5>14 Feb 2022</h5>
            </IonText>
            <IonRow style={{ marginTop: "10px" }}>
              {mapData.map((item) => (
                <div className="filled-card">
                  <IonCol size="auto">
                    <img className="card-image" src={imageCard} alt="" />
                  </IonCol>
                  <IonCol>
                    <IonText className="name">
                      LMehabooba song has been downloaded{" "}
                    </IonText>
                    <br />
                    <IonText className="subtitle">Kgf Chapter 2 </IonText>
                    <IonText>Ananya Bhat </IonText> <br />
                    <IonText
                      style={{ display: "block" }}
                      className="ion-text-end"
                    >
                      <span>3:50 PM</span>
                    </IonText>
                  </IonCol>
                </div>
              ))}
            </IonRow>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Notification;
