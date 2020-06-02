import React from "react";
import Preloader from "../../service/Preloader";
import avatarImg from '../../media/avatar_template.png'

const Profile = (props) => {
    const profile = props.userProfile;
    //Если profile пустой, показывать прелоадер
    if (!profile) {
        return <Preloader />;
    }

    let socialLinks = [];
    for (let link in profile.contacts) {
        profile.contacts[link] && socialLinks.push({ name: link, key: link, link: profile.contacts[link] });
    }

    return (
        <div className='row mb-3'>
            <div className='col-md-3'>
            {profile.photos.small ? (<img src={profile.photos.small} className='w-100 rounded mb-2' alt='Avatar' />):
                (<img src={avatarImg} className='w-100 rounded mb-2' alt='Avatar' />)}
            </div>
            <div className='col-md-9'>
                <h3>
                    <span className='badge badge-secondary mr-2'>UserId: {profile.userId}</span>
                    {profile.fullName}
                </h3>
                <p>{profile.aboutMe}</p>
                <ul>
                    {socialLinks.map((link) => (
                        <li key={link.key}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
