import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import "./Favourite.css";
import { play } from "ionicons/icons";
import avatar from "../../assets/favourite-avatar.jpg";

const map = new Array(8).fill(0).map((_, index) => index + 1);

const Favourite: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="favourite ion-padding">
        <IonGrid>
          <div className="head">
            <IonButton className="head-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M7.59006 2.29165C8.16756 2.30921 8.72672 2.41004 9.26847 2.59429H9.32256C9.35922 2.61171 9.38672 2.63096 9.40506 2.64838C9.60764 2.71346 9.79922 2.78679 9.98256 2.88763L10.3309 3.04346C10.4684 3.11679 10.6334 3.25338 10.7251 3.30929C10.8167 3.36338 10.9176 3.41929 11.0001 3.48254C12.0185 2.70429 13.2551 2.28263 14.5292 2.29165C15.1076 2.29165 15.6851 2.37338 16.2342 2.55763C19.6176 3.65763 20.8368 7.37013 19.8184 10.6151C19.2409 12.2734 18.2967 13.7868 17.0601 15.0234C15.2901 16.7375 13.3476 18.2592 11.2567 19.57L11.0276 19.7085L10.7892 19.5609C8.69097 18.2592 6.73756 16.7375 4.95097 15.0142C3.72264 13.7776 2.77756 12.2734 2.19089 10.6151C1.15506 7.37013 2.37422 3.65763 5.79431 2.53838C6.06014 2.44671 6.33422 2.38254 6.60922 2.34679H6.71922C6.97681 2.30921 7.23256 2.29165 7.48922 2.29165H7.59006ZM15.7576 5.18846C15.3817 5.05921 14.9692 5.26179 14.8317 5.64679C14.7034 6.03179 14.9051 6.45346 15.2901 6.59004C15.8776 6.81004 16.2709 7.38846 16.2709 8.02921V8.05763C16.2535 8.26754 16.3167 8.47013 16.4451 8.62596C16.5734 8.78179 16.7659 8.87254 16.9676 8.89179C17.3434 8.88171 17.6642 8.58013 17.6917 8.19421V8.08512C17.7192 6.80088 16.941 5.63763 15.7576 5.18846Z"
                  fill="url(#paint0_linear_0_5338)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_5338"
                    x1="11.0001"
                    y1="2.2915"
                    x2="24.2917"
                    y2="21.0832"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#24CDF0" />
                    <stop offset="1" stopColor="#24F0C5" />
                  </linearGradient>
                </defs>
              </svg>
            </IonButton>
            <IonAvatar>
              <img
                width={100}
                height={100}
                alt="Silhouette of a person's head"
                src={avatar}
              />
            </IonAvatar>
            <IonButton fill="clear" className="head-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M8.16927 14.5846C8.16927 16.1955 6.86344 17.5013 5.2526 17.5013C3.64177 17.5013 2.33594 16.1955 2.33594 14.5846C2.33594 12.9738 3.64177 11.668 5.2526 11.668C6.86344 11.668 8.16927 12.9738 8.16927 14.5846ZM16.9193 14.5846C16.9193 16.1955 15.6135 17.5013 14.0026 17.5013C12.3917 17.5013 11.0859 16.1955 11.0859 14.5846C11.0859 12.9738 12.3917 11.668 14.0026 11.668C15.6135 11.668 16.9193 12.9738 16.9193 14.5846ZM22.7526 17.5013C24.3635 17.5013 25.6693 16.1955 25.6693 14.5846C25.6693 12.9738 24.3635 11.668 22.7526 11.668C21.1417 11.668 19.8359 12.9738 19.8359 14.5846C19.8359 16.1955 21.1417 17.5013 22.7526 17.5013Z"
                  fill="white"
                />
              </svg>
            </IonButton>
          </div>
          <div className="play-list">
            <IonRow style={{ marginTop: "20px" }}>
              <div className="card active">
                <IonCol>
                  <IonText className="name">Dailamo Dailamo</IonText>
                  <br />
                  <IonText className="subtitle">
                    Sangeetha Rajeshwaran, Vijay Annoty
                  </IonText>
                </IonCol>
                <IonCol size="auto">
                  <IonButton className="play-button" fill="clear">
                    <IonIcon icon={play}></IonIcon>
                  </IonButton>
                </IonCol>
              </div>
              {map.map((item) => (
                <div className="card ">
                  <IonCol>
                    <IonText className="name">Dailamo Dailamo</IonText>
                    <br />
                    <IonText className="subtitle">
                      Sangeetha Rajeshwaran, Vijay Annoty
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

export default Favourite;
