import {
  IonAccordion,
  IonAccordionGroup,
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from "@ionic/react";
import "./User-profile.css";
import profile_img from "../../assets/favourite-avatar.jpg";
const UserProfile: React.FC = () => {
  return (
    <IonPage className="user-profile">
      <IonHeader className="page-header  ion-padding">
        <IonAvatar>
          <img alt="Silhouette of a person's head" src={profile_img} />
        </IonAvatar>
        <IonText className="name">Vikashini vini</IonText>
      </IonHeader>
      <IonContent fullscreen className="page-container  ion-padding">
        <div className="head">
          <IonText color={"light"} className="user-profile-title">
            Personal Information
          </IonText>
          <IonButton routerLink="/profile-edit" fill="clear" className="button">
            <IonText>Edit</IonText>
          </IonButton>
        </div>
        <IonAccordionGroup>
          <IonAccordion className="accordion" value="first">
            <IonItem className="accordion-item" lines="none" slot="header">
              <IonLabel className="accordion-title">Name</IonLabel>
            </IonItem>
            <div className="ion-padding accordion-content" slot="content">
              Vikashini vini
            </div>
          </IonAccordion>
          <IonAccordion className="accordion" value="second">
            <IonItem className="accordion-item" lines="none" slot="header">
              <IonLabel className="accordion-title">Email</IonLabel>
            </IonItem>
            <div className="ion-padding accordion-content" slot="content">
              Vikashinivini@gmail.com
            </div>
          </IonAccordion>
          <IonAccordion className="accordion" value="third">
            <IonItem className="accordion-item" lines="none" slot="header">
              <IonLabel className="accordion-title">Language</IonLabel>
            </IonItem>
            <div className="ion-padding accordion-content" slot="content">
              English
            </div>
          </IonAccordion>

          <IonText color={"light"} className="user-profile-title">
            About
          </IonText>
          <IonAccordion className="accordion" value="four">
            <IonItem className="accordion-item" lines="none" slot="header">
              <IonLabel className="accordion-title">Privacy</IonLabel>
            </IonItem>
            <div className="ion-padding accordion-content" slot="content">
              Vikashini vini
            </div>
          </IonAccordion>
          <IonAccordion className="accordion" value="5">
            <IonItem className="accordion-item" lines="none" slot="header">
              <IonLabel className="accordion-title">Storage</IonLabel>
            </IonItem>
            <div className="ion-padding accordion-content" slot="content">
              Vikashinivini@gmail.com
            </div>
          </IonAccordion>
          <IonAccordion className="accordion" value="6">
            <IonItem className="accordion-item" lines="none" slot="header">
              <IonLabel className="accordion-title">Audio Quality</IonLabel>
            </IonItem>
            <div className="ion-padding accordion-content" slot="content">
              English
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
