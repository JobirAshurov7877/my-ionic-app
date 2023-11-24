import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonText,
} from "@ionic/react";
import "./Home.css";
import { play } from "ionicons/icons";
import imageCard from "../../assets/card-image.jpg";

const Home: React.FC = () => {
  const mapData = new Array(3).fill(0).map((_, index) => index + 1);
  return (
    <IonPage>
      <IonContent fullscreen className="home ion-padding">
        <IonGrid>
          <div className="head">
            <IonText>
              <h4>Hello Vini,</h4>
            </IonText>
            <IonText>
              <span>What You want to hear today ?</span>
            </IonText>
          </div>
          <IonSearchbar className="searchbar" />
          <IonSegment className="segment-active" value={"popular"}>
            <IonSegmentButton value={"popular"}>
              <IonLabel>Recommendation</IonLabel>
              <div className="segment-indicator"></div>
            </IonSegmentButton>

            <IonSegmentButton>
              <IonLabel>Trending</IonLabel>
              <div className="segment-indicator"></div>
            </IonSegmentButton>
            <IonSegmentButton>
              <IonLabel>Beauty</IonLabel>
              <div className="segment-indicator"></div>
            </IonSegmentButton>
            <IonSegmentButton>
              <IonLabel>Business</IonLabel>
              <div className="segment-indicator"></div>
            </IonSegmentButton>
          </IonSegment>
          <div className="category">
            {mapData.map((item) => (
              <div className="category-card">
                <div className="card-content">
                  <div>
                    <IonText style={{ fontWeight: 600 }}>Friday Party</IonText>
                    <br />
                    <IonText>Party mood !</IonText>
                  </div>
                  <div>
                    <IonButton className="play-button" fill="clear">
                      <IonIcon icon={play}></IonIcon>
                    </IonButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="recently-play">
            <IonRow className="recently-play-head">
              <IonCol>
                <IonText color={"light"}>Recently Play</IonText>
              </IonCol>
              <IonCol size="auto">
                <IonText color={"light"}>
                  <span>See all</span>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow style={{ marginTop: "20px" }}>
              {mapData.map((item) => (
                <div className="filled-card">
                  <IonCol size="auto">
                    <img className="card-image" src={imageCard} alt="" />
                  </IonCol>
                  <IonCol>
                    <IonText className="name">Mehabooba</IonText>
                    <br />
                    <IonText className="subtitle">Kgf Chapter 2 </IonText>
                    <IonText>Ananya Bhat </IonText> <br />
                    <IonText>
                      2:50 / <span>3:50</span>
                    </IonText>
                  </IonCol>
                  <IonCol size="auto">
                    <IonButton className="play-button" fill="clear">
                      <IonIcon icon={play}></IonIcon>
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

export default Home;
