import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import worldMusicImage from "../../assets/world-page-banner.jpg";
import worldMusicImage2 from "../../assets/world-page-banner-2.jpg";
import "./World-music.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";
import { useState } from "react";
const WorldMusic: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  return (
    <IonPage className="world-music">
      <IonHeader className="page-header ion-padding ion-text-end">
        <IonText onClick={handleNextSlide} className="skip">
          {currentSlide === 0 && "Skip"}
        </IonText>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="world-music-container ion-padding page-container">
          <IonRow>
            <Swiper
              onSwiper={(swiper) => {
                setSwiper(swiper);
              }}
              onSlideChange={(swiper) => {
                setCurrentSlide(swiper.activeIndex);
              }}
            >
              <SwiperSlide>
                <div className="world-music-content ion-text-center">
                  <img src={worldMusicImage} alt="img" />
                  <IonText color={"light"}>
                    <h2>
                      Welcome to the world <br /> of music
                    </h2>
                  </IonText>
                  <IonText>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor <br /> incididunt ut labore.
                    </p>
                  </IonText>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="world-music-content ion-text-center">
                  <img src={worldMusicImage2} alt="img" />
                  <IonText color={"light"}>
                    <h2>
                      Welcome to the world <br /> of music
                    </h2>
                  </IonText>
                  <IonText>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor <br /> incididunt ut labore.
                    </p>
                  </IonText>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swipper-button">
              <IonButton
                onClick={handleNextSlide}
                expand="block"
                className="world-music-btn"
              >
                Next
              </IonButton>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default WorldMusic;
