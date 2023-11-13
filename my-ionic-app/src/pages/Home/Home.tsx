import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { menuOutline, notificationsOutline } from "ionicons/icons";
import logo from "../../assets/Screenshot_2023-11-13_155150-removebg-preview.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar className="toolbar">
            <div className="toolbar-top ion-padding">
              <IonIcon icon={menuOutline}></IonIcon>
              <img src={logo} alt="" />
              <IonIcon icon={notificationsOutline}></IonIcon>
            </div>
            <IonSearchbar className="custom"></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="6" style={{ padding: 0 }}>
              <IonCard className="home-card">
                <img
                  className=" card-image"
                  alt="Silhouette of mountains"
                  src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
                />

                <IonCardContent className="card-content">
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h4>Levi's T-Shirt</h4>
                        <p>T-shirt</p>
                      </IonText>
                    </IonCol>
                    <IonCol size="auto">
                      <IonText className="ion-text-end">
                        <p>from</p>
                        <p>$30</p>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6" style={{ padding: 0 }}>
              <IonCard className="home-card">
                <img
                  className=" card-image"
                  alt="Silhouette of mountains"
                  src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
                />

                <IonCardContent className="card-content">
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h4>Levi's T-Shirt</h4>
                        <p>T-shirt</p>
                      </IonText>
                    </IonCol>
                    <IonCol size="auto">
                      <IonText className="ion-text-end">
                        <p>from</p>
                        <p>$30</p>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6" style={{ padding: 0 }}>
              <IonCard className="home-card">
                <img
                  className=" card-image"
                  alt="Silhouette of mountains"
                  src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
                />

                <IonCardContent className="card-content">
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h4>Levi's T-Shirt</h4>
                        <p>T-shirt</p>
                      </IonText>
                    </IonCol>
                    <IonCol size="auto">
                      <IonText className="ion-text-end">
                        <p>from</p>
                        <p>$30</p>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
