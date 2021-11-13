import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

// import { set } from "react-hook-form";
// import initializeFirebase from "../firebase/firebase.init";
// import initializeFirebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
// initializeFirebaseAuthentication();

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        const uri = location?.state?.from || "/";
        history.push(uri);
        logInModal();
        saveUserToDatabase(user.email, user.displayName, "PUT");
      })
      .catch((error) => {
        setError(error.message);
        errorModal();
      })
      .finally(() => setIsLoading(false));
  };

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email: email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUserToDatabase(email, name, "POST");

        //  send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            setError(error.message);
            errorModal();
          });

        history.push("/");
        registrationModal();
      })
      .catch((error) => {
        setError(error.message);
        errorModal();
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uri = location?.state?.from || "/";
        history.push(uri);
        logInModal();
      })
      .catch((error) => {
        setError(error.message);
        errorModal();
      })
      .finally(() => setIsLoading(false));
  };

  // user state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        logOutModal();
      })
      .catch((error) => {
        setError(error.message);
        errorModal();
      })
      .finally(() => setIsLoading(false));
  };

  const saveUserToDatabase = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // getting admin user
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const registrationModal = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Registration Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const logInModal = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const logOutModal = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const errorModal = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error}`,
    });
  };

  return {
    user,
    admin,
    signInUsingGoogle,
    registerUser,
    loginUser,
    logOut,
    isLoading,
    error,
  };
};

export default useFirebase;
