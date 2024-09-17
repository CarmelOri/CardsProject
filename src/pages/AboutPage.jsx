import React from "react";
import { Box, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../providers/CustomThemeProvider";

export default function AboutPage() {
    const { isDark } = useTheme();
    return (
        <>
            <PageHeader
                title="About Page"
                subtitle="On this page you can find explanations about using the application"
            />
            <Box
                sx={{ p: 2, display: { xs: "block", md: "inline-flex" } }}
                alignItems="center"
                mt={4}>
                <Typography variant="body1" paragraph sx={{ color: isDark ? "#fff" : "inherit" }}>
                This site features business cards that provide key information about different businesses. The website is built using React in the Vite environment.
                After downloading it from GitHub, simply run npm i in the terminal, followed by npm run dev to get it running. Each card includes a title,
                subtitle, and contact details such as phone number, address, and email. Clicking on a card will take you to the business's page for more details.
                The site offers both a 'light mode' and a 'dark mode,' which can be toggled by clicking the moon icon in the header to suit your viewing preference.
                You can register, save cards you like as favorites, and update your profile. If you sign up as a 'business user,'
                you'll be able to create and publish a card for your business, joining over 200 others already featured on the site.
                You can also edit or delete any cards you create. To find a specific card, just enter a keyword in the search bar and filter through cards 
                from the main page, your favorites, or your own created cards. Enjoy!
                </Typography>
                <Box
                    component="img"
                    src="../../public/images/card.png"
                    alt="an example card"
                    sx={{ width: '100%', maxWidth: 300 }}
                />
            </Box>
        </>
    );
}

