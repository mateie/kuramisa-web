import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "Varta, sans-serif",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">The beginning...</div>
        </ThemeProvider>
    );
};

export default App;
