import { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

import SECTIONS_DATA from "../../data/sections.data";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
