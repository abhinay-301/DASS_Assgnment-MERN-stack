import React, { useState } from "react";
import handleLogout from "./Logout";
export function Profile() {
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    contact: "555-555-5555",
    age: 30,
    followers: ["user1", "user2", "user3"],
    following: ["user4", "user5"],
  });
  const [followersVisible, setFollowersVisible] = useState(false);
  const [followingVisible, setFollowingVisible] = useState(false);
  function handleRemoveFollower(index) {
    const newFollowers = [...userData.followers];
    newFollowers.splice(index, 1);
    setUserData({ ...userData, followers: newFollowers });
  }

  function handleUnfollow(index) {
    const newFollowing = [...userData.following];
    newFollowing.splice(index, 1);
    setUserData({ ...userData, following: newFollowing });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/profile">
            Profile
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Auth Page
              </a>
              <button class="logout-btn"
                onClick={() => handleLogout()}
              >
               <b>Logout</b>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="profile">
        <h2>Welcome {userData.firstName}</h2>
        <div>
          <div>
            <label>First Name:</label>
            <span>{userData.firstName}</span>
          </div>
          <div>
            <label>Last Name:</label>
            <span>{userData.lastName}</span>
          </div>
          <div>
            <label>Email:</label>
            <span>{userData.email}</span>
          </div>
          <div>
            <label>Contact:</label>
            <span>{userData.contact}</span>
          </div>
          <div>
            <label>Age:</label>
            <span>{userData.age}</span>
          </div>
        </div>
        <hr />
        <div>
          <h3 onClick={() => setFollowersVisible(!followersVisible)}>
            Followers
          </h3>
          {followersVisible && (
            <ol>
              {userData.followers.map((follower, index) => (
                <li key={index}>
                  {follower}
                  <button
                    className="btn"
                    onClick={() => handleRemoveFollower(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>
        <div>
          <h3 onClick={() => setFollowingVisible(!followingVisible)}>
            Following
          </h3>
          {followingVisible && (
            <ol>
              {userData.following.map((following, index) => (
                <li key={index}>
                  {following}
                  <button className="btn" onClick={() => handleUnfollow(index)}>
                    Unfollow
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}
