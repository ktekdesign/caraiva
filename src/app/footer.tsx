import {Copyright, FooterContact, Newsletter, SellMedia} from "components";
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
        <div className="cf-turnstile" data-sitekey="0x4AAAAAAAxk295gmy85HzjN" data-theme="light" />
    </footer>
)

export default Footer