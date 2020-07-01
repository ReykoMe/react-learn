import React from "react";

import avatarImg from "../../../media/avatar_template.png";
import Preloader from "../../../service/Preloader";
import ProfileStatus from "./ProfileStatus";


const Profile = (props) => {
    
    const loadAva = (e) => {
        if (e.target.files.length) {
            props.loadAvatarImage(e.target.files[0]);
        }
    };

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
            <div className='col-md-4'>
                {profile.photos.small ? (
                    <img src={profile.photos.small} className='w-100 rounded mb-2' alt='Avatar' />
                ) : (
                        <img src={avatarImg} className='w-100 rounded mb-2' alt='Avatar' />
                    )}
                <div className='form-group col'>
                    <label htmlFor='avatarSelector'>Выбрать другой аватар</label>
                    <input
                        type='file'
                        id='avatarSelector'
                        className='form-control-file form-control-sm'
                        onChange={loadAva}
                    />
                </div>
            </div>

            <div className='col-md-8'>
                <h3>
                    <span className='badge badge-secondary mr-2'>UserId: {profile.userId}</span>
                    {profile.fullName}
                </h3>

                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
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
