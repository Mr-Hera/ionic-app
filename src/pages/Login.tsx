import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import LoginLogo from '../assets/login.svg'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(true);
    const [present, dismiss] = useIonLoading();

    useEffect(() => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key: INTRO_KEY });
            console.log('🚀 ~ file: Login.tsx:17 ~ checkStorage ~ seen:', seen);
            setIntroSeen(seen.value === 'true');
        };

        checkStorage();
    }, []);
    
    const login = async (e: any) => {
        e.preventDefault();
        await present('Logging in...');
        setTimeout(async () => {
            dismiss();
            router.push('/app', 'root');
        }, 2000);
    };
    
    const finishIntro = async () => {
        console.log('Finished');
        setIntroSeen(true);
        Preferences.set({key: INTRO_KEY, value: 'true'});
    };
    
    const seeIntroAgain = async () => {
        console.log('Finished');
        setIntroSeen(false);
        Preferences.remove({key: INTRO_KEY});
    };

    return (
        <>
            {!introSeen ? ( <Intro onFinish={finishIntro} /> ) : (
                <IonPage>
                    <IonHeader>
                        <IonToolbar color={'success'}>
                            <IonTitle>Ionic App</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent scrollY={false} className='ion-padding'>
                        <IonGrid fixed>
                            <IonRow className='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                    <div className="ion-text-center ion-padding">
                                        <img src={LoginLogo} alt="Login" width={'50%'} />
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                        <IonGrid fixed>
                            <IonRow className='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                    <IonCard>
                                        <IonCardContent>
                                            <form onSubmit={login}>
                                                <IonInput fill='outline' labelPlacement='floating' label='email' type='email' placeholder='example@example.com'></IonInput>
                                                <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='password' type='password'></IonInput>
                                                <IonButton className='ion-margin-top' type='submit' expand='block'>
                                                    Login
                                                    <IonIcon icon={logInOutline} slot='end'></IonIcon>
                                                </IonButton>
                                                <IonItem className='ion-margin-top' lines="none">
                                                    <IonLabel>Don't have an account?</IonLabel>
                                                </IonItem>
                                                <IonButton routerLink='/register' color={'secondary'} className='ion-margin-top' expand='block'>
                                                    Create Account
                                                    <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                                                </IonButton>
                                                <IonButton onClick={seeIntroAgain} fill='clear' size='small' color={'medium'} className='ion-margin-top' type='submit' expand='block'>
                                                    See intro again
                                                    <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                                                </IonButton>
                                            </form>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonPage>
            )}
        </>
    );
};

export default Login;