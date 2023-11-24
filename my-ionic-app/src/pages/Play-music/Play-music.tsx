import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRange,
  IonRow,
  IonText,
} from "@ionic/react";
import { chevronBackOutline, pause, play } from "ionicons/icons";
import worldMusicImage from "../../assets/world-page-banner.jpg";
import playControlsFor from "../../assets/Player Controls-forward.svg";
import playControlsBack from "../../assets/Player Controls-back.svg";
import "./Play-music.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";
import { useEffect, useRef, useState } from "react";
import music from "../../assets/music.mp3";
const PlayMusic: React.FC = () => {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audioPlayer.current?.currentTime || 0);
    };
    const updateDuration = () => {
      setDuration(audioPlayer.current?.duration || 0);
    };
    audioPlayer.current?.addEventListener("timeupdate", updateCurrentTime);
    audioPlayer.current?.addEventListener("durationchange", updateDuration);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioPlayer.current?.pause();
    } else {
      audioPlayer.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value);
    console.log(value, audioPlayer.current?.duration);
    const newTime = (value * (audioPlayer.current?.duration || 0)) / 100;
    setCurrentTime(newTime);
    audioPlayer.current.currentTime = newTime;
  };

  // const formatTime = (timeInSeconds) => {
  //   const minutes = Math.floor(timeInSeconds / 60);
  //   const seconds = Math.floor(timeInSeconds % 60);
  //   return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
  //     2,
  //     "0"
  //   )}`;
  // };

  return (
    <IonPage className="play-music">
      <IonHeader className="page-header ion-padding">
        <IonButton fill="clear" className="button">
          <IonIcon icon={chevronBackOutline}></IonIcon>
        </IonButton>
        <IonText className="">Playing Now</IonText>
        <div style={{ width: 50 }}></div>
      </IonHeader>
      <IonContent fullscreen className="ion-padding page-container">
        <audio ref={audioPlayer} controls style={{ display: "none" }}>
          <source src={music} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <Swiper className="carusel">
          <SwiperSlide className="ion-padding">
            <img
              style={{ height: "350px", width: "100%" }}
              className="music-banner"
              src={worldMusicImage}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="ion-padding">
            <img
              style={{ height: "350px", width: "100%" }}
              className="music-banner"
              src={worldMusicImage}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </IonContent>
      <IonFooter className="page-footer ion-padding">
        <IonGrid>
          <div className="card ">
            <IonCol>
              <IonText className="name">Adiyee</IonText>
              <br />
              <IonText className="subtitle">
                Bachelor{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="6"
                  viewBox="0 0 5 6"
                  fill="none"
                >
                  <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                </svg>{" "}
                Dhibu Ninan Thomas , Kapil Kapilan
              </IonText>
            </IonCol>
            <IonCol size="auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
              >
                <path
                  d="M2.56668 11.4667C2.56668 12.9833 2.80001 15.3167 4.90001 17.4167C6.76668 19.2833 12.95 23.4833 13.1833 23.7167C13.4167 23.8333 13.65 23.95 13.8833 23.95C14.1167 23.95 14.35 23.8333 14.5833 23.7167C14.8167 23.4833 21 19.4 22.8667 17.4167C24.9667 15.3167 25.2 12.9833 25.2 11.4667C25.2 7.96667 22.4 5.16667 18.9 5.16667C17.0333 5.16667 15.1667 6.21667 14 7.85C12.8333 6.21667 10.9667 5.16667 8.86668 5.16667C5.48335 5.16667 2.56668 7.96667 2.56668 11.4667Z"
                  fill="url(#paint0_linear_0_5721)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_5721"
                    x1="1.1192"
                    y1="20.9842"
                    x2="25.3338"
                    y2="21.0149"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#24CEF0" />
                    <stop offset="1" stopColor="#24EBCA" />
                  </linearGradient>
                </defs>
              </svg>
            </IonCol>
          </div>
          <div className="music-slide">
            <IonRange
              max={100}
              value={currentTime * (100 / duration)}
              name="time"
              onIonChange={handleInputChange}
            ></IonRange>
            <IonRow className="music-time">
              <IonCol>
                <IonText>1:30</IonText>
              </IonCol>
              <IonCol size="auto">
                <IonText>2:30</IonText>
              </IonCol>
            </IonRow>
          </div>
          <div className="music-control-buttons">
            <IonButton fill="clear">
              <img src={playControlsBack} alt="play-controls" />
            </IonButton>
            <IonButton
              onClick={togglePlay}
              className="play-button"
              fill="clear"
            >
              <IonIcon icon={`${isPlaying ? pause : play}`}></IonIcon>
            </IonButton>
            <IonButton fill="clear">
              <img src={playControlsFor} alt="play-controls" />
            </IonButton>
          </div>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default PlayMusic;
