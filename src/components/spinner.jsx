import React, {Component} from "react";
import { css } from "@emotion/core";
import Loader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 30vh auto;
`;

class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <Loader
                    css={override}
                    size={150}
                    loading={true}
                />
            </div>
        );
    }
}

export default Spinner;