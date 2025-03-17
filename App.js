const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child1"},
            React.createElement(
                "h1",
                {},
                "Iam h1"
            )
        ),
        React.createElement(
            "div",
            {id: "child2"},
            React.createElement(
                "h1",
                {},
                "Iam h2"
            )
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)