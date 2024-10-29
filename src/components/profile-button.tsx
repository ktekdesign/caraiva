"use client"
import {UnLoggedUserMenu, LoggedUserMenu} from "components";
import {useSupabaseSession} from "hooks";

const ProfileButton = () => {
    const {isLogged} = useSupabaseSession()
    return (
        isLogged ?
            <LoggedUserMenu />
        :
            <UnLoggedUserMenu />
    )
}

export default ProfileButton