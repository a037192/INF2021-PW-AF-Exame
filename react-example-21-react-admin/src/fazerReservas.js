import { React } from 'react';

export default function fazerReservas(props) {
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Número de pedidos</span>
                <div className="featuredMoneyContainer">
                <span className="featuredMoney">{}</span>
                </div>
            </div>
        </div>
    );
}