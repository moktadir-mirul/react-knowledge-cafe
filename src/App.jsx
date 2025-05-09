import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import ReadingCards from "./components/ReadCards/ReadCards";
import { Suspense, useState } from "react";
import { auth } from "./firebase";
import { Link } from "react-router";

function App() {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider()

  const handleLoginGithub = () => {
    setUser(null)
    signInWithPopup(auth, githubProvider)
    .then(result => setUser(result.user))
    .catch(error => console.log(error))
  }

  const handleLogInG = () => {
    setUser(null);
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      // setUser(result.user))
      .catch((error) => console.log(error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  const cardPromise = fetch("items.json").then((res) => res.json());

  return (
    <>
      <div className="w-11/12 flex justify-between py-5 mx-auto">
        <div>
          <h1 className="heading font-bold">React Knowledge Cafe</h1>
        </div>
        <div className="flex gap-5 items-center">
          {!user ? (
            <div className="space-x-4">
              <button onClick={handleLogInG} className="btn btn-primary">
                Sing in with Google
              </button>
              <button onClick={handleLoginGithub} className="btn btn-accent">Log In With Github</button>
              <Link to={"/signup"}>
                <button className="btn btn-success"> Sign Up</button>
              </Link>
              <Link to={'/login'}>
                <button className="btn btn-info">Log In</button>
              </Link>
            </div>
          ) : (
            <div>
              <img
                className="w-28 h-28 rounded-full object-cover "
                src={user.photoURL}
                alt={user.displayName}
              />
              <div>
                <h1 className="font-bold text-xl">{user.displayName}</h1>
                <p>
                  <strong>email:</strong> {user.email}
                </p>
                <button onClick={handleSignOut} className="btn btn-accent">
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Suspense fallback={<h1>Data Loading......</h1>}>
        <ReadingCards cardsPromise={cardPromise}></ReadingCards>
      </Suspense>
    </>
  );
}

export default App;
