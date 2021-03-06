import React from 'react';
import firebase from 'firebase';

import { Paypal } from '../components';

const client = {
    sandbox: "AcjvDHtXrNM_ZPN29Mwa43epAJ5Lqo5j4Q0AAH4p7zz4T_-PFzUsctDF9k-JQ4AlSlfHK5jENLLU_xj9",
    production: "fxxx",
}

const env = process.env.NODE_ENV === "production" ? "production" : "sandbox";

const total = 100;

const currency = "USD";

const onError = (error) => {
    console.log('erreur', error)
}

const onCancel = data =>  console.log('paiement annulé', data);





const Payment = props => {
    const onSuccess = payment => {
        console.log('paiement réussi');
        const user = firebase.auth().currentUser;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
               console.log('user exist',user);
            } else {
              // No user is signed in.
              console.log("user n'existe pas");
            }
          });
        const dbRef = firebase.database().ref(`users/${user.uid}`)
        const now = new Date();
        const newDate = now.setDate(now.getDate() + 30);
        console.log('newDate', newDate);
        dbRef
            .set({ validUntil: newDate})
                .then(() => {
                    console.log('opération réussie');
                    props.history.push({ pathname: '/'})
                })
                .catch(e => {
                    console.log('error', e)
                })
    }
    return (
        <Paypal 
            env={env}
            client={client}
            total={total}
            currency={currency}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}

        />
    )
}

export { Payment };