import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import { chevronBackOutline, filterOutline, logoIonic } from "ionicons/icons";

const Tab3: React.FC = () => {
  return (
    <IonPage className="cotainer">
      <IonContent>
        <IonHeader>
          <IonToolbar className="toolbar-transparent">
            <div className="toolbar-top ion-padding">
              <IonIcon icon={chevronBackOutline}></IonIcon>
              <IonIcon icon={filterOutline}></IonIcon>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <div className="t-shirt-card-box">
            <IonIcon
              className="circle-icon t-shirt-icon"
              icon={logoIonic}
            ></IonIcon>

            <IonCard className="shirt-card">
              <IonRow>
                <IonCol size="auto">
                  <div className="card-image">
                    <img
                      className=""
                      src="https://product.fidcdn.net/cdn-cgi/image/f=auto,width=400,quality=90/9l3kcjpn65534gija0p50cpo896jeka76oo50ca98d94cj2l8l434dhi9h546h279kp4kl9p6oskqjic9go3ic9l6pij0chlc9j64dhkckq62e1n6sp3ac3360o68e1o74oj0d0.png"
                      alt="img"
                    />
                  </div>
                </IonCol>
                <IonCol
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IonText className="ion-text-start">
                    <h4>Levi's T-shirt</h4>
                    <h5>from $29 </h5>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonCard>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
