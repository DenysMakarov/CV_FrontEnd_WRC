import React, {Fragment} from "react"


class BackgroundText extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Fragment>
                    <p className="portfolio_text">PORTFOLIO</p>
                    <p className="portfolio_text">Portfolio</p>
                    <p className="portfolio_text">PORTFOLIO</p>
                    <p className="portfolio_text">Portfolio</p>
                </Fragment>
        );
    }
}

export default BackgroundText