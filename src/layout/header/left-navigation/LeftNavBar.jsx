import React from "react";
import { Box } from "@mui/material";
import ROUTES from "../../../routes/routesModel";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavBarItem from "../../../routes/components/NavBarItem";
import { useCurrentUser } from "../../../users/providers/UserProvider";
export default function LeftNavBar() {
    const { user } = useCurrentUser();
    return (
        <Box>
            <LogoIcon />
            <Logo />
            <NavBarItem to={ROUTES.ABOUT} label={"About"} />

            <Box sx={{
                display: { xs: "none", md: "inline-flex" }
            }}>
                {user ? <NavBarItem to={ROUTES.FAV_CARDS} label={"favourites"} />
                    : null}

                {user && user.isBusiness ? <NavBarItem to={ROUTES.MY_CARDS} label={"my cards"} />
                    : null}
            </Box>

        </Box>
    );
}
