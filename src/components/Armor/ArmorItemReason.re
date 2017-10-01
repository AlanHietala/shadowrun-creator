type item = {
    name: string
};

let component = ReasonReact.statelessComponent "ArmorItem";

/* underscore before names indicate unused variables. We name them for clarity */
let make ::item _children => {
  ...component,
  render: fun _self => <div>(ReasonReact.stringToElement item.name)</div>
};

let default = ReasonReact.wrapReasonForJs
  ::component
  (fun jsProps => make item::jsProps##item [||]);
