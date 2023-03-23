// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello world from React");

//     const root = ReactDOM.createRoot(document.getElementById("root"));

//     root.render(heading);


// <div id="parent"> <div id="child"> <h1> from h1 tag </h1> </div></div>

// const firstParent = React.createElement("div", {id:"parent"},(React.createElement("div", {id:"child"},(React.createElement("h1", {}, "Im from H1 Tag")))));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(firstParent);

/* <div id="parent">
    <div id="child1">
        <h1>From H1 Tag</h1>
    </div>
    <div id="child2">
        <h1>From H2 Tag</h1>
    </div>
</div> */

const SecondParent = React.createElement("div",
 {id:"parent"},
//  (React.createElement("div", {id:"child"},(React.createElement("h1", {}, "Im from H1 Tag"))))
[(React.createElement("div", {id:"child1"},[(React.createElement("h1", {}, "Im from H1 Tag")),(React.createElement("h3", {}, "Im from H3 Tag"))])), (React.createElement("div", {id:"child2"},(React.createElement("h2", {}, "Im from H2 Tag"))))]
 );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(SecondParent);

