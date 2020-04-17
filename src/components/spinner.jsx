import React, {Component} from "react";
import { css } from "@emotion/core";
import Loader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 25vh auto;
  border-color: white;
`;

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className="sweet-loading">
                <Loader
                    css={override}
                    size={150}
                    color={"white"}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}

export default Spinner;