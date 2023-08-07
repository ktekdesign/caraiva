import Copyright from "@/components/copyright";
import FooterContact from "@/components/footer-contact";
import Newsletter from "@/components/newsletter";
import { Col, Grid } from "@tremor/react";

const Footer = () => (
    <footer>
        <div className="border-y-2">
            <Grid numItems={1} numItemsMd={2} className="footer">
                <Col>
                    <FooterContact />
                </Col>
                <Col>
                    <Newsletter />
                </Col>
            </Grid>
        </div>
        <Copyright />
    </footer>
)

export default Footer