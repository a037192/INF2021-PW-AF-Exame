import { Card, CardHeader, CardContent } from "@material-ui/core";
import axios from 'axios';
import { ScatterChart, BarChart, Bar,ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import './App.css';
import  React, {Component} from 'react';
import fazerReservas from "./fazerReservas";



/*const [contReservas, setCount] = useState(0);
useEffect(() => {
    async function contarReservas(){
        let response = await fetch("http://[::1]:3000/restaurantes/count")
        response = await response.json();
        setCount(response.count);
    }
    contarReservas();
}, []);*/


export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            ocupa_data: [],
            total_clientes: []
        };
    }
    componentDidMount() {
        axios.get('http://[::1]:3000/restaurantes')
            .then(response => {
                this.setState({ ocupa_data: response.data })
                console.log(response.data)
            });
        axios.get('http://[::1]:3000/restaurantes/count')
            .then(response => {
                this.setState({ total_clientes: response.data })
                console.log(response.data)
            });
    };

    



    render() {
        return (
            <div id="charts">
                <br></br>
                    <Card>
                        <CardHeader title="App Restaurantes" />
                        <CardContent>Faz aqui a tua reserva</CardContent>
                    </Card>
                <br></br>
                    <div className="featured">
                        <div className="featuredItem">
                            <span className="featuredTitle">Número de pedidos</span>
                            <div className="featuredMoneyContainer">
                            <span className="featuredMoney">{this.state.total_clientes.count}</span>
                            </div>
                        </div>
                    </div>
                <br></br>
                <Card>
                    <div className="chart" id="chart">
                        <h3 className="chartTitle" id="chartTitle">Ocupação por dia</h3>
                        <ResponsiveContainer width={"100%"} height={500}>
                            <LineChart
                                width={500}
                                height={300}
                                data={this.state.ocupa_data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="data" />
                                <YAxis dataKey="ocupacao"/>
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="ocupacao" stroke="#9c0505" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
                <br></br>
                <Card>
                    <div id="chart">
                        <h3 className="chartTitle" id="chartTitle">Ocupação por cliente</h3>
                        <ResponsiveContainer width="100%" height={500}>
                            <BarChart
                                width={500}
                                height={300}
                                data={this.state.ocupa_data}
                                margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="nome" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="ocupacao" fill="#9c0505" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
                <br></br>
                <Card>
                    <div id="chart">
                    <h3 className="chartTitle" id="chartTitle">Ocupação por cliente</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart
                            width={400}
                            height={400}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                            >
                            <XAxis type="string" dataKey="data" name="Data" />
                            <YAxis type="number" dataKey="ocupacao" name="Ocupação" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
            
            
        );
    }
};
