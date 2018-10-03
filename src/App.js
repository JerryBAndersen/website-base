class App {
    constructor() {
        App.instance = this;

        // create root element
        this.root = document.body;
        var style = "margin: 0;border: 0;padding: 0;color: #000000;font-size: 1em;";
        this.root.setAttribute("style",style);
    }

    main() {  
        console.log("main");
    }
}
export default App;