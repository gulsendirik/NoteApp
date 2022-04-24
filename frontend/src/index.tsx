import ReactDOM from "react-dom"
import App from "./App"
import serviceWorker from "./serviceWorker"

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker();
