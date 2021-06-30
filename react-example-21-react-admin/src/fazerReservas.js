import { React } from 'react';

export default function fazerReservas(props) {
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Rendimento</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{props.reservas.reduce(function(prev, cur) { return prev + cur.total}, 0)}</span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Número de pedidos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{props.restaurantes.length}</span>
                </div>
            </div>
        </div>
    );
}