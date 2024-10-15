import CartButton from "@/components/cart-button"
import Menu from "@/components/menu"
import ProfileButton from "@/components/profile-button"
import ReservationButton from "@/components/reservation-button"

const NavBar = () => ( 
    <nav className="nav">
        <div className="navbar">
            <Menu />
            <div className="flex gap-4 items-center">
                <CartButton />
                <ProfileButton />
                <ReservationButton />
            </div>
        </div>
    </nav>
)

export default NavBar