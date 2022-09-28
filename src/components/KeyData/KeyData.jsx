import './KeyData.css';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @description Component shows user's keyData Card composed by name, icon, quantity
 */
const Keydata = ({ keyDataQuantity, keyDataIcon, keyDataUnit, keyDataName }) => {

    return (
        <div className="keyDataCards">
            <img src={keyDataIcon} alt="" />
            <div className="keyDataCardsTextCont">
                <p className="keyDataCardsText">{`${keyDataQuantity}${keyDataUnit}`}</p>
                <p className="keyDataCardsLegend">{keyDataName}</p>
            </div>
        </div>
    )
};

Keydata.propTypes = {
    keyDataQuantity: PropTypes.number.isRequired,
    keyDataIcon: PropTypes.string.isRequired,
    keyDataUnit: PropTypes.string.isRequired,
    keyDataName: PropTypes.string.isRequired,
};

export default Keydata;
