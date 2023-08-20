"use client"
import UnLoggedUserMenu from "./unlogged-user-menu";
import LoggedUserMenu from "./logged-user-menu";
import useSupabaseSession from "@/hooks/useSupabaseSession";

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