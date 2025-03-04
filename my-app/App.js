const { AppProvider } = require("./context/AppContext");
const Navigation = require("./navigation/Navigation");

export default function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}
