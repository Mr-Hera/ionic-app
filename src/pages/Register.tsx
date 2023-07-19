import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';
import RegisterLogo from '../assets/register.svg'
const Register: React.FC = () => {
    const router = useIonRouter();

    const register = (e: any) => {
        e.preventDefault();
        console.log('Login');
        router.goBack();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                            <div className="ion-text-center ion-padding">
                                <img src={RegisterLogo} alt="Login" width={'50%'} />
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                            <IonCard>
                                <IonCardContent>
                                    <form onSubmit={register}>
                                        <IonInput fill='outline' labelPlacement='floating' label='email' type='email' placeholder='example@example.com'></IonInput>
                                        <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='password' type='password'></IonInput>
                                        <IonButton className='ion-margin-top' type='submit' expand='block'>
                                            Create Account
                                            <IonIcon icon={checkmarkDoneOutline} slot='end'></IonIcon>
                                        </IonButton>
                                        <IonItem className='ion-margin-top' lines="none">
                                            <IonLabel>Already have an account?</IonLabel>
                                        </IonItem>
                                        <IonButton routerLink='/' color={'secondary'} type='submit' expand='block'>
                                            Login
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
    );
};

export default Register;