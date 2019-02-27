        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBGHthGSqMHo9T8niRooUWS6Bs4oY5PcyI",
            authDomain: "numbers-game-e7fbd.firebaseapp.com",
            databaseURL: "https://numbers-game-e7fbd.firebaseio.com",
            projectId: "numbers-game-e7fbd",
            storageBucket: "numbers-game-e7fbd.appspot.com",
            messagingSenderId: "838656182534"
        };
        firebase.initializeApp(config);

        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();
        firebase.initializeApp({
            apiKey: "AIzaSyBGHthGSqMHo9T8niRooUWS6Bs4oY5PcyI",
            authDomain: "numbers-game-e7fbd.firebaseapp.com",
            projectId: "numbers-game-e7fbd"
        });
        const firestore = firebase.firestore();
        const settings = { /* your settings... */
            timestampsInSnapshots: true
        };
        const timestamp = snapshot.get('created_at');
        const date = timestamp.toDate();
        firestore.settings(settings);