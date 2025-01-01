import * as React from "react";
import Paper from "@mui/material/Paper";
import styles from "./styles"

const ShadowView = ({ containerStyle, sx, elevation, children }) => {
    return (
        <Paper style={{ ...styles.containerStyle, ...containerStyle }} sx={sx} elevation={elevation || 1}>
            {children}
        </Paper>
    );
}

export default ShadowView
