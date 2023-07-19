import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import LoginLogo from '../assets/login.svg'

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);
    
    const login = (e: any) => {
        e.preventDefault();
        console.log('Login');
        // router.push('/');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Ionic App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className="ion-text-center ion-padding">
                    <img src={LoginLogo} alt="Login" width={'50%'} />
                </div>
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
                            <IonButton routerLink='/register' color={'secondary'} className='ion-margin-top' type='submit' expand='block'>
                                Create Account
                                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;