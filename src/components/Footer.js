import React from 'react';
import { Grid, Container } from '@material-ui/core';
import FooterContent from '../components/FooterContent';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Grid container className="footer" >
                    <Grid item xs={12} sm={6} md={2} lg={2}>
                        <FooterContent
                            title="Our Network"
                            label={[
                                { label: "Razer Gold & Silver" },
                                { label: "Razer Play" },
                                { label: "Game Deals" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2}>
                        <FooterContent
                            title="Shop"
                            label={[{ label: "RazerStore(Online)" },
                            { label: "My Account" },
                            { label: "Corporate Program" },
                            { label: "Education Program" },
                            { label: "RazerStore(Detail)" },
                            { label: "Partner & Affilate" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2}>
                        <FooterContent
                            title="Need Helps"
                            label={[{ label: "Support" },
                            { label: "Warranty" },
                            { label: "Store FAQs" },
                            { label: "Contact Us" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2}>
                        <FooterContent
                            title="Software/Service"
                            label={[{ label: "Razer Id" },
                            { label: "Synapse 3" },
                            { label: "Chroma RGB" },
                            { label: "Cortex" },
                            { label: "Developer Portal" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2}>
                        <FooterContent
                            title="Company"
                            label={[{ label: "About Razer" },
                            { label: "Press Room" },
                            { label: "Investor Relations" },
                            { label: "Careers" },
                            { label: "zVentures" },
                            { label: "Covid19 Initiatives" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2}>
                        <FooterContent
                            title="Connect"
                            label={[{ label: "Insider" },
                            { label: "Newslatter Sign Up" },
                            ]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
export default Footer;