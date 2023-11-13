import {
  IonButton,
  IonCard,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import {
  chevronBackOutline,
  filterOutline,
  heartOutline,
  mapOutline,
} from "ionicons/icons";
import stores_img from "../assets/Screenshot 2023-11-13 171313.png";

const Tab2: React.FC = () => {
  return (
    <IonPage className="search-page">
      <IonContent fullscreen color={"light"}>
        <IonHeader>
          <IonToolbar className="toolbar">
            <div className="toolbar-top ">
              <IonIcon icon={chevronBackOutline}></IonIcon>
              <IonText>
                <h5>Search Result</h5>
              </IonText>
              <IonIcon icon={filterOutline}></IonIcon>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonGrid className="ion-padding ">
          <IonCard className="carusel-card">
            <IonRow>
              <IonCol size="auto">
                <div className="card-image">
                  <img
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
                <IonText>
                  <h4>Levi's T-shirt</h4>
                  <h5>from $29 / T-shirt</h5>
                </IonText>
              </IonCol>
              <IonCol size="auto">
                <IonIcon size={"large"} icon={heartOutline}></IonIcon>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonText className="ion-padding">
            <h2 style={{ marginTop: "-37px" }}>Buy Levi's T-Shirt</h2>
            <p style={{ fontSize: "14px" }}>
              We found 2 offline stores and 3 onlines stores
            </p>
          </IonText>

          <IonList className=" stores-box">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IonText>
                <h4 className="title">Offline stores</h4>
              </IonText>
              <IonChip color="primary">
                <IonIcon icon={mapOutline}></IonIcon>
                <IonLabel> Map</IonLabel>
              </IonChip>
            </div>

            <IonCard className="stores-card">
              <IonRow>
                <IonCol
                  size="auto"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    className="stores-image"
                    width={58}
                    height={58}
                    src={stores_img}
                    alt=""
                  />
                </IonCol>
                <IonCol
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IonText>
                    <h5>Levi's T-shirt</h5>
                  </IonText>
                  <IonText> $29 / T-shirt</IonText>
                </IonCol>
                <IonCol size="auto">
                  <IonButton className="price-btn" color={"success"}>
                    $29
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCard>
            <IonCard className="stores-card">
              <IonRow>
                <IonCol size="auto">
                  <img
                    className="stores-image"
                    width={58}
                    height={58}
                    src={stores_img}
                    alt=""
                  />
                </IonCol>
                <IonCol
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IonText>
                    <h5>Levi's T-shirt</h5>
                  </IonText>
                  <IonText> $29 / T-shirt</IonText>
                </IonCol>
                <IonCol size="auto">
                  <IonButton className="price-btn" color={"danger"}>
                    $64
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCard>
            <IonRow>
              <IonCol className="ion-text-center" size="12">
                <IonText color={"primary"}>View More</IonText>
              </IonCol>
            </IonRow>
          </IonList>

          <IonList style={{ marginTop: "15px" }} className=" stores-box">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IonText color={"tertiary"}>
                <h4 className="title">Online stores</h4>
              </IonText>
            </div>

            <IonCard className="stores-card">
              <IonRow>
                <IonCol
                  size="auto"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    className="stores-image"
                    width={58}
                    height={58}
                    src={stores_img}
                    alt=""
                  />
                </IonCol>
                <IonCol
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IonText>
                    <h5>Levi's T-shirt</h5>
                  </IonText>
                  <IonText> $29 / T-shirt</IonText>
                </IonCol>
                <IonCol size="auto">
                  <IonButton className="price-btn" color={"success"}>
                    $30
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCard>
            <IonCard className="stores-card">
              <IonRow>
                <IonCol size="auto">
                  <img
                    className="stores-image"
                    width={58}
                    height={58}
                    src={stores_img}
                    alt=""
                  />
                </IonCol>
                <IonCol
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IonText>
                    <h5>Levi's T-shirt</h5>
                  </IonText>
                  <IonText> $29 / T-shirt</IonText>
                </IonCol>
                <IonCol size="auto">
                  <IonButton className="price-btn" color={"danger"}>
                    $64
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCard>
            <IonRow>
              <IonCol className="ion-text-center" size="12">
                <IonText color={"primary"}>View More</IonText>
              </IonCol>
            </IonRow>
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
