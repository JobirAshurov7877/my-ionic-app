import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import "./Dowlands.css";
import { ellipsisVertical } from "ionicons/icons";
import imageCard from "../../assets/card-image-2.jpg";
const mapData = new Array(6).fill(0).map((_, index) => index + 1);
const Dowlands: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="downloads ion-padding">
        <IonHeader className="ion-text-center ion-padding">
          <IonText color={"light"}>Downloads</IonText>
        </IonHeader>
        <IonGrid>
          <div className="recently-play">
            <IonRow style={{ marginTop: "10px" }}>
              {mapData.map((item) => (
                <div className="filled-card">
                  <IonCol size="auto">
                    <img className="card-image" src={imageCard} alt="" />
                  </IonCol>
                  <IonCol>
                    <IonText className="name">
                      <h5>Live long</h5>
                    </IonText>
                    <br />
                    <IonText className="subtitle">
                      Lorem ipsum dolor sit amet
                    </IonText>
                  </IonCol>
                  <IonCol size="auto">
                    <IonButton color={"light"} className="button" fill="clear">
                      <IonIcon icon={ellipsisVertical}></IonIcon>
                    </IonButton>
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

export default Dowlands;
