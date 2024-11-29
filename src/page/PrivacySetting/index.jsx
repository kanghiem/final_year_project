import React from "react";

const PrivacySetting_Page = () => {
  return (
    <div className="postAudience--Content">
      <h3 className="titleModal">Post Audience</h3>
      <hr className=" hr-Modal" />
      <p className="text--base">Who can see your post?</p>
      <p className="textDes">
        Your post will appear on the feed, profile, and in search results. By
        default, it will be visible to{" "}
        <span className="text--span">Public</span>, but you can change the
        audience for each individual post.
      </p>

      <div className="priType--Content">
        {/* Publish */}
        <div className="privacyType--Content">
          <div className="privacyType--Item">
            <div className="item--content">
              <i className="fa-thin fa-earth-americas item--Icn" />
              <p className="typeTitle">
                Public
                <br />
                <span className="text--privacyType">Visible to everyone.</span>
              </p>
            </div>
            <input className="checkBoxItem" type="checkbox" name="" id="" />
          </div>
        </div>

        {/* Followers */}
        <div className="privacyType--Content">
          <div className="privacyType--Item">
            <div className="item--content">
              <i className="fa-sharp fa-thin fa-user-group item--Icn" />

              <p className="typeTitle">
                Followers
                <br />
                <span className="text--privacyType">
                  Only visible to friends and followers.
                </span>
              </p>
            </div>

            <input className="checkBoxItem" type="checkbox" name="" id="" />
          </div>
        </div>

        {/* Only Me */}
        <div className="privacyType--Content">
          <div className="privacyType--Item">
            <div className="item--content">
              <i className="fa-thin fa-face-sunglasses item--Icn" />
             

              <p className="typeTitle">
              Only Me
                <br />
                <span className="text--privacyType">
                Visible only to the post owner.
                </span>
              </p>
            </div>

            <input className="checkBoxItem" type="checkbox" name="" id="" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default PrivacySetting_Page;
