import React from 'react';

const Error = ((props) => {
    let errors = [];
    if (props.errors.length > 0) {
        errors = props.errors.map((error) => {
            return (<div key={error.name} className="error-msg">
                <i className="fa fa-times-circle"></i>
                <p>Error! No menu generated for {error.name}</p>
            </div>)
        })
    }

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
            <div id="list">
                {errors}
            </div>
        </div>
    );
});

export default Error;
