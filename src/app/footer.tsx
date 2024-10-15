import Copyright from "@/components/copyright";
import FooterContact from "@/components/footer-contact";
import Newsletter from "@/components/newsletter";
import SellMedia from "@/components/sell-media";
import { Title, Text } from "@tremor/react";

const Footer = () => (
    <footer>
        <div className="border-y-2 layout-space-x">
            <div className="footer">
                <FooterContact />
                <div>
                    <Title className="heading3 text-secondary">Reserve</Title>
                    <Text>Escolha a plataforma pela qual você deseja ser atendido (a)</Text>
                    <SellMedia direction="start" />
                </div>
                <Newsletter />
            </div>
        </div>
        <div className="layout-space-x">
            <Copyright />
        </div>
    </footer>
)

export default Footer