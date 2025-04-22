export default class Main extends React.Component {
    render() {
        return <>
            <h1>hello react</h1>
        </>
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Main/>)