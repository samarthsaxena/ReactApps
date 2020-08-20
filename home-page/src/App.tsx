import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.css";

// Module federation is done here for Chat component.
import Chat from "chat/Chat";


const App = () => (
    <div>
        <Container>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga adipisci doloribus exercitationem repellendus, recusandae amet. Ipsum minima esse vitae!</p>
            <header><h1>Home Page - Consumer App!</h1></header>
            <h5>Chat window </h5>
            {/* <!-- Just like that federation is done --> */}
            <div
                style={
                    {
                        border: "1px solid #e6e6e6",
                        borderRadius: "1rem",
                        padding: "1rem",
                    }
                }
            >
                <Chat />
            </div>
            <footer><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quidem facere non? Quidem ipsam atque eligendi recusandae accusamus tempora natus! Maxime illum cupiditate aliquid eos ullam commodi ratione, blanditiis voluptates!</p></footer>
        </Container>
    </div >
);

ReactDOM.render(<App />, document.getElementById("app"));
